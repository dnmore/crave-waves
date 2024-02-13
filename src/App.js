import { React, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingDots from "./components/loading-dots/loading-dots.component";

const Home = lazy(() => import("./routes/home/home.component"));
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const SignInPage = lazy(() =>
  import("./routes/sign-in-page/sign-in-page.component")
);
const SignUp = lazy(() =>
  import("./routes/sign-up-page/sign-up-page.component")
);
const Menu = lazy(() => import("./routes/menu/menu.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));

const App = () => {
  return (
    <Suspense fallback={<LoadingDots />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
