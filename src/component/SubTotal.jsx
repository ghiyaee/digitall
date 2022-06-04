import "./subtotal.css"
const SubTotal = ({total}) => {
    return (
        <>
            <div className="subtotal">
                <div className="subtotal__price">
                <p>SubTotal :</p>
                <small>$</small>
                <strong>{total}</strong>
                </div>
                <button className="subtotal__btn">Proceed CheckOut </button>
          </div>
        </>
      );
}
 
export default SubTotal;