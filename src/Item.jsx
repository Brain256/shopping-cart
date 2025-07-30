import './Item.css'

function Item({title, price, desc, image}) {
    return (
        <>
            <div className="img-container"><img src={image} width="400px" height="400px"></img></div>
            <div className="item-container">
                <div className="title">{title}</div>
                <div className="bottom">
                    <div className="price">${price}</div>
                    <button className="cart-btn">Add To Cart</button>
                </div>
                
            </div>
        </>
    )
}

export default Item; 