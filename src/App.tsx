import { HomeScreen, Layout, MainHome } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Banner, SignIn, SignUp } from "./component";
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <MainHome>
                <Banner />
              </MainHome>
            }
          />
          <Route
            path="/signin"
            element={
              <MainHome>
                <SignIn />
              </MainHome>
            }
          />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/homescreen" element={<HomeScreen />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;

// const apikey = 26ce05b29a9c85ce5b805fc74355b6bd
