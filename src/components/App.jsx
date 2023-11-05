// src/components/App.jsx

import { Route, Routes } from "react-router-dom";
import MovieInfomation from "./MovieInfomation/MovieInfomation";
import Home from "./Home/Home";
import Actors from "./Actors/Actors";
import Profile from "./Profile/Profile";
import NavBar from "./NavBar/NavBar";
{
  /**Using tailwind instead of importing useStyles and mui... etc */
}
// So no need for a seperate styles.js.

export default function App() {
  return (
    <div className="flex h-screen">
      <NavBar />
      <main className="flex p-2 ">
        <div className="h-70" />

        <Routes>
          <Route path="/movie/:id" element={<MovieInfomation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
