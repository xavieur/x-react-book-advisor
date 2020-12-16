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
                {this.state.error && <p className="add-book-error">{this.state.error}</p>}
                <form className="add-book" onSubmit={this.introducirLibro}>
                    <label htmlFor="title">Título</label>
                    <input className="add-book__input" type="text" name="title" id="title" />
                    <label htmlFor="author">Autor</label>
                    <input className="add-book__input" type="text" name="author" id="author" />
                    <button className="button">Añadir libro</button>
                </form>
            </div>
        )
    }
}

