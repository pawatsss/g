import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./login";
import Home from "./home";
import Classroom from "./classroom";
import Crouse from "./crouse";
import RLoginPage from "./login/real";
import UniversityList from "./tinder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<RLoginPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/course" element={<Crouse/>} />
        <Route path="/tinder" element={<UniversityList />} />
      </Routes>
    </Router>
  );
}

export default App;
