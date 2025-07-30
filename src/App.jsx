import { Link, Outlet } from 'react-router-dom'; 

function App() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="store">Store</Link>
            <Outlet />
        </>
    )
}

export default App; 