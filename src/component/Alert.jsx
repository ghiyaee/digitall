import "./alert.css"
const Alert = ({ alert }) => {
    console.log(alert);

  return (
    <>
      <p className={`${alert} ? 'hiden' : 'alert' `}>add to basket</p>
    </>
  );
};
 
export default Alert;