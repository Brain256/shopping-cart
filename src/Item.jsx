import './Item.css'

function Item({num, setNum, title, price, desc, image}) {

    const onClick = () => {
        setNum(num+1); 
    }

    return (
        <>
            <div className="img-container"><img src={image} width="400px" height="400px"></img></div>
            <div className="item-container">
                <div className="title">{title}</div>
                <div className="bottom">
                    <div className="price">${price}</div>
                    <button className="cart-btn" onClick={onClick}>Add To Cart</button>
                </div>
                
            </div>
        </>
    )
}

export default Item; 