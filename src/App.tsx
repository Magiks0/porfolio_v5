import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layouts/Layout";
import Homepage from "./Pages/Homepage";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Homepage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
