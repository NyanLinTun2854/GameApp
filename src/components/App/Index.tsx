import { Routes, Route } from "react-router-dom";
import Home from "../Home/Index";

const App = () => {
  console.log(process.env.REACT_APP_KEY);
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
