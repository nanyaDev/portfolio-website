import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  height: 100px;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: var(--lightgray);
  font-family: 'JetBrains Mono';
  font-size: 14px;

  > * {
    margin-right: 30px;
  }

  > button {
    padding: 10px 30px;
  }
`;

const Navbar = () => {
  return (
    <NavStyles>
      <div>
        <span className="hl">01.</span> About
      </div>
      <div>
        <span className="hl">02.</span> Experience
      </div>
      <div>
        <span className="hl">03.</span> Projects
      </div>
      <div>
        <span className="hl">04.</span> Contact
      </div>
      <button type="button">Resume</button>
    </NavStyles>
  );
};

export default Navbar;
