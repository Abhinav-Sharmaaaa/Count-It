
import React from 'react';
import logo from '../media/logo.jpg';
import '../styles/about.css';

function About() {
  return (
    <div className="App">
      <header>
        <br />
        <br />
        <h3 id="name">ABOUT US</h3>
      </header>
      <main className="body">
        <section className="content">
          <div className="text">
            <h1 id="question1">So, What is Our Aim?</h1>
            <p id="para">
              Count-It is a comprehensive inventory management system specifically designed for educational institutions.
              It offers real-time asset tracking, automated processes, and detailed reporting to optimize asset utilization,
              reduce costs, and enhance operational efficiency. Its user-friendly interface ensures easy navigation, even for those
              with limited technical knowledge.
            </p>
            <h1 id="question2">And, What is Its Mission?</h1>
            <p id="para2">
              Count-It is a cutting-edge inventory management system designed to revolutionize the way colleges operate.
              By providing a centralized platform for tracking and managing assets, Count-It offers a comprehensive solution to
              streamline inventory processes and optimize resource allocation.

              With Count-It, colleges can easily maintain a comprehensive database of all inventory items,
              including equipment, supplies, and materials. This centralized repository ensures that information is readily
              accessible to authorized personnel, eliminating the need for manual tracking and reducing the risk of errors.
              Additionally, Count-It's advanced tracking capabilities enable colleges to monitor the location of assets in real-time,
              preventing loss, theft, and unauthorized use.
            </p>
          </div>
          <img src={logo} id="logo" alt="Count-It Logo" />
        </section>
      </main>
    </div>
  );
}

export default About;