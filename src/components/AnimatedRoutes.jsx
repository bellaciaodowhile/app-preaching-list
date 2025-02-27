import { Routes, Route, useLocation, redirect } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { Demo } from '../pages/Demo';
import { AnimatePresence } from 'framer-motion';
import { Dashboard } from '../pages/Dashboard';
import { FormStepsContext } from '../context/FormStepsContext';
import { useContext } from 'react';
import { ProtectedComponent } from './ProtectedComponent';
import { Preachers } from './Preachers';
import { Seniors } from './Seniors';


export const AnimatedRoutes = () => {
    const { session } = useContext(FormStepsContext);
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route index path="/"  element={<ProtectedComponent element={<Home/>} isAuthenticated={session}/> }/>
                    <Route path="/demo" element={<ProtectedComponent element={<Demo/>} isAuthenticated={session}/>} />
                    <Route path="/dashboard" element={ <ProtectedComponent element={<Dashboard/>} isAuthenticated={!session}/> }></Route>
                    <Route path="/predicadores" element={ <ProtectedComponent element={<Preachers/>} isAuthenticated={!session}/> }></Route>
                    <Route path="/ancianos" element={ <ProtectedComponent element={<Seniors/>} isAuthenticated={!session}/> }></Route>
                    <Route path="*" element={ <NotFound /> }></Route>
                </Routes>
            </AnimatePresence>
        </>
    )
}
