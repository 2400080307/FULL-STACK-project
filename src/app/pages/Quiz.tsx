import { useState } from "react";
import { quizQuestions } from "../data/constitution-data";
import { GraduationCap, CheckCircle, XCircle, Award, RotateCcw, ArrowRight } from "lucide-react";

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;

  const handleAnswerSelect = (index: number) => {
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
    const percentage = Math.round((score / totalQuestions) * 100);
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

    return (
      <div className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-r ${colorClass} rounded-2xl p-12 text-white text-center`}>
            <Award className="w-24 h-24 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Quiz Completed!</h1>
            <div className="text-6xl font-bold mb-4">
              {score}/{totalQuestions}
            </div>
            <div className="text-2xl mb-6">{percentage}% Score</div>
            <p className="text-xl mb-8 text-white/90">{message}</p>
            <button
              onClick={handleRestartQuiz}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg"
            >
              <RotateCcw className="w-5 h-5" />
              Retake Quiz
            </button>
          </div>

          {/* Answer Summary */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Answers</h2>
            <div className="space-y-3">
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  {answers[index] ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                  <span className="text-gray-700">Question {index + 1}</span>
                  <span className={`ml-auto font-semibold ${answers[index] ? "text-green-600" : "text-red-600"}`}>
                    {answers[index] ? "Correct" : "Incorrect"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <GraduationCap className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Constitution Quiz</h1>
          <p className="text-gray-600">Test your knowledge about the Indian Constitution</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-gray-700">
              Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{question.question}</h2>

          {/* Answer Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => {
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

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${buttonClass} ${
                    showExplanation ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      isSelected && !showResult ? "border-purple-500 bg-purple-500 text-white" :
                      showResult && isCorrect ? "border-green-500 bg-green-500 text-white" :
                      showResult && isSelected && !isCorrect ? "border-red-500 bg-red-500 text-white" :
                      "border-gray-300"
                    }`}>
                      {showResult && isCorrect && <CheckCircle className="w-5 h-5" />}
                      {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
                      {!showResult && <span className="font-semibold">{String.fromCharCode(65 + index)}</span>}
                    </div>
                    <span className="text-gray-800 font-medium">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`p-4 rounded-xl ${
              selectedAnswer === question.correctAnswer
                ? "bg-green-50 border border-green-200"
                : "bg-blue-50 border border-blue-200"
            }`}>
              <div className="flex items-start gap-3">
                {selectedAnswer === question.correctAnswer ? (
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-bold text-gray-900 mb-2">
                    {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
                  </p>
                  <p className="text-gray-700">{question.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            {!showExplanation ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {currentQuestion < totalQuestions - 1 ? "Next Question" : "Finish Quiz"}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
