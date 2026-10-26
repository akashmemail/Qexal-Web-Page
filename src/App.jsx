import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navebar from "./components/nave/nave";
import Home from "./SECTION/Home/home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
