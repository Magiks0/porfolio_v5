import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layouts/Layout";
import Homepage from "./Pages/Homepage";
import ProjectDetails from "./Pages/Projects/ProjectDetails";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Homepage />} />
            <Route path="/:slug" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
