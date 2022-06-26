import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import Error from "./Error/Error";
import Categories from "./components/Categories/Categories";
import Catalog from "./components/Catalog/Catalog";
import { Routes, Route } from "react-router-dom";
import { FilterContextProvider } from "./Context/FilterContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
