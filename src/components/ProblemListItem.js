import React from "react";
import { Button, Collapse, CustomInput } from "reactstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getRandomAnimation } from "../helpers";
import numeral from "numeral";

export const ProblemListItem = ({
  answer,
  isOpen,
  linkMode,
  performance,
  problem,
  showAnswer,
  showAlt,
  toggleIsOpen,
  toggleAlt,
  toggleProblem
}) => {
  return (
    <li className="d-flex flex-column align-items-center list-group-item">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex">
          <a
            className="d-block d-sm-none"
            href={`https://projecteuler.net/problem=${problem.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`Problem #: ${problem.id}`}
          </a>
          <span className="d-none d-sm-block">{`# ${problem.id}:  `}</span>
          <span className="d-none d-sm-block ml-1">{problem.title}</span>
          <a
            className="d-none d-sm-block"
            href={`https://projecteuler.net/problem=${problem.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="material-icons pl-2 text-info"
              style={{ fontSize: "16px" }}
            >
              open_in_new
            </i>
          </a>
        </div>
        <div className="d-flex align-items-center">
          {isOpen === problem.title && problem.alt ? (
            <div className="d-flex align-items-center">
              <a
                className={`${linkMode} align-items-center mr-2 animated ${
                  showAlt ? "fadeIn" : "fadeOut"
                }`}
                href={problem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="material-icons text-info"
                  style={{ fontSize: "18px" }}
                >
                  link
                </i>
              </a>
              <CustomInput
                className="mr-3 text-info"
                type="switch"
                id="showAlt"
                name="showAlt"
                label="alt"
                checked={showAlt === problem.title}
                onChange={() => {
                  toggleAlt(problem.title);
                }}
              />
            </div>
          ) : null}
          <Button
            color="primary"
            className="text-info"
            outline
            onClick={() => toggleIsOpen(problem)}
            size="sm"
          >
            {isOpen === problem.title ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
      <Collapse className="w-100" isOpen={isOpen === problem.title}>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {showAlt === problem.title ? problem.alt : problem.code}
        </SyntaxHighlighter>
        <div className="d-flex align-items-center justify-content-between">
          <Button
            color="primary"
            className="text-info mt-1"
            outline
            size="sm"
            onClick={() => toggleProblem(problem)}
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
          {answer && answer === "Wait for it..." ? (
            <span className="animated fadeIn">{answer}</span>
          ) : null}
          {answer && answer !== "Wait for it..." ? (
            <>
              <span
                className={`d-block d-sm-none animated ${getRandomAnimation()}`}
              >
                {`${numeral(answer).format()}`}
              </span>
              <span
                className={`d-none d-sm-block animated ${getRandomAnimation()}`}
              >
                {`${numeral(answer).format()} (${performance} ms)`}
              </span>
            </>
          ) : null}
        </div>
      </Collapse>
    </li>
  );
};
