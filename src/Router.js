import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SingUp } from "./pages/SignUp";
import { PageNotFound } from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SingUp />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
