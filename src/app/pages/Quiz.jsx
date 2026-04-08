import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { quizQuestions } from "../data/constitution-data";
import { GraduationCap, CheckCircle, XCircle, Award, RotateCcw, ArrowRight } from "lucide-react";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;
  const handleAnswerSelect = (index) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    const isCorrect = selectedAnswer === question.correctAnswer;
    setShowExplanation(true);
    setAnswers([...answers, isCorrect]);
    if (isCorrect) {
      setScore(score + 1);
    }
  };
  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };
  if (quizCompleted) {
    const percentage = Math.round(score / totalQuestions * 100);
    let message = "";
    let colorClass = "";
    if (percentage >= 80) {
      message = "Excellent! You have great knowledge of the Constitution!";
      colorClass = "from-green-600 to-teal-600";
    } else if (percentage >= 60) {
      message = "Good job! Keep learning to improve further.";
      colorClass = "from-blue-600 to-purple-600";
    } else {
      message = "Keep practicing! Review the content to strengthen your knowledge.";
      colorClass = "from-orange-600 to-red-600";
    }
    return /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `bg-gradient-to-r ${colorClass} rounded-2xl p-12 text-white text-center`, children: [
        /* @__PURE__ */ jsx(Award, { className: "w-24 h-24 mx-auto mb-6" }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: "Quiz Completed!" }),
        /* @__PURE__ */ jsxs("div", { className: "text-6xl font-bold mb-4", children: [
          score,
          "/",
          totalQuestions
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-2xl mb-6", children: [
          percentage,
          "% Score"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: message }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleRestartQuiz,
            className: "inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg",
            children: [
              /* @__PURE__ */ jsx(RotateCcw, { className: "w-5 h-5" }),
              "Retake Quiz"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-white rounded-xl shadow-lg p-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Your Answers" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: quizQuestions.map((q, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg", children: [
          answers[index] ? /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-600 flex-shrink-0" }) : /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5 text-red-600 flex-shrink-0" }),
          /* @__PURE__ */ jsxs("span", { className: "text-gray-700", children: [
            "Question ",
            index + 1
          ] }),
          /* @__PURE__ */ jsx("span", { className: `ml-auto font-semibold ${answers[index] ? "text-green-600" : "text-red-600"}`, children: answers[index] ? "Correct" : "Incorrect" })
        ] }, q.id)) })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx(GraduationCap, { className: "w-16 h-16 text-purple-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-2", children: "Constitution Quiz" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Test your knowledge about the Indian Constitution" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-gray-700", children: [
          "Question ",
          currentQuestion + 1,
          " of ",
          totalQuestions
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-gray-700", children: [
          "Score: ",
          score,
          "/",
          currentQuestion + (showExplanation ? 1 : 0)
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-300",
          style: { width: `${(currentQuestion + 1) / totalQuestions * 100}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-8 mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: question.question }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-6", children: question.options.map((option, index) => {
        const isSelected = selectedAnswer === index;
        const isCorrect = index === question.correctAnswer;
        const showResult = showExplanation;
        let buttonClass = "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300";
        if (isSelected && !showResult) {
          buttonClass = "bg-purple-100 border-purple-500";
        }
        if (showResult && isCorrect) {
          buttonClass = "bg-green-100 border-green-500";
        }
        if (showResult && isSelected && !isCorrect) {
          buttonClass = "bg-red-100 border-red-500";
        }
        return /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleAnswerSelect(index),
            disabled: showExplanation,
            className: `w-full text-left p-4 rounded-xl border-2 transition-all ${buttonClass} ${showExplanation ? "cursor-default" : "cursor-pointer"}`,
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxs("div", { className: `w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected && !showResult ? "border-purple-500 bg-purple-500 text-white" : showResult && isCorrect ? "border-green-500 bg-green-500 text-white" : showResult && isSelected && !isCorrect ? "border-red-500 bg-red-500 text-white" : "border-gray-300"}`, children: [
                showResult && isCorrect && /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5" }),
                showResult && isSelected && !isCorrect && /* @__PURE__ */ jsx(XCircle, { className: "w-5 h-5" }),
                !showResult && /* @__PURE__ */ jsx("span", { className: "font-semibold", children: String.fromCharCode(65 + index) })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-800 font-medium", children: option })
            ] })
          },
          index
        );
      }) }),
      showExplanation && /* @__PURE__ */ jsx("div", { className: `p-4 rounded-xl ${selectedAnswer === question.correctAnswer ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200"}`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        selectedAnswer === question.correctAnswer ? /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" }) : /* @__PURE__ */ jsx(XCircle, { className: "w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-gray-900 mb-2", children: selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: question.explanation })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex gap-3", children: !showExplanation ? /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleSubmitAnswer,
          disabled: selectedAnswer === null,
          className: "flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all",
          children: "Submit Answer"
        }
      ) : /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleNextQuestion,
          className: "flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2",
          children: [
            currentQuestion < totalQuestions - 1 ? "Next Question" : "Finish Quiz",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
          ]
        }
      ) })
    ] })
  ] }) });
}
export {
  Quiz
};
