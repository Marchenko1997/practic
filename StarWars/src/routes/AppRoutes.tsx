import React from "react";
import { Route, Routes } from "react-router-dom";

import HeroList from "../components/HeroList/HeroList";
import HeroDetails from "../components/HeroDetails/HeroDetails";
import NotFound from "../components/NotFound/NotFound";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HeroList />} />
    <Route path="StarWars/hero/:id" element={<HeroDetails />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
