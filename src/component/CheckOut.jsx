import "./checkOut.css"
const CheckOut = ({id,imag,titel,price,star}) => {
    return (
      <>
        <div className="checkout__container">
          <div className="checkout__info">
            <p>{titel}</p>
            <p>
              <small>$</small>
              <strong>{price}</strong>
            </p>
            {Array(star)
              .fill()
              .map((_, i) => (
                <i className="star yellow icon"></i>
              ))}
          </div>
          <button className="checkout__buy">Remove a Basket</button>
        </div>
      </>
    );
}
 
export default CheckOut;