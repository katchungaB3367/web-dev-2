/* 
Task 1 Layout in React - Erased Tapes Blog
This React component represents the layout of the Erased Tapes Blog as per the provided wireframe. It includes a header, main content area with an article, an image grid, an author section, a comments section, and a footer. 
*/

import React from 'react';
import './Task1.css';

// Import Assets
import logo from './assets/logo.svg';
import profilePic from './assets/profile_picture.jpg';
import facebookIcon from './assets/facebook-icon.png';
import instagramIcon from './assets/instagram-icon.svg';
import twitterIcon from './assets/twitter-icon.svg';

// Import 5 images for the split image grid
import img1 from './assets/all-encores.jpg';
import img2 from './assets/articulation.jpg';
import img3 from './assets/blurred.jpg';
import img4 from './assets/encores-2.jpg';
import img5 from './assets/eulogy-for-evolution.jpg';

export default function Task1() {
  return (
    <div className="app-container">
      {/* HEADER SECTION */}
      <header>
        <img src={logo} alt="Erased Tapes Logo" className="logo" />
        <nav className="nav-links">
          <span>Our Blog</span>
          <span>Our Artists</span>
          <span>Our Story</span>
        </nav>
      </header>

      {/* MAIN CONTENT SECTION */}
      <main>
        <article className="article-content">
          <h1 className="title-heading">Erased Tapes:</h1>
          <h2 className="subtitle-heading">Exploring the Sonic Frontier</h2>

          <p className="lead-paragraph">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu scelerisque turpis posuere tempor? Leo condimentum himenaeos molestie elit; maximus iaculis proin nulla. Ullamcorper nibh cras conubia suscipit dapibus sagittis, facilisi habitant vivamus. Etiam fusce posuere himenaeos ipsum commodo sollicitudin himenaeos nec.
          </p>

          {/* 3-COLUMN TEXT GRID */}
          <div className="text-grid">
            <div className="column">
              <h3>Heading</h3>
              <p>Montes ridiculus mus tellus nunc vulputate. Cras facilisi congue et facilisis porttitor litora etiam praesent porttitor. Sollicitudin cubilia scelerisque diam taciti lacus. Dapibus penatibus augue dapibus sagittis; rhoncus accumsan. Accumsan urna et, ultrices placerat justo rutrum. Tristique mattis ante cras accumsan convallis phasellus fermentum magna. Rhoncus curabitur pharetra proin ante nam adipiscing accumsan hac. Rutrum efficitur nullam integer ut ex id. Pulvinar vel at vestibulum vivamus sed nascetur eget.</p>
              <p>Laoreet volutpat hendrerit est aliquam; fusce quam tempor. Nisi interdum praesent pellentesque non non blandit cubilia et. Aptent maximus vehicula nullam odio tempor. Placerat dis facilisis potenti iaculis, primis vivamus nec at magnis. Aadipiscing curabitur vestibulum imperdiet dolor primis. Inceptos penatibus inceptos eu habitasse aptent vehicula platea litora congue. Ultricies mauris fringilla rhoncus pharetra iaculis vitae. Venenatis himenaeos eget molestie dignissim consectetur tellus litora. Porta a iaculis mi primis rhoncus.</p>
              <p>Curae habitasse elementum amet nunc, natoque at. Tortor vel blandit sociosqu auctor aliquam maximus porta feugiat. Eros phasellus platea mauris condimentum natoque hendrerit tellus id. Ex imperdiet vitae maximus adipiscing neque quam tempor orci. Lobortis porta lacinia cubilia tellus vel placerat; facilisis mi euismod. Neque eu orci nulla penatibus elit nec.</p>
            </div>
            
            <div className="column">
              <p>Parturient habitasse facilisis purus donec, enim platea maximus. Primis class varius augue sed class ultricies. Posuere curabitur tristique penatibus montes hac ac imperdiet. Risus per sociosqu, cursus leo condimentum ac fringilla. Nibh curabitur eros tempus nec; nam curae hendrerit. Mattis placerat maximus mollis praesent, eros adipiscing dui.</p>
              <h3>Heading</h3>
              <p>Habitasse ornare fames facilisis montes pulvinar habitasse fringilla. Risus porta cursus duis vivamus quam adipiscing nec. Ante at posuere eget aptent natoque vivamus ante. Aenean enim dapibus viverra sem efficitur. Felis nam semper integer justo in. Facilisi augue urna torquent lacinia facilisi inceptos. Natoque varius feugiat massa scelerisque natoque, cras tempor inceptos.</p>
              <p>Amet ac leo, imperdiet hac litora auctor. Suscipit congue duis sociosqu auctor euismod vivamus urna diam. Nunc enim himenaeos litora facilisi, tincidunt torquent. Eros sapien laoreet duis, volutpat rutrum pulvinar. Natoque semper sapien aptent quis habitant aliquam condimentum luctus. Tempus pellentesque congue varius dapibus pharetra. Fermentum diam auctor bibendum rhoncus leo. Vestibulum tincidunt fames convallis ligula semper porttitor.</p>
            </div>
            
            <div className="column">
              <p>Magnis maximus morbi, litora accumsan vivamus facilisi etiam pharetra. Platea congue orci sagittis purus scelerisque. Velit taciti maecenas praesent nam lobortis metus vehicula habitasse porttitor. Porta gravida placerat lobortis litora elit feugiat venenatis. Cras magna himenaeos consequat aliquet ad nec pharetra. Ligula eleifend imperdiet aptent primis placerat. Nec magnis tempus vulputate ipsum ad sagittis mus.</p>
              <h3>Heading</h3>
              <p>Vulputate nullam tempus montes eu tellus integer adipiscing pulvinar. Pharetra eu luctus id a potenti. Pulvinar egestas conubia ante varius lobortis iaculis metus. Netus sem imperdiet hendrerit vehicula netus est gravida tortor. Nunc ridiculus per montes nulla, facilisis lacinia per leo. Hendrerit scelerisque nulla in suspendisse sit tortor sagittis. Suscipit dictumst ipsum laoreet cras egestas suscipit orci. Per molestie felis erat platea blandit commodo.</p>
              <p>Ad venenatis sapien habitant posuere donec porttitor vel nisi. Sodales laoreet donec diam rhoncus lectus euismod orci torquent curae. Fames rhoncus torquent sed convallis; potenti cras. Dictumst arcu libero nulla malesuada mi ridiculus platea. Interdum ullamcorper fringilla himenaeos mollis; in arcu pharetra massa. Nunc mauris taciti montes sapien molestie orci ac quis.</p>
            </div>
          </div>

          {/* IMAGE GRID */}
          <div className="image-grid-container">
            <img src={img1} alt="Album 1" className="image-grid-left" />
            <div className="image-grid-right">
              <img src={img2} alt="Album 2" className="grid-img" />
              <img src={img3} alt="Album 3" className="grid-img" />
              <img src={img4} alt="Album 4" className="grid-img" />
              <img src={img5} alt="Album 5" className="grid-img" />
            </div>
          </div>

          {/* AUTHOR SECTION */}
          <div className="author-section">
            <div className="author-info">
              <h3>The Author</h3>
              <p>Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.</p>
              <p>Copyright © 2023 Erased Disks Ltd.</p>
            </div>
            <div className="author-photo-wrapper">
              <img src={profilePic} alt="Author Portrait" className="author-photo" />
              <div className="social-icons-vertical">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
                <img src={twitterIcon} alt="Twitter" className="social-icon dark-icon" />
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </div>
            </div>
          </div>
        </article>

        {/* COMMENTS SECTION */}
        <section className="comments-section">
          <h3>Comments</h3>
          <div className="comment">
            <strong>soundseeker92</strong>
            <p>This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?</p>
          </div>
          <div className="comment">
            <strong>Ted Baker</strong>
            <p>I've been following the label for years—so glad someone's finally writing about their impact.</p>
          </div>
          <div className="comment">
            <strong>Queen_of_noise</strong>
            <p>I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling.</p>
          </div>
        </section>
      </main>

      {/* FOOTER SECTION */}
      <footer>
        <nav className="footer-nav">
          <span>Our Blog</span>
          <span>Our Artists</span>
          <span>Our Story</span>
        </nav>
        <p>Copyright © 2026 Blaise.</p>
        <div className="social-icons-horizontal">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </div>
      </footer>
    </div>
  );
}
