import React from 'react'

const Header = (props)=>{
    return (
        <div>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </div>
    )
}

Header.defaultProps = {
    titulo: 'Consejero literario digital'
}

export default Header