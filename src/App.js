import { BrowserRouter, Route, Routes } from "react-router-dom";
import HashtagPage from "./Pages/HashtagPage.js";
import MainPage from "./Pages/MainPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/trending" element={<HashtagPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
