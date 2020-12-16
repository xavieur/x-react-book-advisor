import React from 'react'
import Header from './Header'
import RecommendBook from './RecommendBook'
import Books from './Books'
import AddBook from './AddBook'
import RecommendModal from './RecommendModal'

export default class BooksApp extends React.Component {
    constructor(props) {
        super(props)

        this.escogerLibro = this.escogerLibro.bind(this)
        this.borrarLibros = this.borrarLibros.bind(this)
        this.introducirLibro = this.introducirLibro.bind(this)
        this.borrarUnLibro = this.borrarUnLibro.bind(this)
        this.deseleccionarLibro = this.deseleccionarLibro.bind(this)

        this.state = {
            books: [
                { title: 'El principito', author: 'Antoine de Saint-Exupéry' },
                { title: 'El Quijote', author: 'Miguel de Cervantes Saavedra' },
                { title: 'Platero y yo', author: 'Juan Ramón Jiménez' }
            ],
            recommendedBook: undefined
        }
    }
    escogerLibro() {
        console.log('escoger libro')
        const indice = Math.floor(Math.random() * this.state.books.length)

        this.setState(() => {
            return {
                recommendedBook: this.state.books[indice]
            }
        })
        /* alert(this.state.books[indice].title + ' / ' + this.state.books[indice].author); */
    }
    borrarLibros() {
        console.log('aquí ponemos la trituradora')
        this.setState(() => {
            return {
                books: []
            }
        })
    }
    borrarUnLibro(tituloABorrar) {
        console.log('tituloABorrar', tituloABorrar);
        this.setState((estadoPrevio) => {
            return {
                books: estadoPrevio.books.filter((book) => {
                    return book.title !== tituloABorrar
                })
            }
        })
    }
    introducirLibro(nuevoLibro) {
        if (!nuevoLibro.title) {
            return 'Hay que introducir libro válido'
        } else if (
            this.state.books.map((book) => {
                return book.title
            }).indexOf(nuevoLibro.title) > -1
        ) {
            return 'Libro repetido'
        }

        this.setState((estadoPrevio) => {
            return {
                books: estadoPrevio.books.concat(nuevoLibro)
            }
        })
    }
    deseleccionarLibro() {
        this.setState(() => {
            return { recommendedBook: undefined }
        })
    }
    render() {
        const subtitle = 'Te asesoro sobre entidades alfanuméricas'

        return (
            <div className="container">
                <Header subtitulo={subtitle} />
                <RecommendBook escogerLibro={this.escogerLibro} hayLibros={this.state.books.length > 0} />
                <div className="widget">
                    <Books libros={this.state.books} borrarLibros={this.borrarLibros} borrarUnLibro={this.borrarUnLibro} />
                    <AddBook introducirLibro={this.introducirLibro} />
                </div>
                <RecommendModal libroSeleccionado={this.state.recommendedBook} deseleccionarLibro={this.deseleccionarLibro} />
            </div>
        )
    }
}