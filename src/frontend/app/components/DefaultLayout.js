import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import StackGrid from 'react-stack-grid';
import EmblemPortrait from './EmblemPortrait';
import Logo from './Logo';

const fakeData = [];
const fakeDataCount = 100;

for (let i = 0; i < fakeDataCount; i += 1) {
  fakeData.push(`Test ${i} Portrait Emblem`);
}

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (

    <div className="defaultLayout">
      <header>
        <Logo />
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/home" activeClassName="selected">Home</NavLink>
            </li>
            <li>
              <NavLink to="/jezebel" activeClassName="selected">Jezebel</NavLink>
            </li>
            <li>
              <NavLink to="/kiba" activeClassName="selected">Kiba</NavLink>
            </li>
            <li>
              <NavLink to="/stella" activeClassName="selected">Stella</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="content">
          <h1 className="headline">This is a headline</h1>
          <Component {...rest} />
          <StackGrid
            columnWidth="20%"
            gutterWidth={10}
          >
            {fakeData.map(data => (<EmblemPortrait
              content={data}
              randomInt={Math.random()}
              key={data}
            />))
            }
          </StackGrid>
        </div>
      </main>
      <footer>
        <ul>
          <li>
            <Link to="/example1">Example1</Link>
          </li>
          <li>
            <Link to="/example2">Example1</Link>
          </li>
          <li>
            <Link to="/example3">Example1</Link>
          </li>
          <li>
            <Link to="/example4">Example1</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

DefaultLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

export default DefaultLayout;
