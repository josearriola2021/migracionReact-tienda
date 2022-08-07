import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrincipalView, ProductosInfoView } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrincipalView />} />
                <Route path="/:nombre/:id" element={<ProductosInfoView />} />
            </Routes>
        </BrowserRouter>
      );
}
 
export default Router;
