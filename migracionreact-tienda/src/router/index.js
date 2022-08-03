import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "../pages/Principal";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
            </Routes>
        </BrowserRouter>
      );
}
 
export default Router;
