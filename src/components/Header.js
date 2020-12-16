import React from 'react'

const Header = (props)=>{
    return (
        <div className="header">
            <div className="container">
            <h1 className="title">{props.titulo}</h1>
            <h2 className="subtitle">{props.subtitulo}</h2>
            </div>
        </div>
    )
}

Header.defaultProps = {
    titulo: 'Consejero literario digital'
}

export default Header