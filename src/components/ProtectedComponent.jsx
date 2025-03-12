import { Navigate } from 'react-router-dom'

export const ProtectedComponent = ({ element, isAuthenticated, priority }) => {
    if (priority) {
        return isAuthenticated ? element : <Navigate to={'/dashboard'} /> 
    } else {
        return isAuthenticated ? <Navigate to={'/dashboard'} /> : element 
    }
}