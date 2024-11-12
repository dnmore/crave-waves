import { React, lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/userSlice";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import LoadingDots from "./components/loading-dots/loading-dots.component";


const SignInPage = lazy(() =>
  import("./routes/sign-in-page/sign-in-page.component")
);
const SignUp = lazy(() =>
  import("./routes/sign-up-page/sign-up-page.component")
);
const Menu = lazy(() => import("./routes/menu/menu.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Success = lazy(() => import("./routes/success/success.component"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(
          setCurrentUser({
            uid,
            email,
            displayName,
          })
        );
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Suspense fallback={<LoadingDots />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
