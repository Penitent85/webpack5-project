import React from "react";
import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from '../images/team-2.png'


const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh. Hai, React , How are you?</h1>
        </section>
        {/* <img src={sword} alt="sword" width="350" /> */}
        <Recipes />
      </main>
    </>
  );
};

export default App;
