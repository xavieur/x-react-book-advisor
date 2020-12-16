import React from 'react'

const RecommendBook = (props) => {
    return (
        <div>
            <button className="big-button" disabled={!props.hayLibros} onClick={props.escogerLibro}>Recomendar libro</button>
        </div>
    )
}

export default RecommendBook