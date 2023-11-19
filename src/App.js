import { HashRouter, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
const App = () => {
  const content = (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="s29design" element={<Main />} />
      </Routes>
    </HashRouter>
  );

  return content;
};
export default App;
