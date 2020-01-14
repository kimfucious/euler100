import React, { useEffect, useState } from "react";
import { problems } from "./problems";
import { Footer } from "./components/Footer";
import { Pagination } from "./components/Pagination";
import { ProblemListItem } from "./components/ProblemListItem";

function App() {
  const [answer, setAnswer] = useState("");
  const [codeAnimation, setcodeAnimation] = useState("fadeIn");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProblem, setCurrentProblem] = useState("");
  const [currentProblems, setCurrentProblems] = useState(problems.slice(0, 10));
  const [isOpen, setIsOpen] = useState("");
  const [linkMode, setLinkMode] = useState("d-none");
  const [performance, setPerformance] = useState("");
  const [showAnswer, setShowAnswer] = useState("");
  const [showAlt, setShowAlt] = useState("");

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
        key={problem.id}
        {...{
          answer,
          codeAnimation,
          isOpen,
          linkMode,
          performance,
          problem,
          showAnswer,
          showAlt,
          toggleIsOpen,
          toggleAlt,
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
    setShowAlt("");
    setLinkMode("d-none");
    if (isOpen === problem.title) {
      setIsOpen("");
    } else {
      setIsOpen(problem.title);
      if (problem.Alt) {
        setShowAlt(problem.title);
      }
    }
  };

  const toggleAlt = title => {
    setcodeAnimation("fadeOut faster");
    setAnswer("");
    setCurrentProblem("");
    setShowAnswer("");
    if (showAlt === title) {
      setTimeout(() => {
        setShowAlt("");
        setcodeAnimation("fadeIn faster");
      }, 500);
    } else {
      setTimeout(() => {
        setShowAlt(title);
        setLinkMode("d-flex");
        setcodeAnimation("fadeIn faster");
      }, 500);
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
      if (currentProblem.altFn && showAlt) {
        getAnswer(currentProblem.altFn);
      } else {
        getAnswer(currentProblem.fn);
      }
    }
  }, [answer, currentProblem.altFn, currentProblem.fn, showAlt]);

  // useEffect(() => {
  //   setcodeAnimation("fadeOut");
  //   setTimeout(() => {
  //     setcodeAnimation("fadeIn");
  //   }, 500);
  // }, [showAlt]);
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
