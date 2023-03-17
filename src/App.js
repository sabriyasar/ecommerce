import React from "react"
import {Context} from "./context/context"
import {Route, Routes} from "react-router-dom"
import {HomePage} from "./pages/HomePage"
import {ProductOverView} from "./pages/ProductOverView"
import {Header} from "./components/header/Header"
import { Provider } from "react-redux"
import {store} from "./redux"

export default function App() {
    const productId = {id: 1}

    return (
        <main>
            <Provider store={store}>
            <Context.Provider value={productId}>
                <Header />
                <Routes>
                    <Route path='/' element={ <HomePage /> }/>
                    <Route path='/products/:id' element={ <ProductOverView /> }/>
                </Routes>
            </Context.Provider>
            </Provider>
        </main>
    )
}
