import React, {useState, useEffect} from 'react';
import './styles/index.css';
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./pages/ProjectsPage";
import { Grommet } from "grommet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppHeader } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';

export default function App(){
    return(
        <Grommet>
            <BrowserRouter>
                <AppHeader/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Experience" element={<ExperiencePage/>}/>
                    <Route path="/Education" element={<EducationPage/>}/>
                    <Route path="/Projects" element={<ProjectsPage/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <AppFooter/>
            </BrowserRouter>
        </Grommet>

    );
}