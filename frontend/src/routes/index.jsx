import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoute';
import PetsPage from '../pages/PetsPage';
import OwnersPage from '../pages/OwnersPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/dashboard' element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>}
                />
            <Route path='/pets' element={
                <PrivateRoute>
                    <PetsPage />
                </PrivateRoute>}
                />
            <Route path='/owners' element={
                <PrivateRoute>
                <OwnersPage />
                </PrivateRoute>}
            />
        </Routes>
    )
}

export default AppRoutes;