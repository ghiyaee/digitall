import "./subtotal.css"
const SubTotal = () => {
    return (
        <>
            <div className="subtotal">
                <div className="subtotal__price">
                <p>SubTotal :</p>
                <small>$</small>
                <strong>1000</strong>
                </div>
                <button className="subtotal__btn">Proceed CheckOut </button>
          </div>
        </>
      );
}
 
export default SubTotal;