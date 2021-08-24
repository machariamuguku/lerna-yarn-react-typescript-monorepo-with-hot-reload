import andyBernard from "../../assets/andy_bernard.jpeg";
import { AndyBernardQuote } from "@root/package-b";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function AndyBernard() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 100%;
        height: 100%;
        min-width: 100%;
        min-height: 100%;
        position: relative;
        &::before {
          background-image: url(${andyBernard});
          background-size: cover;
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
          opacity: 0.4;
        }
        &::after {
          background-color: #3d7c677d;
          content: "";
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.4;
        }
      `}
    >
      <div
        css={css`
          color: #fff;
          text-shadow: #343a40 2px 2px;
          min-width: 100%;
          min-height: 12em;
          position: relative;
          &::before {
            content: "";
            display: block;
            position: absolute;
            margin-left: 0;
            min-width: 100%;
            min-height: 12em;
            z-index: -1;
            opacity: 0.4;
            background-color: #343a40;
          }
        `}
      >
        <h1
          css={css`
            margin: 3% 0;
            text-transform: uppercase;
            width: 100%;
            display: block;
            text-align: center;
          `}
        >
          The office Quotes
        </h1>
        <h2
          css={css`
            width: 100%;
            display: block;
            text-align: center;
          `}
        >
          {AndyBernardQuote}
        </h2>
      </div>
    </div>
  );
}
