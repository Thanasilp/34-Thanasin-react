import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Owner } from "./components/Owner";
import { User } from "./pages/User";
import { AddingCustomer } from "./components/AddingCustomer";
import { AdminLogin } from "./components/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/user" element={<User />} />
        <Route path="admin">
          <Route path="" element={<AdminLogin />} />
          <Route path="dashboard" element={<AddingCustomer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
