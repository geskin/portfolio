import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import ThankYouPage from "./ThankYouPage";

const RoutesList = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default RoutesList;