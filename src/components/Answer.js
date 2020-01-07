import React, { useEffect, useState } from "react";

export const Answer = ({ fn }) => {
  const [answer, setAnswer] = useState("Thinking");
  useEffect(() => {
    const getAnswer = async () => {
      const answer = await fn();
      setAnswer(answer);
    };
    getAnswer();
  }, [fn]);
  return <span>{answer ? answer : "Thinking..."}</span>;
};
