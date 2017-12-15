import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import StackGrid from 'react-stack-grid';
import EmblemPortrait from './EmblemPortrait';

const fakeData = [];
const fakeDataCount = 100;

for (let i = 0; i < fakeDataCount; i += 1) {
  fakeData.push(`Test ${i} Portrait Emblem`);
}

const Theme = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <span className="pale-yellow">N</span>
          <span className="deep-pink">F</span>
          <span className="lime-green">R</span>
          <span className="dark-purple">T</span>
          <span className="dark-orange">T</span>
        </div>
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
          <StackGrid
            columnWidth="20%"
            gutterWidth={10}
            // gutterHeight={10}
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
            <Link to="/exampe1">Example1</Link>
          </li>
          <li>
            <Link to="/exampe2">Example1</Link>
          </li>
          <li>
            <Link to="/exampe3">Example1</Link>
          </li>
          <li>
            <Link to="/exampe4">Example1</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Theme;
