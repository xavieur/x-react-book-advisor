import React from 'react'

const Book = (props) => {
    return (
        <div className="book">
            <p className="data">
                {props.cuenta}. {props.titulo} / {props.autor}
            </p>
            <button onClick={() => {
                props.borrarUnLibro(props.titulo)
            }} >x</button>
        </div>
    )
}

export default Book