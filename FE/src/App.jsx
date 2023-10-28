import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import RootElement from "./pages/RootElement";
import Beranda from "./pages/Beranda";
import Katalog from "./pages/Katalog";
import Belanja from "./pages/Belanja";
import Pesanan from "./pages/Pesanan";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootElement />}>
        <Route index element={<Beranda />} />
        <Route path="about" element={<Katalog />} />
        <Route path="contact" element={<Belanja />} />
        <Route path="result" element={<Pesanan />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
