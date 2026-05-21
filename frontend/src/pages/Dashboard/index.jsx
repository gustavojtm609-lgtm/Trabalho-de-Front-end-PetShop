import { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import './style.css';

function Dashboard() {
    return (
        <div className="dashboard-container"> {/* Uma div pai ajuda no CSS */}
            <h1>Dashboard</h1>
            <MainLayout/>
        </div>
    )
}

export default Dashboard;