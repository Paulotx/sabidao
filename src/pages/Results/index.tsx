import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";

import { ResultsContainer, ResultsContent } from "./styles";

interface Answer {
    question_number: number;
    question: string;
    answer: string;
    answer_correct: string;
}

interface ResultsData {
    id: string;
    player: string;
    answers: Array<Answer>;
    numberAnswersCorrect: number;
    numberAnswersIncorrect: number;
}

export function Results() {
    const [results, setResults] = useState<ResultsData[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        let response = localStorage.getItem('@Sabidao:results');

        if(response) {
            const results = JSON.parse(response);
            setResults(results.results);
        }
    }, []);

    function handleShowResult(result: ResultsData) {
        navigate('/result', {state: {data: {...result, local: "results"}}});
    }

    return (
        <ResultsContainer>
            <ResultsContent>
                <Header />
                <h2>Resultados</h2>

                <div className="main">
                    <table>
                        <thead>
                            <tr>
                                <th>Jogador</th>
                                <th>Acertos</th>
                                <th>Erros</th>
                            </tr>
                        </thead>
                        <tbody>
                        {results.map(result => (
                            <tr key={result.id} onClick={() => handleShowResult(result)}>
                                <td>{result.player}</td>
                                <td>{result.numberAnswersCorrect}</td>
                                <td>{result.numberAnswersIncorrect}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </ResultsContent>

            <FiArrowLeft size={35} onClick={() => navigate('/')}/>

        </ResultsContainer>
    );
}