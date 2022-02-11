import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Admin from '../pages/Admin'
import Login from '../pages/Login'

export const Root = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Admin />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
)