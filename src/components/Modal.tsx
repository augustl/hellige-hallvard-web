import React, { useEffect, useRef } from "react"

const Modal: React.FC<{onClose: () => void, children: React.ReactNode}> = ({onClose, children}) => {
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
        } else {
            dialogEl.close()
        }
    }, [hasChild])

    return <dialog
        ref={dialogRef}
        className="backdrop:bg-gray-900 backdrop:bg-opacity-90
        top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/4
        h-full w-full"
    >
        <div className="h-full w-full flex flex-col">
            <div className="flex-1 min-h-0 overflow-y-auto">
                {childEl}
            </div>
            <div><button className="p-2" onClick={onClose}>Lukk</button></div>
        </div>
    </dialog>
}


export default Modal