import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invitation from "./pages/Invitation";
// import ShareButton from "./components/ShareButton/ShareButton";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invitation" element={<Invitation />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;