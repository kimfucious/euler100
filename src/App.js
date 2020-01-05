import React, { useState } from "react";
import { Button, Collapse } from "reactstrap";
import { problems } from "./problems";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  const [isOpen, setIsOpen] = useState("");
  const renderProblems = () =>
    problems.map(problem => (
      <li
        className="d-flex flex-column align-items-center list-group-item"
        key={problems.indexOf(problem)}
      >
        <div className="d-flex justify-content-between align-items-center w-100">
          <div>
            <span>{`Problem # ${problems.indexOf(problem) + 1}:  `}</span>
            <a
              href={`https://projecteuler.net/problem=${problems.indexOf(
                problem
              ) + 1}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{problem.title}</span>
            </a>
          </div>
          <Button
            color="link"
            onClick={() => toggleIsOpen(problem.title)}
            size="sm"
          >
            {isOpen === problem.title ? "Hide" : "Show"}
          </Button>
        </div>
        <Collapse className="w-100" isOpen={isOpen === problem.title}>
          <SyntaxHighlighter language="javascript" style={okaidia}>
            {problem.code}
          </SyntaxHighlighter>
          {/* <pre>
            <code>{problem.code}</code>
          </pre> */}
        </Collapse>
      </li>
    ));
  const toggleIsOpen = title => {
    if (isOpen === title) {
      setIsOpen("");
    } else {
      setIsOpen(title);
    }
  };
  return (
    <div
      className="container d-flex flex-column align-items-center mt-5"
      style={{ maxWidth: "800px" }}
    >
      <h1 className="display-4 mb-4 text-muted">Euler 100</h1>
      <ul className="list-group w-100">{renderProblems()}</ul>
    </div>
  );
}

export default App;
