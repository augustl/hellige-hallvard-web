"use client"

import { useEffect, useRef, useState } from "react"

const WpPostImageEnlargeHook = () => {
    const [imageModalSrc, setImageModalSrc] = useState<string | null>(null)
    const dialogRef = useRef<HTMLDialogElement | null>(null)
    useEffect(() => {
        const windowClickListener = (e: MouseEvent) => {
            const wpBlockImage = (e.target as Element).closest(".wp-block-image")
            if (!wpBlockImage) {
                return
            }

            const img = wpBlockImage.querySelector("img")

            if (!img) {
                return
            }

            const imgSrc = img.getAttribute("data-large-file") || img.getAttribute("data-medium-file")

            if (!imgSrc) {
                return
            }

            setImageModalSrc(imgSrc)
        }

        window.addEventListener("click", windowClickListener)

        return () => {
            window.removeEventListener("click", windowClickListener)
        }
    }, [])

    useEffect(() => {
        const dialogEl = dialogRef.current
        if (!dialogEl) {
            return
        }

        if (imageModalSrc) {
            dialogEl.showModal()
        } else {
            dialogEl.close()
        }
    }, [imageModalSrc])

    return <dialog ref={dialogRef} className={`
    backdrop:bg-gray-900 backdrop:bg-opacity-90
    top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/3
    h-5/6 w-5/6
    `}>
        <div className="h-full w-full flex flex-col">
            <div className="flex-1 min-h-0">
                {imageModalSrc && <img src={imageModalSrc} alt="" className="max-w-full max-h-full h-auto w-auto object-contain mx-auto" />}
            </div>
            <div><button className="p-2" onClick={() => setImageModalSrc(null)}>Lukk</button></div>
        </div>
    </dialog>
}

export default WpPostImageEnlargeHook