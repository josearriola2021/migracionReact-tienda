import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "../pages/Principal";
import ProductosInfo from "../pages/ProductosInfo";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/:nombre/:id" element={<ProductosInfo />} />
            </Routes>
        </BrowserRouter>
      );
}
 
export default Router;
