import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  HomePublic,
  Login,
  RegisterAlumni,
  RegisterCompany,
  ForgotPassword,
  ChangePassword,
} from "../pages/export";

import { ColorModeContext, useMode } from "theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  Dashboard,
  Layout,
  Jobs,
  Alumni,
  Companies,
  VerifyCompanies,
} from "../pages/export";

const AcesRoutes = () => {
  const { theme, toggleColorMode } = useMode();

  const colorModeContextValue = React.useMemo(
    () => ({
      toggleColorMode: toggleColorMode,
    }),
    [toggleColorMode]
  );

  return (
    <ColorModeContext.Provider value={colorModeContextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Router>
            <Routes>
              <Route element="">
                <Route path="/" element={<HomePublic />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register/alumni" element={<RegisterAlumni />} />
                <Route path="/register/company" element={<RegisterCompany />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/changepassword" element={<ChangePassword />} />
              </Route>

              <Route element={<Layout />}>
                <Route
                  path="/admin"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route
                  path="/verification_company"
                  element={<VerifyCompanies />}
                />
                <Route path="/companies" element={<Companies />} />
                <Route path="/pending_jobs" element={<Alumni />} />
                <Route path="/verification_alumni" element={<Alumni />} />
                <Route path="/faq" element={<Alumni />} />
                <Route path="/events" element={<Alumni />} />
                <Route path="/calendar" element={<Alumni />} />
                <Route path="/alumni" element={<Alumni />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AcesRoutes;
