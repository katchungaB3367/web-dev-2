/* 
This jsx file imports react and css styling, assets, and defines a functional component that renders a responsive layout for a movie application. It includes a header with navigation links and a grid of movie cards, each displaying a poster, title, description, and a "WATCH NOW" button. The component uses an array of movie objects to dynamically generate the content. 
*/

import React from 'react';
import './Clone2WatchIt.css';

import rogerRabbitImg from './assets/who-framed-roger-rabbit.jpg';
import hookImg from './assets/hook.jpg';
import laLaLandImg from './assets/la-la-land.jpg';
import hiddenFiguresImg from './assets/hidden-figures.jpg';
import palmSpringsImg from './assets/palm-springs.jpg';
import barbieImg from './assets/barbie.jpg';

const movies = [
  { id: 1, title: 'Who Framed Roger Rabbit (1988)', desc: 'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!', poster: rogerRabbitImg },
  { id: 2, title: 'Hook (1991)', desc: 'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.', poster: hookImg },
  { id: 3, title: 'La La Land (2016)', desc: 'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!', poster: laLaLandImg },
  { id: 4, title: 'Hidden Figures (2016)', desc: "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.", poster: hiddenFiguresImg },
  { id: 5, title: 'Palm Springs (2020)', desc: 'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.', poster: palmSpringsImg },
  { id: 6, title: 'Barbie (2023)', desc: 'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!', poster: barbieImg }
];

export default function Clone2WatchIt() {
  return (
    <>
      <header className="header">
        <div className="header-container">
            <h1 className="logo">watch.it</h1>
            <nav className="nav">
                <a href="#action" className="nav-link">Action</a>
                <a href="#comedy" className="nav-link">Comedy</a>
                <a href="#romance" className="nav-link">Romance</a>
                <a href="#drama" className="nav-link">Drama</a>
                <button className="btn nav-btn">SEARCH</button>
            </nav>
        </div>
      </header>

      <div className="main-container">
        <section className="movie-grid">
          {movies.map((movie, index) => (
            <div key={movie.id} className={`movie-card card-${index}`}>
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              
              <div className="card-content">
                <div className="text-container">
                  <h3 className="movie-title">{movie.title}</h3>
                  <p className="movie-desc">{movie.desc}</p>
                </div>
                <button className="btn card-btn">WATCH NOW</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
