import { Link, Outlet } from 'react-router-dom'; 
import { useState } from 'react'; 
import './App.css'; 

function App() {

    const [ num, setNum ] = useState(0); 

    return (
        <div className="page-container">
            <div className="nav">
                <div className="nav-left">
                    <Link to="/" className="nav-button">Home</Link>
                    <Link to="store" className="nav-button">Store</Link>
                </div>
                <div className="nav-right">
                    <div className="cart">Cart</div>
                    <div className="cart-num">{num}</div>
                </div>
            </div>
            <div className="body">
                <Outlet context={{num, setNum}}/>
            </div>
        </div>
    )
}

export default App; 