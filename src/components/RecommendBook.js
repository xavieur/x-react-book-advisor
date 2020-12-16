import React from 'react'

const RecommendBook = (props) => {
    return (
        <div>
            <button disabled={!props.hayLibros} onClick={props.escogerLibro}>Recomendar libro</button>
        </div>
    )
}

export default RecommendBook