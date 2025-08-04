import React from "react";
import Imgb from "../img/bhavdeep.jpg";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">🧭 About Us</h2>
        <p className="section-text">
          We believe travel is more than visiting new places — it’s about creating lasting memories, broadening perspectives, and building genuine connections with people and cultures around the world.
        </p>
        <p className="section-text">
          Thank you for choosing My Travel Friend as your companion in travel. We look forward to being part of your travel story and helping you create memories that will last a lifetime.
        </p>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section id="story" className="section story-section">
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        <p className="section-text">
          Every great journey begins with a single step — and ours started with a backpack, a map, and a dream.
        </p>
        <p className="section-text">
          In the beginning, we were just a group of curious travelers chasing sunsets, getting lost in hidden alleys, and collecting stories from strangers who became friends. But along the way, we realized something bigger — travel isn’t just about places; it’s about perspective.
        </p>
        <p className="section-text">
          That’s when <strong>TripSync</strong> was born: not just as a website, but as a movement to make travel feel personal, exciting, and within reach for everyone.
        </p>
        <p className="section-text">
          <span role="img" aria-label="sparkles">📌</span> This year, we’ve helped over <strong>5,000+ travelers</strong> plan their adventures, launched our first mobile-friendly platform, and built a growing community of dreamers, doers, and explorers — just like you.
        </p>
        <p className="section-text">
          But we’re not stopping here. The road ahead is wide open, and we’re just getting started.
        </p>
        <p className="section-text">
          Come walk with us. ✈️🗺️ Let’s keep exploring — one trip, one story, one memory at a time.
        </p>
      </div>
    </section>
  );
};


const Mission = () => {
  return (
    <section id="mission" className="section mission-section">
      <div className="container">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          At TripSync, we’re more than just a travel platform — we’re passionate advocates for the transformative power of travel.
          Our mission is two fold:
          • To inspire travelers with curated experiences, and
          • To assist them in planning seamless, memorable journeys.
        </p>
        <p className="section-text">
          Join us as we explore, learn, and connect — and let us be your travel partner in creating moments that last a lifetime.
        </p>
      </div>
    </section>
  );
};

const teamMembers = [
  {
    name: "Bhavdeep Mangukiya",
    role: "Full-Stack Developer",
    bio: "Creative coder, curious learner, and full-stack explorer on a mission to debug the world — one cool project at a time.",
    image: Imgb
  }
];

const Team = () => {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <h2 className="section-title">Developer</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="team-member-card" key={index}>
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="main-page" style={{ marginTop: "100px" }}>
      <About />
      <Story />
      <Mission />
      <Team />
    </div>
  );
};

export default App;
