import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Timeline from "./pages/Timeline";
import MainPage from "./Pages/MainPage";
import HashtagPage from "./Pages/HashtagPage";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/trending" element={<HashtagPage />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
