import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Gallery.module.css';

function Gallery() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionName: string) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <div className="HomePage-container">
      <div className="header-nav-group">
        <Link to="/" className="home-link">
          <header className="TitleHeader">
            <h1 className="spaced-header1">ABIGAIL</h1>
            <h1 className="spaced-header2">DURHAM</h1>
          </header>
        </Link>

        <nav className="nav-wrapper">
          <ul className="main-nav-list">
            <li><Link to="/about">about</Link></li>
            <li><Link to="/resume">resume</Link></li>
            <li><Link to="/gallery">gallery</Link></li>
          </ul>
        </nav>

      </div>

      <div className={styles.galleryMainContent}>
        <p className={styles.galleryIntroText}>
          Explore my creative projects across various mediums.
        </p>

        {/* Figma Projects Section */}
        <div className={styles.accordionSection}>
          <h2 className={styles.accordionHeader} onClick={() => toggleSection('figma')}>
            Figma Projects {openSection === 'figma' ? '▲' : '▼'}
          </h2>
          {openSection === 'figma' && (
            <div className={styles.accordionContent}>
              <div className={styles.projectGrid}>
                {/* Example Figma Project 1 */}
                {/* Wrapped the entire downloadItemWrapper with an <a> tag */}
                <a href="https://www.figma.com/proto/be6nqhxx9VH7hQoW3hirfI/LOFI-HOME-PAGE-DESIGN?node-id=0-1&t=sKXfVXQLuZowmhzf-1" target="_blank" rel="noopener noreferrer" className={styles.downloadItemWrapper}>
                  <div className={styles.projectDetails}>
                    <div className={styles.downloadPhotoFrame}>
                      {/* Removed the <a> tag here - the outer <a> now covers the image */}
                      <img src="/images/SOUTH UTAH.png" alt="South Utah Valley Figma Prototype Thumbnail" />
                    </div>
                    <div className={styles.projectDescription}>
                      <h3>South Utah Valley Website Prototype</h3>
                      <p>
                        This project is a high-fidelity prototype for a tourism website, focusing on interactive elements and user experience design. It showcases various attractions and activities in the South Utah Valley area, designed with a clean and modern aesthetic.
                      </p>
                    </div>
                  </div>
                </a>

                {/* Example Figma Project 2 */}
                {/* Wrapped the entire downloadItemWrapper with an <a> tag */}
                <a href="YOUR_FIGMA_PROJECT_2_LINK" target="_blank" rel="noopener noreferrer" className={styles.downloadItemWrapper}>
                  <div className={styles.projectDetails}>
                    <div className={styles.downloadPhotoFrame}>
                      {/* Removed the <a> tag here - the outer <a> now covers the image */}
                      <img src="/images/Figma2.png" alt="Figma Project 2 Thumbnail" />
                    </div>
                    <div className={styles.projectDescription}>
                      <h3>CS 256 Group Project</h3>
                      <p>
                        A brief description of your second Figma project. What was its purpose? What tools or techniques did you use? What problem did it solve?
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Sketches Section */}
        <div className={styles.accordionSection}>
          <h2 className={styles.accordionHeader} onClick={() => toggleSection('sketches')}>
            Sketches {openSection === 'sketches' ? '▲' : '▼'}
          </h2>
          {openSection === 'sketches' && (
            <div className={styles.accordionContent}>
              <div className={styles.projectGrid}>
                {/* Example Sketch 1 */}
                {/* Wrapped the entire downloadItemWrapper with an <a> tag */}
                <a href="/Sketchbook.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadItemWrapper}>
                  <div className={styles.projectDetails}>
                    <div className={styles.downloadPhotoFrame}>
                      {/* Removed the <a> tag here - the outer <a> now covers the image */}
                      <img src="/images/bird.png" alt="Landscape Sketch Thumbnail" />
                    </div>
                    <div className={styles.projectDescription}>
                      <h3>Sketchbook Samples</h3>
                      <p>
                        A series of quick sketches exploring natural landscapes, focusing on capturing light and shadow. These pieces demonstrate observational drawing skills and composition.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* 3D Projects Section */}
        <div className={styles.accordionSection}>
          <h2 className={styles.accordionHeader} onClick={() => toggleSection('3d')}>
            3D Projects {openSection === '3d' ? '▲' : '▼'}
          </h2>
          {openSection === '3d' && (
            <div className={styles.accordionContent}>
              <div className={styles.projectGrid}>
                {/* Example 3D Project 1 */}
                {/* Wrapped the entire downloadItemWrapper with an <a> tag */}
                <a href="/images/Cafe.jpg" target="_blank" rel="noopener noreferrer" className={styles.downloadItemWrapper}>
                  <div className={styles.projectDetails}>
                    <div className={styles.downloadPhotoFrame}>
                      {/* Removed the <a> tag here - the outer <a> now covers the image */}
                      <img src="/images/Cafe.jpg" alt="3D Chair Model Thumbnail" />
                    </div>
                    <div className={styles.projectDescription}>
                      <h3>Chair 3D Model</h3>
                      <p>
                        A detailed 3D model of a modern chair, created using [Software Name, e.g., Blender/Maya/SketchUp]. This project demonstrates proficiency in 3D modeling and rendering.
                      </p>
                    </div>
                  </div>
                </a>

                {/* Example 3D Project 2 */}
                {/* Wrapped the entire downloadItemWrapper with an <a> tag */}
                <a href="/images/Fairy.jpg" target="_blank" rel="noopener noreferrer" className={styles.downloadItemWrapper}>
                  <div className={styles.projectDetails}>
                    <div className={styles.downloadPhotoFrame}>
                      {/* Removed the <a> tag here - the outer <a> now covers the image */}
                      <img src="/images/Fairy.jpg" alt="Architectural 3D Visualization Thumbnail" />
                    </div>
                    <div className={styles.projectDescription}>
                      <h3>Building Visualization</h3>
                      <p>
                        An architectural visualization project showcasing a contemporary building design. Rendered to illustrate light, materials, and spatial relationships.
                      </p>
                    </div>
                  </div>
                </a>

                 <a href="/images/Spider.jpg" target="_blank" rel="noopener noreferrer" className={styles.downloadItemWrapper}>
                  <div className={styles.projectDetails}>
                    <div className={styles.downloadPhotoFrame}>
                      {/* Removed the <a> tag here - the outer <a> now covers the image */}
                      <img src="/images/Spider.jpg" alt="Architectural 3D Visualization Thumbnail" />
                    </div>
                    <div className={styles.projectDescription}>
                      <h3>Building Visualization</h3>
                      <p>
                        An architectural visualization project showcasing a contemporary building design. Rendered to illustrate light, materials, and spatial relationships.
                      </p>
                    </div>
                  </div>
                </a>

                 <a href="/images/Grandma.jpg" target="_blank" rel="noopener noreferrer" className={styles.downloadItemWrapper}>
                  <div className={styles.projectDetails}>
                    <div className={styles.downloadPhotoFrame}>
                      {/* Removed the <a> tag here - the outer <a> now covers the image */}
                      <img src="/images/Grandma.jpg" alt="Architectural 3D Visualization Thumbnail" />
                    </div>
                    <div className={styles.projectDescription}>
                      <h3>Building Visualization</h3>
                      <p>
                        An architectural visualization project showcasing a contemporary building design. Rendered to illustrate light, materials, and spatial relationships.
                      </p>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          )}
        </div>

        {/* Lo-Fi Sketched Designs Section */}
        <div className={styles.accordionSection}>
          <h2 className={styles.accordionHeader} onClick={() => toggleSection('lofi')}>
            Miscellaneous {openSection === 'lofi' ? '▲' : '▼'}
          </h2>
          {openSection === 'lofi' && (
            <div className={styles.accordionContent}>
              <div className={styles.projectGrid}>
                {/* Example Lo-Fi Design 1 */}
                {/* Wrapped the entire downloadItemWrapper with an <a> tag */}
                <a href="/Lofi Sketch.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadItemWrapper}>
                  <div className={styles.projectDetails}>
                    <div className={styles.downloadPhotoFrame}>
                      {/* Removed the <a> tag here - the outer <a> now covers the image */}
                      <img src="/images/lofi.png" alt="Lo-Fi App Flow Sketch Thumbnail" />
                    </div>
                    <div className={styles.projectDescription}>
                      <h3>Low Fidelity Sketches</h3>
                      <p>
                        Initial low-fidelity sketches outlining the user flow for a mobile application. Focused on key screens and interactions before moving to higher fidelity.
                      </p>
                    </div>
                  </div>
                </a>

                {/* Example Lo-Fi Design 2 */}
                {/* Wrapped the entire downloadItemWrapper with an <a> tag */}
                <a href="/Stickers2.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadItemWrapper}>
                  <div className={styles.projectDetails}>
                    <div className={styles.downloadPhotoFrame}>
                      {/* Removed the <a> tag here - the outer <a> now covers the image */}
                      <img src="/images/cat.png" alt="Website Wireframe Sketch Thumbnail" />
                    </div>
                    <div className={styles.projectDescription}>
                      <h3>Website Wireframe</h3>
                      <p>
                        Hand-drawn wireframes for a responsive website, illustrating layout ideas, content placement, and navigational structure.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;