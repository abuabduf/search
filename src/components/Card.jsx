function Card({product}){;
    return(
        <div className="card" id={product.id}>
            <img className="image" src={product.img} alt="" />
            <h1 className="h1">{product.quantity}</h1>
            <h1 className="h2">{product.price}</h1>
            <h1 className="h3">{product.text_one}</h1>
            <h1 className="h4">{product.text}</h1>
        </div>
    )
}

export default Card;