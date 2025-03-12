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
import { ListsPreachers } from './ListsPreachers';



export const AnimatedRoutes = () => {
    const { session } = useContext(FormStepsContext);
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Routes>
                {session ? (
                    // Si la sesión es verdadera, mostramos las rutas que no son "/" ni "/demo"
                    <>
                        <Route path="/dashboard" element={<ProtectedComponent 
                            element={<Dashboard />} 
                            isAuthenticated={session} 
                            priority={true} />} />
                        <Route path="/predicadores" element={<ProtectedComponent 
                            element={<Preachers />} 
                            isAuthenticated={session} 
                            priority={true} />} />
                        <Route path="/ancianos" element={<ProtectedComponent 
                            element={<Seniors />} 
                            isAuthenticated={session} 
                            priority={true} />} />
                        <Route path="/listas-de-predicacion" element={<ProtectedComponent 
                            element={<ListsPreachers />} 
                            isAuthenticated={session} 
                            priority={true} />} />
                        <Route path="*" element={<NotFound />} />
                    </>
                ) : (
                    // Si la sesión es falsa, mostramos las rutas "/" y "/demo"
                    <>
                        <Route index path="/" element={<ProtectedComponent 
                            element={<Home />} 
                            isAuthenticated={session} 
                            priority={false} />} />
                        <Route path="/demo" element={<ProtectedComponent 
                            element={<Demo />} 
                            isAuthenticated={session} 
                            priority={false} />} />
                        <Route path="*" element={<NotFound />} />
                    </>
                )}
                </Routes>
            </AnimatePresence>
        </>
    )
}
