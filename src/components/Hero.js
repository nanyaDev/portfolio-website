import React from 'react';
import styled from 'styled-components';

const HeroStyles = styled.section`
  height: 100vh;
  padding: 100px 100px 20px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  > p {
    width: 500px;
  }

  > button {
    padding: 20px 30px;
  }

  .hello {
    font-family: 'JetBrains Mono';
    position: relative;
    top: 20px;
  }
`;

const Hero = () => {
  return (
    <HeroStyles>
      <span className="hl hello">Hi, my name is</span>
      <div>
        <h1>Rishabh Chatterjee.</h1>
        <h2>I build things for the web.</h2>
      </div>
      <p>
        I’m a UK-based software engineer who specializes in building (and
        occasionally designing) exceptional digital experiences. Currently, I’m
        working at <span className="hl">Hwalgi</span>, a language learning
        startup.
      </p>
      <button type="button">Get In Touch</button>
    </HeroStyles>
  );
};

export default Hero;
