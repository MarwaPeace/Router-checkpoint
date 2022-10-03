import { Route, Routes } from "react-router-dom";
import Home from "./components/WebPages/Home";
import Description from "./components/WebPages/Description";
function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="trailer/:MovieName" element={<Description />}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
  );
}

export default App;
