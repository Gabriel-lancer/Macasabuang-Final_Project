import React from 'react';
import './style.css'; // Make sure Tailwind is set up here

function AboutMe() {
  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700">
        Hello! I’m Allan Gabriel Macasabuang with a strong interest in front-end technologies and design. I enjoy building responsive, user-friendly interfaces and am always eager to learn new skills and tools to enhance my craft.
      </p>
    </section>
  );
}

function Education() {
  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Network and Secutrity Track</li>
        <li>University of the Cordilleras</li>
        <li>A 2nd year college students</li>
        <li>Completed Web Development Bootcamp</li>
        <li>Top 5 in Capstone Project Defense</li>
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Internship at XYZ Software Company – Web Developer</li>
        <li>Freelance Portfolio Website Designer (2023)</li>
        <li>Part-time Virtual Assistant – Data Entry Specialist</li>
        <li>Organized school tech events and workshops</li>
        <li>Volunteered as IT Support for a local NGO</li>
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>React.js and Tailwind CSS</li>
        <li>HTML, CSS, and JavaScript</li>
        <li>Git and GitHub</li>
        <li>Responsive Web Design</li>
        <li>Basic backend knowledge (Node.js & Express)</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Email: blueharger@gmail.com</li>
        <li>Phone: 0930 527 4806</li>
        <li>Facebook: Gabriel Macasabuang</li>
        <li>LinkedIn: linkedin.com/in/yourname</li>
        <li>GitHub: blueharger</li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">
      <header className="text-center py-8 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>
      <main className="max-w-6xl mx-auto p-6 space-y-10">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
