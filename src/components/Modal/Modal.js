import './Modal.css';
const Modal = (props) => {
    const { show, toggleShow, title, isFooter, data, togglTabs } = props
    const handleClose = () => {
        toggleShow()
    }
    const togglTab = (id) => {
        togglTabs(id)
    }
    return (
        <>
            {show &&
                <>
                    <div className={`fade modal-backdrop ${show ? 'show' : ''}`}></div>
                    <div className={`modal fade modal-dialog-centered ${show ? 'show' : ''}`} tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{title}</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        onClick={handleClose}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <ul className='modalList'>
                                        {
                                            data.slice(4).map((tab, index) => (
                                                <li>
                                                    <button
                                                        key={index}
                                                        onClick={() => togglTab(tab.tabId)}
                                                    >
                                                        {tab.tabName}
                                                    </button>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                {isFooter &&
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Modal;
