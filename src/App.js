import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignInPage from "./routes/sign-in-page/sign-in-page.component";
import SignUp from "./routes/sign-up-page/sign-up-page.component";

const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
