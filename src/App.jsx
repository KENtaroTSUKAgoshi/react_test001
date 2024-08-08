import Home from "./pages/home";
import Chart from "./pages/chart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/notfound";
import CustomerList from "./components/CustomerList";

function App() {
  return (
    <>
    {/*  */ }
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/customerlist" element={<CustomerList />} />
          <Route path="/*" element={<NotFound404 />} />
        </Routes>
      </Router>
    {/*  */ }
    </>
  );
}

export default App
