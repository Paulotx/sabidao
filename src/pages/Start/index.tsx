import { useState } from "react";
import { useNavigate, } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { useQuestions } from '../../hooks/useQuestions';

import { Button } from "../../components/Button";

import { StartContainer, StartContent } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function Start() {
    const [numberQuestions, setNumberQuestions] = useState(0);
    const [showMessageIsReady, setShowMessageIsReady] = useState(false);

    const { loadQuestions } = useQuestions();
    const navigate = useNavigate();

    function handleSetShowMessageIsReady() {
        if(numberQuestions === 0) {
            alert("Por favor, informe o numero de questões que deseja responder!");
            return;
        }

        setShowMessageIsReady(true);
    }

    async function handleGoToQuestions() {
        await loadQuestions(numberQuestions);
        navigate('/questions');
    }

    return (
        <StartContainer>
            <StartContent>
                <Header />

                <div className="main">
                    <div>
                        {!showMessageIsReady ? (
                            <form>
                                <label htmlFor="number_questions">Quantas perguntas você deseja responder?</label>
                                <Input 
                                    type="number" 
                                    id="number_questions"
                                    onChange={(event) => setNumberQuestions(Number(event.target.value))}
                                    style={{textAlign: 'center'}}
                                />
                                <Button
                                    type="button" 
                                    onClick={handleSetShowMessageIsReady}
                                >
                                    Enviar
                                </Button>
                            </form>
                        ) : (
                            <div className="start">
                                <span>Esta preparado?</span>

                                <div className="btn-group">
                                    <Button 
                                        type="button"
                                        onClick={handleGoToQuestions}
                                    >
                                        Start
                                    </Button>
                                    <Button 
                                        type="button" 
                                        onClick={() => setShowMessageIsReady(false)}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </StartContent>

            <FiArrowLeft size={35} onClick={() => navigate('/')}/>
        </StartContainer>
    );
}