import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
