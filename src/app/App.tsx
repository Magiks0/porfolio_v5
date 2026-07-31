import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../components/layout/Layout";
import Portfolio from "../pages/Portfolio";
import Dashboard from "../pages/Admin/Dashboard";
import { AuthProvider } from "../features/auth/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Portfolio />} />
          </Route>
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
