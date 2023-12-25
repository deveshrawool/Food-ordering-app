import React from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'

const BackDrop=(props)=><div className={classes.backdrop} onClick={props.onClose}></div>

const ModalOverlay=(props)=> <div className={classes.modal}><div className={classes.content}>{props.children}</div></div>

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
        {ReactDom.createPortal(<BackDrop onClose={props.onClose} />,portalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </>
  )
}

export default Modal