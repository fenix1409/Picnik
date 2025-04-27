import { Route, Routes } from "react-router-dom"
import SinlgeProduct from "../components/pages/SinlgeProduct"
import Home from "../components/pages/Home"

const DashboardRoutes = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/single-product/:id" element={<SinlgeProduct />} />
                </Routes>
            </div>
        </div>
    )
}

export default DashboardRoutes