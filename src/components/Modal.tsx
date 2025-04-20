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
        className="backdrop:bg-gray-900/90 "
        style={{maxInlineSize: "100vw", maxBlockSize: "100vh"}}
    >
        <div className={`flex flex-col items-center`} style={{height: "calc(100vh - 80px)", width: "100vw", marginTop: 40, overflow: "hidden"}}>
            <div className={`${getModalWidth(size)} hh-body`} style={{height: "100%", display: "flex", flexDirection: "column"}}>
                <div style={{flex: 1, overflowY: "auto"}}>
                    {childEl}
                </div>
                <div className={"p-4"}>
                    <button className="p-2" onClick={onClose}>Lukk</button>
                </div>
            </div>
        </div>
    </dialog>
}


export default Modal