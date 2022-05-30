import Header from "./component/Header";
import Home from "./component/Home";
import Basket from "./component/Basket";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
const App = () => {
    return ( 
      <>
      
        <Router>
          <Header/>
          <Routes>
              < Route path="/" element={<Home/>}/>
            < Route path="/bk" element={<Basket />}>
              <Route path="hr" element={<Header/> }/>
               </Route>
          </Routes>
         </Router>

        </>
     );
}
 
export default App;