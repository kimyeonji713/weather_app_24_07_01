import { HashRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={""}></Route>
        <Route path="/login" element={""}></Route>
        <Route path="/signup" element={""}></Route>
        <Route path="/*" element={""}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
