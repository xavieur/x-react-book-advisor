import React from 'react'
import Modal from 'react-modal';

const RecommendModal = (props) => {
    console.log(props)
    return (
        <Modal
            isOpen={!!props.libroSeleccionado}
            onRequestClose={props.deseleccionarLibro}
            contentLabel="Libro recomendado"
            closeTimeoutMS={100}
            className="modal"
        >
            <h3>Libro recomendado</h3>
            {!!props.libroSeleccionado && <p>{props.libroSeleccionado.title}</p>}
            {!!props.libroSeleccionado && <p>{props.libroSeleccionado.author}</p>}
            <button className="button" onClick={props.deseleccionarLibro}>De acuerdo, lo leeré.</button>
        </Modal>
    )
}

export default RecommendModal
