import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import Signin from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/sign-in" Component={Signin} exact />
      </Routes>
    </Router>
  );
}

export default App;
