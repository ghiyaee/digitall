import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { MyProvider,MyContext } from "./contaxt/index";
import Header from "./component/Header";
import Home from "./component/Home";
import Basket from "./component/Basket";
import Login from "./component/Login";
import Regester from "./component/Regester";
import SearchBar from "./component/SearchBar";
import "./app.css"
const App = () => {

    return ( 
      <>
       <Router>
          <MyProvider>
                      <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/bk" element={<Basket />}>
                           <Route path="hr" element={<Header />} />
                    </Route>
                    <Route path="/lo" element={<Login />} />
                    <Route path="/rg" element={<Regester  />} />
                    <Route path="/sr" element={<SearchBar  /> }/>
                </Routes>
         </MyProvider>
      </Router>
        
        </>
     );
}
 
export default App;