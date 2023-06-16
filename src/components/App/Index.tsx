import { Routes, Route } from "react-router-dom";
import Home from "../Home/Index";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
