import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../components/home';
import Layout from '../layout/layout';
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path='/*' element={<h1>404 not found</h1>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes