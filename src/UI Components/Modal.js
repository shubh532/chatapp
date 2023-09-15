import { Fragment } from "react"
import ReactDOM from "react-dom"
import { useDispatch } from "react-redux"
import { modalHandler } from "../Redux/Modal"

function BackDrop(props) {
    const Dispatch = useDispatch()

    const BackDropHandler = () => {
        Dispatch(modalHandler())
    }

    return (<div onClick={BackDropHandler} className="bg-black opacity-50 w-full z-10 h-full fixed border-4 border-black"></div>)
}
function ModalOverLay(props) {
    return (
        <div className="fixed bottom-1/2  right-1/2 translate-x-1/2 translate-y-1/2 z-10">
            {props.children}
        </div>
    )
}


const ParentElement = document.getElementById("OverLay")
console.log(ParentElement, "ParentElement")



const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, ParentElement)}
            {ReactDOM.createPortal(<ModalOverLay
            >{props.children}</ModalOverLay>, ParentElement)}
        </Fragment>
    )
}
export default Modal;