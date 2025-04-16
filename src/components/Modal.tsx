import React, { useEffect, useRef } from "react"

type ModalSize = "medium" | "full"

const getModalWidth = (size: ModalSize): string => {
    if (size === "medium") {
        return "max-w-2xl"
    }

    return ""
}

const Modal: React.FC<{onClose: () => void, size?: ModalSize, children: React.ReactNode}> = ({onClose, children, size = "full"}) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    const childEl = children ? React.Children.only(children) : null
    const hasChild = childEl !== null

    useEffect(() => {
        const dialogEl = dialogRef.current
        if (!dialogEl) {
            return
        }

        if (hasChild) {
            dialogEl.showModal()
            dialogEl.scrollTo(0, 0)
        } else {
            dialogEl.close()
        }
    }, [hasChild])

    useEffect(() => {
        const dialogEl = dialogRef.current
        if (!dialogEl) {
            return
        }

        dialogEl.addEventListener("close", onClose)
        return () => dialogEl.removeEventListener("close", onClose)
    }, [onClose])

    return <dialog
        ref={dialogRef}
        className="backdrop:bg-gray-900/90 w-[calc(100dvw-20px)] m-auto p-0"
    >
        <div className={`h-full ${getModalWidth(size)} mx-auto flex flex-col hh-body`}>
            {childEl}
            <div><button className="p-2" onClick={onClose}>Lukk</button></div>
        </div>
    </dialog>
}


export default Modal