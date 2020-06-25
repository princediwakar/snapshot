import React from 'react'

const Modal = ({url, alt}) => {
    
    return (
        <div className="absolute bg-white z-40  h-full w-full mx-auto shadow">
            <img className="mx-auto" src={url} alt={alt}/>
        </div>
    )
}

export default Modal
