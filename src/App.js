import React, { useState } from 'react';
import logo from './sample_images/logo.png';
import image from './sample_images/ai_cover.jpg';
import photoshoot_1 from './sample_images/photoshoot_1.png';
import photoshoot_2 from './sample_images/photoshoot_2.png';
import photoshoot_3 from './sample_images/photoshoot_3.png';
import photoshoot_4 from './sample_images/photoshoot_4.png';
import photoshoot_5 from './sample_images/photoshoot_5.png';
import photoshoot_6 from './sample_images/photoshoot_6.png';
import './App.css';

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalOpen(true);
    setModalImage(image);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="App">
      <header className="App-header">
      <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PhotoSnap AI</h1>
        </div>
      </header>
      <main className="App-main">
        <img src={image} className="main-image" alt="AI Related" />
        <h2 className="main-headline">Transforming Your Vision into Stunning Reality with ProSnapAI</h2>
        <p className="main-subheadline">Get professional-grade pictures that are visually stunning and tailored to your style and preferences.</p>
        <div className="examples-container">
          <img src={photoshoot_1} alt="Example 1" onClick={() => openModal(photoshoot_1)}/>
          <img src={photoshoot_2} alt="Example 2" onClick={() => openModal(photoshoot_2)}/>
          <img src={photoshoot_3} alt="Example 3" onClick={() => openModal(photoshoot_3)}/>
          <img src={photoshoot_4} alt="Example 4" onClick={() => openModal(photoshoot_4)}/>
          <img src={photoshoot_5} alt="Example 5" onClick={() => openModal(photoshoot_5)}/>
          <img src={photoshoot_6} alt="Example 6" onClick={() => openModal(photoshoot_6)}/>
        </div>
        {modalOpen && (
          <div className="modal-container" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={modalImage} className="modal-image" alt="Full size" />
            </div>
          </div>
        )}
        <a href="https://wa.me/917999896920?text=I'm%20interested%20in%20getting%20AI%20PhotoShoot" target="_blank" rel="noopener noreferrer" className="contact-button">I am Interested</a>
      </main>
      <footer className="App-footer">
        <p className="footer-text">Who made this?</p>
        <a href="https://www.linkedin.com/in/ayushunleashed" target="_blank" rel="noopener noreferrer" className="linkedin-link">Ayush Yadav</a>
      </footer>
    </div>
  );
}

export default App;
