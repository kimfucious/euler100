import React, { useEffect, useState } from "react";
import { problems } from "./problems";
import { Footer } from "./components/Footer";
import { Pagination } from "./components/Pagination";
import { ProblemListItem } from "./components/ProblemListItem";

function App() {
  const [answer, setAnswer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProblem, setCurrentProblem] = useState("");
  const [currentProblems, setCurrentProblems] = useState(problems.slice(0, 10));
  const [isOpen, setIsOpen] = useState("");
  const [performance, setPerformance] = useState("");
  const [showAnswer, setShowAnswer] = useState("");
  const [showNaive, setShowNaive] = useState("");

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
      <ProblemListItem
        {...{
          answer,
          isOpen,
          performance,
          problem,
          showAnswer,
          showNaive,
          toggleIsOpen,
          toggleNaive,
          toggleProblem
        }}
      />
    ));

  const setProblems = page => {
    setCurrentProblems(problems.slice(page * 10 - 10, page * 10));
  };

  const toggleIsOpen = problem => {
    setAnswer("");
    setCurrentProblem("");
    setShowAnswer("");
    setShowNaive("");
    if (isOpen === problem.title) {
      setIsOpen("");
    } else {
      setIsOpen(problem.title);
      if (problem.naive) {
        setShowNaive(problem.title);
      }
    }
  };

  const toggleNaive = title => {
    setAnswer("");
    setCurrentProblem("");
    setShowAnswer("");
    if (showNaive === title) {
      setShowNaive("");
    } else {
      setShowNaive(title);
    }
  };

  const toggleProblem = problem => {
    if (!currentProblem) {
      console.log(problem);
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
    }
  };

  useEffect(() => {
    const getAnswer = async fn => {
      const t0 = window.performance.now();
      const data = await fn();
      const t1 = window.performance.now();
      setAnswer(data);
      setPerformance(t1 - t0);
    };
    if (currentProblem.fn && answer === "Wait for it...") {
      if (currentProblem.fnSmart && !showNaive) {
        getAnswer(currentProblem.fnSmart);
      }
      getAnswer(currentProblem.fn);
    }
  }, [answer, currentProblem.fn, currentProblem.fnSmart, showNaive]);

  return (
    <div
      className="container d-flex flex-column align-items-center mt-5"
      style={{ maxWidth: "800px" }}
    >
      <h1 className="display-4 mb-3 text-muted">{`Euler ${problems.length}`}</h1>
      <Pagination
        {...{
          currentPage,
          handleBack,
          handleFwd,
          handleGoToPage,
          problemsLength: problems.length
        }}
      />
      <ul className="list-group w-100">{renderProblems()}</ul>
      <Pagination
        {...{
          currentPage,
          handleBack,
          handleFwd,
          handleGoToPage,
          problemsLength: problems.length
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
