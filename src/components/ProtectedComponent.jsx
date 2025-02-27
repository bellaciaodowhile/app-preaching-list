import { Navigate } from 'react-router-dom'

export const ProtectedComponent = ({ element, isAuthenticated }) => {
    return isAuthenticated ? <Navigate to={'/dashboard'} /> : element 
}