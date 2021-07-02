import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import NextJS from '../assets/icons/nextjs.svg';
import NodeJS from '../assets/icons/nodejs.svg';
import PostgreSQL from '../assets/icons/postgresql.svg';
import Docker from '../assets/icons/docker.svg';
import AWS from '../assets/icons/aws.svg';

const AboutStyles = styled.section`
  height: 100vh;
  padding: 100px 100px 20px 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > div {
    width: 500px;
  }

  h3 {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  h3::after {
    content: '';
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background: var(--secondary);
    opacity: 0.25;
  }
`;

const ImageStyles = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  .wrapper {
    width: 300px;
    height: 300px;
    position: relative;
  }

  .wrapper::after {
    content: '';
    width: 300px;
    height: 300px;
    border: 2px solid var(--primary);
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: -1;
  }

  .image {
    object-fit: cover;
    filter: grayscale(20%);
  }
`;

const Technologies = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 30px 0 0;

  .icon-wrapper {
    height: 50px;
    width: 50px;
    /* background: var(--lightgray); */
  }

  .icon {
    height: 50px;
    width: 50px;
  }

  .caption {
    margin-top: 5px;
    font-size: 12px;
    font-family: 'JetBrains Mono';
    color: var(--primary);
    text-align: center;
  }
`;

const About = () => {
  return (
    <AboutStyles>
      <div>
        <h3>
          <span className="hl code">01.</span>&nbsp;About Me
        </h3>
        <p>
          My name is Rishabh and I’m a Maths and Physics graduate who wound up
          in software engineering a few years ago (cliché, I know).
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at a{' '}
          <span className="hl">research lab</span>, a{' '}
          <span className="hl">huge corporation</span>, and{' '}
          <span className="hl">my own startup</span>. My main focus these days
          is building out the infrastructure for the language-learning platform
          at Hwalgi.{' '}
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <Technologies>
          <div>
            <div className="icon-wrapper">
              <NextJS class="icon" />
            </div>
            <div className="caption">Next</div>
          </div>
          <div>
            <div className="icon-wrapper">
              <NodeJS class="icon" />
            </div>
            <div className="caption">Node</div>
          </div>
          <div>
            <div className="icon-wrapper">
              <PostgreSQL class="icon" />
            </div>
            <div className="caption">Postgre</div>
          </div>
          <div>
            <div className="icon-wrapper">
              <Docker class="icon" />
            </div>
            <div className="caption">Docker</div>
          </div>
          <div>
            <div className="icon-wrapper">
              <AWS class="icon" />
            </div>
            <div className="caption">AWS</div>
          </div>
        </Technologies>
      </div>
      <ImageStyles>
        <div className="wrapper">
          <StaticImage
            class="image"
            src="../assets/images/me.png"
            alt="headshot"
          />
        </div>
      </ImageStyles>
    </AboutStyles>
  );
};

export default About;
