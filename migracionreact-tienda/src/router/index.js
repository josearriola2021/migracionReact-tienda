import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterLayout } from "../layouts";
import { PrincipalView, ProductosInfoView } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<FooterLayout/>}>
                    <Route path="/" element={<PrincipalView />} />
                    <Route path="/:nombre/:id" element={<ProductosInfoView />} />
                </Route>
            </Routes>
        </BrowserRouter>
      );
}
 
export default Router;
