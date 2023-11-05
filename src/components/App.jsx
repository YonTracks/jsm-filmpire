// src/components/App.jsx

import { Route, Routes } from "react-router-dom";
import MovieInfomation from "./MovieInfomation/MovieInfomation";
import Home from "./Home/Home";
import Actors from "./Actors/Actors";
import Profile from "./Profile/Profile";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/movie/:id" element={<MovieInfomation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}
