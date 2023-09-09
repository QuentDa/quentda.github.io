import React, { useRef} from "react";

export default function Modal({title, children, isOpen, handleModal }) {
    const modalRef = useRef(null);
    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleModal();
        }
    }

    return (
        isOpen ? (
            <div className="modal" onClick={handleOutsideClick}>
                <div className="modal-content" ref={modalRef}>
                    <div className="modal-header">
                        <h2>{title}</h2>
                        <button onClick={handleModal}>X</button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        ) : null
    );
}
