import React from 'react';
import Liste from './Liste'
import NavBar from './NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ajout from './Ajout';


class App extends React.Component {
    render() {
        return (
            <section id="todo">
                <BrowserRouter>
                    <Routes>
                        <Route path="/ajout" component={Ajout} />
                        <Route path="/" component={Liste} />
                    </Routes>
                    <NavBar />
                </BrowserRouter>
            </section>
        )

    }

}

export default App