import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import FacDash from "./Pages/faculty-dash";
import StuDash from "./Pages/student-dash";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faculty-dashboard" element={<FacDash />} />
          <Route path="/student-dashboard" element={<StuDash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
