import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./route";
import DefaultLayout from "./DefaultLayout";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRouter.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.element;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
