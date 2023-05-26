import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Comics from "./Pages/Comics";
import Error400 from "./Pages/Error400";
//import Header from "./Components/Header";
//import useFetch from "./hooks/useFetch";

function App() {
 //const marvelApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=9e2ffd6f166951a66ec8abb1db3cf828&hash=961282844f340b77979afff0813190bb');
 //console.log(marvelApi);
  return (
    <div>
      
        
        <BrowserRouter>
          <Routes>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/inicio" exact component={() => <Home />} />
              <Route path="/series" exact component={() => <Series />} />
              <Route path="/comics" exact component={() => <Comics />} />
              <Route component={() => <Error400 />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;