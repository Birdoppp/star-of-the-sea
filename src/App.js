import './App.css';
import React, { useContext } from "react";
import {Routes, Route, Navigate, Link} from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import Landing from "./pages/landing-page/Landing";
import NavBar from "./components/navbar/NavBar";
import PokemonSearchPage from "./pages/search-pokemon-page/PokemonSearchPage";
import PokemonListPage from "./pages/list-pokemon-page/PokemonListPage";
import BerryListPage from "./pages/list-berry-page/BerryListPage";
import Home from "./pages/home-page/Home";
import Registration from "./pages/registration-page/Registration";
import Login from "./pages/login-page/Login";
import Game from "./pages/games-page/Game";
import FilterAdvancedPage from "./pages/filter-advanced-page/FilterAdvancedPage";
import SinglePokemon from "./pages/single-item-page/SinglePokemon";
import SingleBerry from "./pages/single-item-page/SingleBerry";
import Profile from "./pages/profile-page/Profile";
import BerrySearch from "./pages/search-berry-page/BerrySearch";
import About from "./pages/about-page/About";
import Header from "./components/header/Header";


function App() {

    const {isAuthenticated} = useContext(LoginContext);

  return (
    <>

        <NavBar/>

        <Routes>

            <Route path="/landing-page" element={ <Landing/> }/>
            <Route path="/" element={ <Home/> }/>
            <Route path="/registration-page" element={<Registration/>}/>
            <Route path="/login-page" element={<Login/>}/>
            <Route path="/game-page" element={<Game/>}/>
            <Route path="/about-page" element={<About/>}/>
            <Route path="/profile-page" element={isAuthenticated ? <Profile/> : <Navigate to="/login-page"/>} />
            <Route path="/search-page" element={ isAuthenticated ? <PokemonSearchPage/> : <Home/>  }/>
            <Route path="/search-page-berry" element={ isAuthenticated ? <BerrySearch/> : <Home/>  }/>
            <Route path="/pokemon-list-page" element={ isAuthenticated ? <PokemonListPage/> : <Home/> }/>
            <Route path="/single-pokemon-page/:id" element={<SinglePokemon/>}/>
            <Route path="/berry-list-page" element={ isAuthenticated ? <BerryListPage/> : <Home/> }/>
            <Route path="/single-berry-page/:id" element={<SingleBerry/>}/>
            <Route path="/filter-advanced-page" element={ isAuthenticated ? <FilterAdvancedPage/> : <Home/> }/>


        </Routes>

    </>
  );
}

export default App;
