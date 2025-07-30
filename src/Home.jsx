
import './Home.css'; 
import { Link } from 'react-router-dom'; 

function Home() {
    return (
        <div className="home-container">

                <h1>Welcome to My Fake Store</h1>
                <h2>Browse Hundred's of Items That Don't Actually Exist</h2>
                <Link to="store" className="store-link">Start Shopping</Link>

        </div>
    )
}

export default Home; 