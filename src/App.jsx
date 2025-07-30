import { Link, Outlet } from 'react-router-dom'; 
import './App.css'; 

function App() {
    return (
        <div className="page-container">
            <div className="nav">
                <Link to="/" className="nav-button">Home</Link>
                <Link to="store" className="nav-button">Store</Link>
            </div>
            <div className="body">
                <Outlet />
            </div>
        </div>
    )
}

export default App; 