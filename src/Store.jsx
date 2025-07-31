import {useState, useEffect} from 'react'
import Item from './Item.jsx'
import './Store.css'
import { useOutletContext } from 'react-router-dom'; 

function Store() {

    const { num, setNum } = useOutletContext();

    let [ data, setData ] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(d => setData(d));

        }, [])

    return (
        <div className="store-container">
            {data != null && data.map((item) => {
                return <div id={item.id}><Item num={num} setNum={setNum} title={item.title} price={item.price} desc={item.description} image={item.image}></Item></div>
            })}
        </div>
    )
}

export default Store; 