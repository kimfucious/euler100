import React, { useEffect, useState } from "react";
import { Button, Collapse } from "reactstrap";
import { problems } from "./problems";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Footer } from "./components/Footer";
import { Pagination } from "./components/Pagination";
import { getRandomAnimation } from "./helpers";
import numeral from "numeral";

function App() {
  const [answer, setAnswer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProblem, setCurrentProblem] = useState("");
  const [currentProblems, setCurrentProblems] = useState(problems.slice(0, 10));
  const [isOpen, setIsOpen] = useState("");
  const [showAnswer, setShowAnswer] = useState("");

  const setProblems = page => {
    setCurrentProblems(problems.slice(page * 10 - 10, page * 10));
  };
  const handleBack = () => {
    if (currentPage > 1) {
      setIsOpen("");
      setCurrentPage(currentPage - 1);
      setProblems(currentPage - 1);
    }
  };
  const handleFwd = () => {
    if (currentPage < 10) {
      setIsOpen("");
      setCurrentPage(currentPage + 1);
      setProblems(currentPage + 1);
    }
  };
  const handleGoToPage = page => {
    setIsOpen("");
    setCurrentPage(page);
    setProblems(page);
  };
  const renderProblems = () =>
    currentProblems.map(problem => (
      <li
        className="d-flex flex-column align-items-center list-group-item"
        key={problems.indexOf(problem)}
      >
        <div className="d-flex justify-content-between align-items-center w-100">
          <div>
            <span>{`# ${problems.indexOf(problem) + 1}:  `}</span>
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
            <Button
              color="link"
              size="sm"
              onClick={() => toggleProblem(problem)}
            >
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </Button>
            {answer && answer === "Wait for it..." ? (
              <span className="animated fadeIn">{answer}</span>
            ) : null}
            {answer && answer !== "Wait for it..." ? (
              <span className={`animated ${getRandomAnimation()}`}>
                {numeral(answer).format()}
              </span>
            ) : null}
          </div>
        </Collapse>
      </li>
    ));
  const toggleIsOpen = title => {
    setAnswer("");
    setCurrentProblem("");
    setShowAnswer("");
    if (isOpen === title) {
      setIsOpen("");
    } else {
      setIsOpen(title);
    }
  };
  const toggleProblem = problem => {
    if (!currentProblem) {
      setCurrentProblem(problem);
    } else {
      setCurrentProblem("");
    }
    if (showAnswer === problem.title) {
      setAnswer("");
      setShowAnswer("");
    } else {
      setShowAnswer(problem.title);
      setAnswer("Wait for it...");
      // const data = await problem.fn();
      // setAnswer(data);
    }
  };
  useEffect(() => {
    const getAnswer = async fn => {
      const data = await fn();
      setAnswer(data);
    };
    if (currentProblem.fn && answer === "Wait for it...") {
      getAnswer(currentProblem.fn);
    }
  }, [answer, currentProblem.fn]);
  return (
    <div
      className="container d-flex flex-column align-items-center mt-5"
      style={{ maxWidth: "800px" }}
    >
      <h1 className="display-4 mb-4 text-muted">{`Euler ${problems.length}`}</h1>
      <Pagination
        currentPage={currentPage}
        handleBack={handleBack}
        handleFwd={handleFwd}
        handleGoToPage={handleGoToPage}
        problemsLength={problems.length}
      />
      <ul className="list-group w-100">{renderProblems()}</ul>
      <Pagination
        currentPage={currentPage}
        handleBack={handleBack}
        handleFwd={handleFwd}
        handleGoToPage={handleGoToPage}
        problemsLength={problems.length}
      />
      <Footer />
    </div>
  );
}

export default App;
