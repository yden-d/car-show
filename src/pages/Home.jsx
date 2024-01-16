import React from "react";
import BestShows from "../components/BestShows/BestShows";
import Questions from "../components/FAQ/Questions";
import Hero from "../components/Hero/Hero";
import NotableCars from "../components/NotableCars/NotableCars";
import PlanShow from "../components/PlanShow/PlanShow";
import SignUp from "../components/SignUp/SignUp";
import Socials from "../components/Socials/Socials";

const Home = () => {

    return (
        <> 
            <Hero />
            <SignUp />
            <BestShows />
            <NotableCars />
            <Socials />
        </>
    )
}

export default Home;