import React, { Component } from "react";
import QuizData from "../quizData";
import "bootstrap/dist/css/bootstrap.min.css";

// const Quiz = () => {
// return (
//     <div>
//       <div className="quiz-block">
//         <h2>QUIZ TIME</h2>
//         <h3>{data[0].question}</h3>
//         <div>
//           <img className="optimg" src={data[0].options[0]} />
//         </div>
//       </div>
//     </div>
//   );
// };

export class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: null, //current users answer
      currentIndex: 0, //current questions index
      options: [], //the four options
      quizEnd: false, //True if it's the last question
      score: 0, //the Score
      disabled: true,
    };
  }

  //Component that holds the current quiz
  loadQuiz = () => {
    const { currentIndex } = this.state; //get the current index
    this.setState(() => {
      return {
        question: QuizData[currentIndex].question,
        options: QuizData[currentIndex].options,
        answer: QuizData[currentIndex].answer,
      };
    });
  };

  //Handles Click event for the next button
  nextQuestionHander = () => {
    const { userAnswer, answer, score } = this.state;
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });

    //Check for correct answer and increment score
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
      
    }
   

   
  };

  //Load the quiz once the component mounts
  componentDidMount() {
    this.loadQuiz();
  };

  //Update the component
  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          disabled: true,
          question: QuizData[currentIndex].question,
          options: QuizData[currentIndex].options,
          answer: QuizData[currentIndex].answer,
        };
      });
    }
  }

  //Check the answer
  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  //Responds to the click of the finish button
  finishHandler = () => {
    if (this.state.currentIndex === QuizData.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render() {
    const { question, options, currentIndex, userAnswer, quizEnd } = this.state; //get the current state
    if (quizEnd) {
      return (
        <div className="quiz-block">
          <h1>Game Over. Your score is {this.state.score +1} </h1>
         
        </div>
      );
    }

    return (
      <div className="quiz-block">
      <h2>Quiz Time</h2>
        <h3>Q.{currentIndex + 1} {question}</h3>
        {options.map( ( option ) => (
            
              <img 
              src={option}  
              key={option.id}
              className={`options optimg ${userAnswer === option ? 'selected' : null}`}
              onClick={() => this.checkAnswer(option)} />
            
          )
        )}

        {currentIndex < QuizData.length - 1 && (
          // Next button only displays if the above is true
          <div className="quiz-btn"> 
          <button
            className="btn btn-primary quiz-btn "
            disabled={this.state.disabled}
            onClick={this.nextQuestionHander}
          >
            Next Question
          </button>
          </div>
         
        )}
        {currentIndex === QuizData.length - 1 && (
          <div className="quiz-btn">
          <button
            className="btn btn-primary "
            disabled={this.state.disabled}
            onClick={this.finishHandler}
          >
            Finish
          </button>
          </div>
         
        )}
      </div>
    );
  }
}

export default Quiz;
