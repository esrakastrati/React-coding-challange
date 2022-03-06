const Modal = ({ show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const closeModal = () => { show = false }

    return (
        <div className={showHideClassName}>
            <section className="modal-main"
            >
                <img src={children} />
                <button type="button" onClick={() => closeModal}>
                    Close
                     </button>
            </section>
        </div>
    );
};

export default Modal;