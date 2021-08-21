import { Switch, Route } from 'react-router-dom'
import React from 'react'
import MainPage from './mainpage/MainPage'
import SearchPage from './searchpage/SearchPage'


 const Routes =(props) => {

        return (


            <Switch>

                <Route exact path="/" render={() => (

                    <MainPage books={props.books} updateBooks={props.updateBooks} />
                )}>

                </Route>

                <Route path="/search" render={() => (

                    <SearchPage books={props.books} updateBooks={props.updateBooks} />

                )}>

                </Route>

            </Switch>


        )

    }

    

export default Routes;