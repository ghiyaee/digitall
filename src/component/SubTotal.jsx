import "./subtotal.css"
const SubTotal = ({total,item}) => {
    return (
      <>
        <div className="subtotal">
          <div className="subtotal__left">
          <h2 className="basket__trm">Your Shopping Basket</h2>
          </div>
          <div className="subtotal__right">
              <div className="subtotal__price">
              <p>SubTotal: ({item} )items</p>
              <small>$</small>
              <strong>{total}</strong>
              </div>
          <button className="subtotal__btn">Proceed CheckOut </button>
          </div>
        </div>
      </>
    );
}
 
export default SubTotal;