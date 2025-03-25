import React from "react";
import "./HomePageStyle.css";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero">
          <p className="hero-text">
            Dedicated to providing compassionate and expert veterinary care, we
            ensure your pets live happy, healthy, and fulfilling lives
          </p>
        </div>
      </div>
      <div className="pets-img-description-wrapper container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <img className="pets-img" src="/pets.webp" alt="Pets" />
          </div>
          <div className="col-12 col-md-12">
            <p className="pets-description">
              At pet veterinary, we are dedicated to providing compassionate and
              comprehensive care for your pets. Whether you have a playful
              puppy, a curious kitten, or a senior companion, our experienced
              team is here to ensure their health and well-being at every stage
              of life. We offer a wide range of services, including routine
              check-ups, vaccinations, emergency care, surgical procedures,
              dental care, and more, all tailored to meet the specific needs of
              your pet. Our clinic is equipped with state-of-the-art medical
              technology to provide accurate diagnoses and effective treatments.
              We believe in proactive care, educating pet owners on how to
              maintain their pets health, prevent illness, and address any
              concerns early on. Our knowledgeable staff understands that each
              pet is unique, which is why we take the time to develop
              personalized care plans for every animal. At pet veterinary, your
              pet is treated like family. We aim to create a stress-free and
              welcoming environment for both pets and their owners. Our friendly
              team will guide you through any treatment plans, answer all your
              questions, and provide you with the support you need to make
              informed decisions about your pets health. Whether you&apos;re
              looking for routine wellness checks, emergency services, or
              specialized treatments, we are committed to providing the highest
              quality veterinary care. Trust us to be your partner in keeping
              your pet happy, healthy, and thriving.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
