import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
