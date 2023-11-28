"use client"

import { useEffect, useState } from "react"
import Modal from "./Modal"

const WpPostImageEnlargeHook = () => {
    const [imageModalSrc, setImageModalSrc] = useState<string | null>(null)
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

    return <Modal onClose={() => setImageModalSrc(null)}>
       {imageModalSrc && <div className="flex items-center justify-center h-full">
            <img src={imageModalSrc} alt="" className="max-w-full max-h-full h-auto w-auto object-contain" />
        </div>}
    </Modal>
}

export default WpPostImageEnlargeHook