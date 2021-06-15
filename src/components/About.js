import React from 'react';
import styled from 'styled-components';

const AboutStyles = styled.section`
  height: 100vh;
  padding: 100px 100px 20px 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  > div {
    width: 500px;
  }
`;

const About = () => {
  return (
    <AboutStyles>
      <div>
        <h3>
          <span className="hl code">01.</span> About Me
        </h3>
        <p>
          My name is Rishabh and I’m a Maths and Physics graduate who wound up
          in software engineering . My first brush with coding was when I ...
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at a
          <span className="hl">research lab</span>, a{' '}
          <span className="hl">huge corporation</span>, and{' '}
          <span className="hl">my own startup</span>. My main focus these days
          is building out the infrastructure for the language-learning platform
          at Hwalgi.{' '}
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div>TECH GOES HERE.</div>
      </div>
      <div>IMAGE GOES HERE</div>
    </AboutStyles>
  );
};

export default About;
