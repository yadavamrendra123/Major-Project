import Navbar from "./Components/Navbar/navbar";
import ProductDetails from "./Components/ProductDetails";
import Filter from "./Components/Filter";
import ProductView from "./Components/ProductView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter />
              <ProductView />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
