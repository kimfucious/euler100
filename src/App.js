import React, { useState } from "react";
import { Button, Collapse } from "reactstrap";
import { problems } from "./problems";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Footer } from "./components/Footer";
import { Answer } from "./components/Answer";

function App() {
  const [isOpen, setIsOpen] = useState("");
  const [showAnswer, setShowAnswer] = useState("");
  const renderProblems = () =>
    problems.map(problem => (
      <li
        className="d-flex flex-column align-items-center list-group-item"
        key={problems.indexOf(problem)}
      >
        <div className="d-flex justify-content-between align-items-center w-100">
          <div>
            <span>{`Problem # ${problems.indexOf(problem) + 1}:  `}</span>
            <span className="ml-1">{problem.title}</span>
            <a
              href={`https://projecteuler.net/problem=${problems.indexOf(
                problem
              ) + 1}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="material-icons pl-2" style={{ fontSize: "16px" }}>
                open_in_new
              </i>
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
          <div className="d-flex align-items-center justify-content-between">
            <Button color="link" onClick={() => toggleProblem(problem.title)}>
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </Button>
            <span
              style={{
                display: showAnswer === problem.title ? "block" : "none"
              }}
            >
              <Answer fn={problem.fn} />
            </span>
          </div>
        </Collapse>
      </li>
    ));
  const toggleIsOpen = title => {
    setShowAnswer("");
    if (isOpen === title) {
      setIsOpen("");
    } else {
      setIsOpen(title);
    }
  };
  const toggleProblem = title => {
    if (showAnswer === title) {
      setShowAnswer("");
    } else {
      setShowAnswer(title);
    }
  };
  return (
    <div
      className="container d-flex flex-column align-items-center mt-5"
      style={{ maxWidth: "800px" }}
    >
      <h1 className="display-4 mb-4 text-muted">Euler 100</h1>
      <ul className="list-group w-100">{renderProblems()}</ul>
      <Footer />
    </div>
  );
}

export default App;
