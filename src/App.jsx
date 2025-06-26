import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  const [data, setData] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data.quizzes);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleViewScore(score) {
    setScore(score);
  }

  function handleSubjectClick(subjectIndex) {
    setSelectedSubject(data[subjectIndex]);
  }

  function handlePlayAgain() {
    setSelectedSubject(null);
    setScore(null); 
  }

  return (
    <Layout subject={selectedSubject}>
      {data && !selectedSubject && data.length !== 0 && (
        <Home subjects={data} onSubjectClick={handleSubjectClick} />
      )}
      {selectedSubject && score === null && <Quiz questions={selectedSubject.questions} onViewScoreClick={handleViewScore} />}
      {selectedSubject && score !== null && <Result subject={selectedSubject} score={score} onPlayAgain={handlePlayAgain}/>}
    </Layout>
  );
}

export default App;
