import { useState } from "react";
import "./App.scss";
import Result from "../components/Result";
import Game from "../components/Game";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
  {
    title: "Сколько сторон света существует?",
    variants: [
      "4",
      "5",
      "6",
    ],
    correct: 0,
  },
  {
    title: "Как зовут Короля Англии?",
    variants: ["Вильгельм V", "Карл III", "Генри IV"],
    correct: 1,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index == question.correct) setCorrect(correct + 1);
  };

  return (
    <div className="App">
      {step != questions.length ? (
        <Game
          step={step}
          question={question}
          questions={questions}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
}

export default App;
