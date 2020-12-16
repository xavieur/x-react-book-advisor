import React from 'react'
import Book from './Book'

const Books = (props) => {
    return (
        <div>
            <p>{props.libros.length ? `Hay ${props.libros.length} libros` : 'No hay libros disponibles en este momento'}</p>
            <p><button onClick={props.borrarLibros} >Borrar libros</button></p>
            <ul>
                {props.libros.map((libro) => {
                    return <Book key={libro.title} titulo={libro.title} autor={libro.author} borrarUnLibro={props.borrarUnLibro} />
                })}
            </ul>
        </div>
    )
}

export default Books