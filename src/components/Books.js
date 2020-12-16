import React from 'react'
import Book from './Book'

const Books = (props) => {
    return (
        <div>
            <div className="widget-header">
                <p className="widget__message">{props.libros.length ? `Hay ${props.libros.length} libros` : 'No hay libros disponibles en este momento'}</p> <p><button className="button button--link" onClick={props.borrarLibros} >Borrar libros</button></p>
            </div>
            {props.libros.map((libro, index) => {
                return <Book key={libro.title} titulo={libro.title} autor={libro.author} borrarUnLibro={props.borrarUnLibro} cuenta={index + 1} />
            })}
        </div>
    )
}

export default Books