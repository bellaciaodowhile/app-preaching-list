import { Routes, Route, useLocation } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { Demo } from '../pages/Demo';
import { AnimatePresence } from 'framer-motion';



export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route index path="/" element={ <Home/> }></Route>
                    <Route path="/login" element={ <Login/> }></Route>
                    <Route path="/register" element={ <Register/> }></Route>
                    <Route path="/demo" element={ <Demo/> }></Route>
                    <Route path="*" element={ <NotFound /> }></Route>
                </Routes>
            </AnimatePresence>
        </>
    )
}
