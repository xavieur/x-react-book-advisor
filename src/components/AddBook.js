import React from 'react'

export default class AddBook extends React.Component {
    constructor(props) {
        super(props)
        this.introducirLibro = this.introducirLibro.bind(this)
        this.state = {
            error: undefined
        }
    }
    introducirLibro(evento) {
        evento.preventDefault()
        const title = evento.target.elements.title.value.trim()
        const author = evento.target.elements.author.value.trim()
        const error = this.props.introducirLibro({ title, author })
        this.setState(() => {
            return { error: error }
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.introducirLibro}>
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" id="title" />
                    <label htmlFor="author">Autor</label>
                    <input type="text" name="author" id="author" />
                    <button>Añadir libro</button>
                </form>
            </div>
        )
    }
}

