import { Route,BrowserRouter , Routes, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { People } from "./components/People";
import { Home } from "./components/Home";
import { Person } from "./components/Person";




  const
  

  return (
    <>
    <BrowserRouter>
      <header>
        <ul>
          <li>
            <Link to={"/"}>
            Home
            </Link>

          </li>
          <li>
            <Link to={"/people"}>
            People

            </Link>
          </li>
        </ul>

      </header>


      <Routes>
        <Route  path="/dashboard" element={<Home/>}/>
        <Route exact path="/people/:id" element={<People />}/> 
      </Routes>


        <footer>
          <p>
            Vytvořil: Adam Tretera 
          </p>
        </footer>


        
    </BrowserRouter>

  
    </>
  );
}


export default App
