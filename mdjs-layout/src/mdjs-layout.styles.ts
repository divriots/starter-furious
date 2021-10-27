import { css } from 'lit';

export const mdjsLayoutStyles = css`
  :host {
    display: block;
    background-color: white;
    min-width: 100vw;
    min-height: 100vh;
  }

  :host(.dark) {
    background-color: #171717;
  }

  .header {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    height: 3rem;
  }

  .color-scheme-toggle,
  .navigation-toggle {
    background-color: #737373;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    font-family: inherit;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    border: 0;
    padding: 0;
    border-radius: 50%;
    position: fixed;
    bottom: 1rem;
    z-index: 99999;
  }

  .color-scheme-toggle {
    right: 5rem;
  }

  @media screen and (min-width: 1050px) {
    .color-scheme-toggle {
      top: 1rem;
      right: 1rem;
      bottom: unset;
    }
  }

  .navigation-toggle {
    right: 1rem;
  }

  @media screen and (min-width: 1050px) {
    .navigation-toggle {
      display: none;
    }
  }

  .navigation-and-content-wrapper {
    display: flex;
  }

  .navigation-wrapper {
    display: none;
  }

  .navigation {
    padding: 1rem;
    width: 250px;
  }

  @media screen and (max-width: 1049px) {
    .navigation-wrapper--mobile-show {
      display: block;
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      overflow: scroll;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 9999;
    }

    .navigation-wrapper--mobile-show .navigation {
      background-color: white;
    }

    :host(.dark) .navigation-wrapper--mobile-show .navigation {
      background-color: #171717;
    }
  }

  @media screen and (min-width: 1050px) {
    .navigation-wrapper {
      display: block;
    }
  }

  .navigation ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .navigation ul > li {
    margin: 1rem 0;
    padding: 0;
  }

  .navigation > ul > li {
    margin: 2rem 0;
  }

  .navigation > ul > li:first-child {
    margin-top: 0;
  }

  .navigation > ul > li:last-child {
    margin-bottom: 0;
  }

  .navigation > ul > li > span {
    color: #404040;
    text-transform: uppercase;
  }

  :host(.dark) .navigation > ul > li > span {
    color: #a3a3a3;
  }

  .navigation a {
    color: #171717;
    padding: 0.5rem;
    margin-left: -0.5rem;
    text-decoration: none;
  }

  :host(.dark) .navigation a {
    color: white;
  }

  .navigation a[aria-current='location'] {
    background-color: #e5e7eb;
  }

  :host(.dark) .navigation a[aria-current='location'] {
    background-color: #262626;
  }

  .content-wrapper {
    flex-grow: 1;
    max-width: min(800px, 100vw);
    margin: 0 auto;
  }

  .content {
    padding: 1rem;
  }
`;
