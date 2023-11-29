import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { getData } from "./utils/localStorageService";
import { ROLE } from "./utils/constants/storage";
import routes from "./utils/routes";
function App() {
  const role = getData(ROLE);
  const { allowRoutes, redirect } = routes[role || "guest"];
  return (
    <Router>
      <Routes>
        {allowRoutes?.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<Navigate replace to={redirect} />} />
      </Routes>
    </Router>
  );
}

export default App;
