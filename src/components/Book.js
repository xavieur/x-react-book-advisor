import React from 'react'

const Book = (props) => {
    return (
        <li>
            {props.titulo} / {props.autor} <button onClick={() => {
                props.borrarUnLibro(props.titulo)
            }} >x</button>
        </li>
    )
}

export default Book