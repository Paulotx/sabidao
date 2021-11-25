import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

import { Header } from "../../components/Header";

import { ResultContainer, ResultContent } from "./styles";

interface Answer {
    id: string;
    question_number: number;
    question: string;
    answer: string;
    answer_correct: string;
}

export function Result() {
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [local, setLocal] = useState('');
    const [numberAnswersCorrect, setNumberAnswersCorrect] = useState(0);
    const [numberAnswersIncorrect, setNumberAnswersIncorrect] = useState(0);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {   
        setAnswers(location.state.data.answers);
        setLocal(location.state.data.local);
        setNumberAnswersCorrect(location.state.data.numberAnswersCorrect);
        setNumberAnswersIncorrect(location.state.data.numberAnswersIncorrect);
    }, [location.state]);

    return (
        <ResultContainer>
            <ResultContent>
                <Header />
                <h2>Resultado</h2>

                <div className="main">
                    <div>
                        <span>Acertos: {numberAnswersCorrect}</span>
                        <span>Erros: {numberAnswersIncorrect}</span>
                    </div>

                    <div className="questions">
                        {answers.map((answer, index) => (
                            <div className="question" key={answer.id}>
                                <span>Questão {index + 1}</span>
                                <p dangerouslySetInnerHTML={{ __html: answer.question }} />
                                <span>
                                    <strong>
                                        Resposta: {' '}
                                    </strong>
                                    <span 
                                        style={{
                                            color: answer.answer === answer.answer_correct 
                                            ? "green" 
                                            : "red"
                                        }}
                                        dangerouslySetInnerHTML={{ __html: answer.answer }}
                                    />
                                </span>
                                <span>
                                    <strong>
                                        Resposta Correta: {' '}
                                    </strong> 
                                        <span dangerouslySetInnerHTML={{ __html: answer.answer_correct }} />
                                </span>
                            </div>
                        ))}
                    </div>

                    <Button 
                        type="button"
                        onClick={() => navigate(local === 'questions' ? '/start' : '/results')}  
                    >
                        {local === 'questions' ? 'Jogar Novamente' : 'Voltar'}
                    </Button>
                </div>
            </ResultContent>
        </ResultContainer>
    );
}