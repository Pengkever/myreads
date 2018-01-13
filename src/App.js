import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Shelf from './Shelf'
import SearchBook from './SearchBook'
import BookDetail from './BookDetail'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

    state = {
        /*
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         *
         *
         */
        localBooks: []
    }

    componentWillMount() {
        BooksAPI.getAll()
        .then(books => this.setState({localBooks: books}))
        .catch(e => console.error(e.message))
    }
    
    /* 路由注册 */
    render() {

        const { localBooks } = this.state

        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <Shelf books={localBooks}/>
                )}/>
                <Route path='/search' render={() => (
                    <SearchBook books={localBooks}/>
                )}/>
                <Route exact path='/detail/:id' component={BookDetail}/>
            </div>
        )
    }
}

export default BooksApp