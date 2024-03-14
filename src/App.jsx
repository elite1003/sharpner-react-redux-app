import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      <main>
        {!isAuthenticated && <Auth />}
        {isAuthenticated && (
          <>
            <Counter />
            <UserProfile />
          </>
        )}
      </main>
    </Fragment>
  );
}

export default App;
