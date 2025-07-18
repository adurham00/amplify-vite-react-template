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
                        This project details a proactive redesign of the South Valley Animal Shelter's existing website, which was in significant need of a user experience overhaul. Inspired by a prior group project in my CS 256 class and driven by a personal passion for animal welfare, I developed this medium-fidelity Figma mockup to offer an improved, intuitive platform for potential adopters, volunteers, and donors. The central challenge was transforming their outdated interface into an intuitive and engaging platform that effectively served their diverse audience. As a self-initiated project, this involved proactively identifying key user experience pain points and simplifying complex information. While not all aspects of the prototype are fully functional, as we are still in the core design phase, this initiative has successfully led to a scheduled meeting with the shelter to begin development on their new live site.
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

This collaborative CS 256 group project focused on transforming the existing South Utah Valley Animal Shelter (SUVAS) website into a user-friendly mobile app design. My prior volunteer experience highlighted the need for a more intuitive digital presence for the shelter.

A key challenge was harmonizing diverse design aesthetics and individual perspectives from team members into one cohesive application. We overcame this through constant communication and an iterative design process. Additionally, we integrated new, user-centric features not present on their original site.

The accompanying video showcases my direct contributions to the app's UI/UX elements, though I actively contributed ideas and feedback across all project phases. This group experience was a significant inspiration for my subsequent personal redesign of the shelter's website.
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
                <iframe
  src="/pdfs/Sketchbook.pdf"
  width="100%"
  height="600px"
  title="Sketchbook PDF"
/>
                  <div className={styles.projectDetails}>
                    <div className={styles.downloadPhotoFrame}>
                      {/* Removed the <a> tag here - the outer <a> now covers the image */}
                      <img src="/images/bird.png" alt="Landscape Sketch Thumbnail" />
                    </div>
                    <div className={styles.projectDescription}>
                      <h3>Sketchbook Samples</h3>
                      <p>
                       This collection showcases various sketches, highlighting my foundational drawing abilities and a genuine desire to cultivate design skills outside of computer science. While consistently balancing academic and other commitments, I often find it challenging to dedicate extensive time to drawing. Despite this constraint, I actively pursue opportunities to practice, and each piece represents a step in my ongoing artistic journey, demonstrating gradual but steady improvement.
                      </p>
                    </div>
                  </div>
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
                      <h3>The Villa</h3>
                      <p>
                       This 3D project features an Italian-style cafe and city corner model. Its creation demanded painstaking attention to detail, with individual railings for each building meticulously handcrafted. All textures were custom, drawn by hand or painted in Adobe Substance Painter, and then converted into bitmaps. This project demonstrates precision in 3D modeling and specialized hand-drawn texturing techniques.
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
                      <h3>Custom Mini-Figure</h3>
                      <p>
                       This project showcases a custom 3D model of a LEGO figure and its corresponding background. I modeled and assembled individual LEGO components digitally, replicating their authentic construction. A primary challenge involved accurately maintaining proportions and achieving the material's signature glossy finish.
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
                      <h3>Love Bug</h3>
                      <p>
                      This project presents my most distinct visual design, directly inspired by the Jonas Brothers' song 'Lovebug.' Tasked with creating a unique bug-centric scene, I conceptualized a creature that combines the anatomical design of a heart with the form of a spider. While embracing a more gruesome aesthetic, the piece retains a playful sensibility. A significant challenge involved applying textures to the ZBrush-sculpted body, a new workflow I attempted for this specific project.
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
                      <h3>Old Lady </h3>
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
                <a href="/pdfs/Lofi Sketch.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadItemWrapper}>
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
                <a href="/pdfs/Stickers2.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadItemWrapper}>
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