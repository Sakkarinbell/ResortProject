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
import { useState } from "react";
function App() {
  const [role, setRole] = useState(getData(ROLE) || "guest");
  const { allowRoutes, redirect } = routes[role];
  return (
    <Router>
      <Routes>
        {allowRoutes?.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={<route.element role={role} setRole={setRole} />}
          />
        ))}
        <Route path="*" element={<Navigate replace to={redirect} />} />
      </Routes>
    </Router>
  );
}

export default App;
