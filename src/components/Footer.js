import React from "react";
import octocat from "../images/Octocat.png";

export const Footer = () => {
  return (
    <div className="text-center mt-3">
      <a
        href="https://github.com/kimfucious/euler100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={octocat} alt="Github logo" title="View Repo on Github" />
      </a>
    </div>
  );
};
