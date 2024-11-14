import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col items-center p-6 md:p-16 min-h-screen text-gray-200">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">About Movie Queue</h1>
        <p className="text-lg md:text-xl text-gray-300">
          Welcome to Movie Queue, a dedicated app for movie enthusiasts to discover, track, and stay updated on the latest films and trends in cinema.
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">The Journey</h2>
          <p>
            Movie Queue started as a passion project to enhance the way people experience and keep track of movies. With a love for cinema, 
            I wanted to create a space where users can access detailed information about the latest films, top ratings, and upcoming releases in one convenient location.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Mission and Values</h2>
          <p>
            My mission is to bring cinematic knowledge closer to fans by providing accurate, updated, and engaging movie data. 
            With a commitment to quality, I aim to make Movie Queue a trustworthy and enjoyable platform for all movie lovers.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">Who’s Behind This?</h2>
          <p>
            I’m Firman Khoiril, a frontend developer with a deep appreciation for both technology and cinema. Building Movie Queue has allowed me to combine these two passions,
            resulting in a platform that enhances how users explore the world of film.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-200">What Sets Movie Queue Apart</h2>
          <p>
            Movie Queue is crafted to offer a seamless experience, from browsing popular movies to diving deep into genres and personal recommendations.
            The app’s unique layout and responsive design ensure easy navigation, while regular updates from reliable sources keep the content fresh and relevant.
          </p>
        </div>
        <div className="mt-8">
          <a href="/contact" className="inline-block px-6 py-3 text-white bg-primary rounded-lg shadow hover:bg-primary/90 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;