import Home from "./routes/home/home.component.jsx";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";

const Shop = () =>{
  return (
    <h1>I am the hell King</h1>
  );
}
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
      <Route index element={<Home />}/>
      <Route path='/shop' element={<Shop/>}/>
      </Route>

      
    </Routes>

  );
};

export default App;
 