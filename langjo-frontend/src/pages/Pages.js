import React from "react";
import { Routes, Route } from "react-router-dom";
import BeginnerLevel from "../components/BeginnerLevel/BeginnerLevel";
import EnglishLevel from "../components/EnglishLevel/EnglishLevel";
import BlockCards from "../components/BlockCards/BlocksCards";
import Home from "../Home";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/englishlevel" element={<EnglishLevel />} />
        <Route path="/beginnerlevel" element={<BeginnerLevel />} />
        <Route path="/blockcards" element={<BlockCards />} />
      </Routes>
    </div>
  );
}

export default Pages;
