import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import HowItWorks from "../pages/HowItWorks.jsx";
import Pricing from "../pages/Pricing.jsx";



const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/howitworks" element={<HowItWorks />} />
                <Route path="/pricing" element={<Pricing />} />
                            
            </Routes>
        </div>
    )
}

export { AllRoutes }