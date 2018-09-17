import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <object type="image/svg+xml" data="./brand_logo.svg" style={{
          position: 'fixed',
          height: '10em',
          left: '2%',
          top: '2%',
          zIndex: 1
        }}>
          <img src="./cake.jpg" alt="No SVG support" />
        </object>
        <section style={{
          height: '40vh',
          width: '100vw',
          position: 'relative',
        }}>
        
          <article style={{
            height: 'inherit',
            background: 'url(./cake.jpg) no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'blur(1px)'
          }}>
          </article>
          <svg
            style={{
              position: 'absolute',
              bottom: -3,
              left: 0,
              width: '100vw',
              height: '20%',
              color: 'var(--main-bg-color)',
              zIndex: 1
            }}
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon class='svg-header' points="0,100 100,0 100,100"/>
            </svg>
        </section>
      </header>
    );
  }
}

export default Header;