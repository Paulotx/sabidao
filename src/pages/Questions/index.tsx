import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { useQuestions } from '../../hooks/useQuestions';
import { usePlayers } from '../../hooks/usePlayer';

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { 
    QuestionsContainer, 
    QuestionsContent, 
} from "./styles";

interface Answer {
    question_number: number;
    question: string;
    answer: string;
    answer_correct: string;
}

interface Results {
    results: Array<{
        id: string;
        player: string;
        answers: Array<Answer>;
        numberAnswersCorrect: number;
        numberAnswersIncorrect: number;
    }>
}

export function Questions() {
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [answerQuestion, setAnswerQuestion] = useState('');
    const [endGame, setEndGame] = useState(false);

    const { questions } = useQuestions();
    const { player } = usePlayers();

    const navigate = useNavigate();

    function handleAnswerQuestion() {
        if(answerQuestion !== '') {
            const answer = {
                question_number: index + 1,
                question: questions[index].question,
                answer: answerQuestion,
                answer_correct: questions[index].correct_answer,
            }
    
            setAnswers([...answers, answer]);
    
            if(index + 1 < questions.length) {
                setIndex(index + 1);
                setAnswerQuestion('');
            }
    
            if(index + 1 === questions.length) {
                setEndGame(true);
            }

        } else {
            alert('Por favor, selecione uma resposta!');
        }
    }

    function handleFinishGame() {
        let response = localStorage.getItem('@Sabidao:results');

        let tbResults: Results;

        let numberAnswersCorrect = 0;
        let numberAnswersIncorrect = 0;

        answers.forEach(answer => {
            if(answer.answer === answer.answer_correct) {
                numberAnswersCorrect = numberAnswersCorrect + 1;
            } else {
                numberAnswersIncorrect = numberAnswersIncorrect + 1
            }
        });

        const data = {
            id: uuid(),
            player, 
            answers,
            numberAnswersCorrect,
            numberAnswersIncorrect,
            local: 'questions'
        }

        if(response) {
            tbResults = JSON.parse(response);

            tbResults = {
                results: [...tbResults.results, data]
            }

            localStorage.setItem('@Sabidao:results', JSON.stringify(tbResults));

        } else {
            tbResults = {
                results: [data]
            }

            localStorage.setItem('@Sabidao:results', JSON.stringify(tbResults));
        }

        navigate('/result', {state: {data}});
    }

    return (       
        <QuestionsContainer>
            <Header />

            <QuestionsContent>
                <div className="information">
                    <span><strong>Questão: </strong>{index + 1}</span>
                    <span><strong>Categoria:</strong> {questions[index].category}</span>
                    <span><strong>Dificuldade:</strong> {questions[index].difficulty}</span>
                    
                    <p dangerouslySetInnerHTML={{ __html: questions[index].question }} />
                </div>
                
                <div className="answers">
                    { questions[index].type === 'multiple' 
                        ? questions[index].answers?.map((answer, index) => (
                        <div className="answer" key={index}>
                            <input 
                                type="radio" 
                                name="answer" 
                                id={`answer-${index + 1}`}
                                checked={answerQuestion === answer}
                                value={answer}
                                onChange={(event) => setAnswerQuestion(event.target.value)}
                            />
                            <label 
                                htmlFor={`answer-${index + 1}`}
                                style={{cursor: 'pointer'}}
                            >
                                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                                </label>
                        </div>
                    )) : (
                        <div className="answer">
                            <div className="answer">
                                <input 
                                    type="radio" 
                                    name="answer" 
                                    id='answer-1'
                                    value="True"
                                    onChange={(event) => setAnswerQuestion(event.target.value)}
                                />
                                <label 
                                    htmlFor='answer-1' 
                                    style={{cursor: 'pointer'}}
                                >
                                    True
                                </label>
                            </div>

                            <div className="answer">
                                <input 
                                    type="radio" 
                                    name="answer" 
                                    id='answer-2' 
                                    value="False"
                                    onChange={(event) => setAnswerQuestion(event.target.value)}
                                />
                                <label 
                                    htmlFor='answer-2' 
                                    style={{cursor: 'pointer'}}
                                >
                                    False
                                </label>
                            </div>
                        </div>
                    )}
                </div>

                {!endGame ? (
                    <Button 
                        type="button" 
                        onClick={handleAnswerQuestion}
                    >
                        Responder
                    </Button>
                 ) : ( 
                    <Button 
                        type="button" 
                        onClick={handleFinishGame}
                        className="end-game-btn"
                    >
                        Finalizar Game
                    </Button>
                )}
            </QuestionsContent>
        </QuestionsContainer>
    );
}