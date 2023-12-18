import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <h1>Atomic Habits</h1>
      <div className="container">
        <div className="left-side">
          <p>
            "Atomic Habits" by James Clear is a transformative guide that
            explores the profound impact of small, incremental changes on the
            formation of habits. Clear argues that success and self-improvement
            are not the result of massive overhauls, but rather the cumulative
            effect of tiny habits practiced consistently over time. Drawing on a
            blend of scientific research and real-life examples, Clear delves
            into the psychology of habit formation, emphasizing the power of
            marginal gains. He introduces the concept of "atomic habits," small
            actions that compound to create remarkable outcomes. Clear's
            approach focuses on the importance of identity and how our habits
            are intertwined with our sense of self. By providing actionable
            strategies and practical insights, "Atomic Habits" serves as a
            roadmap for anyone seeking to make positive changes in their life by
            harnessing the transformative potential of small, daily habits.
          </p>
        </div>
        <div className="right-side">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg?20220408104922"
            class="book-image"
            alt="Book Image"
          />
        </div>
      </div>
      <section>
        <h2>Learn More</h2>
        <p>
          Click here to buy
          <a
            href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/1847941842/ref=asc_df_1847941842/?tag=hyprod-20&linkCode=df0&hvadid=540310982378&hvpos=&hvnetw=g&hvrand=682136971315361978&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9004403&hvtargid=pla-917513273653&psc=1&mcid=6fc1b464c7343ce48b09b331adfda5cf&gclid=CjwKCAiA1fqrBhA1EiwAMU5m_2ewzy19FkUn8vCzQiUTyGgkC1EEeVd-zpO8pZWt8IT0ws5k0QW6lhoCDLkQAvD_BwE"
            target="_blank"
          >
            "Atomic Habits"
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
