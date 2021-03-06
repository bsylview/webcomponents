import { css } from 'lit-element';

export const Styles = css`
  .card {
    max-width: 100%;
    width: 100%;
    border-radius: 0.2em;
    background-color: rgb(228, 245, 239);
    box-shadow: 0 3px 5px rgba(0,0,0,0.2);
    justify-content: center;
    text-align: center;
    color: black;
  }
  .title {
  border-bottom: 1px solid #0f0f0f;
  }
  .logo {
    height: 3rem;
    margin: .5rem;
  }
  .footer {
    margin-bottom: .5rem;
  }
  .button {
    display: inline-block;
    vertical-align: middle;
    font-family: inherit;
    cursor: pointer;
    user-select: none;
    position: relative;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 16px;
    height: 32px;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    text-decoration: none;
    border-radius: 3px;
    padding: 0px 14px;
    outline: 0px;
    color: rgb(255, 255, 255);
    background-color: rgb(66, 185, 131);
    margin: .5rem;
  }
`;
