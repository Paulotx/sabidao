import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

import { usePlayers } from '../../hooks/usePlayer';
import { Button } from "../../components/Button";

import { HomeContainer, HomeContent } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function Home() {
    const [name, setName] = useState('');

    const {createPlayer} = usePlayers();
    
    const navigate = useNavigate();

    function handleGoToStart() {
        if(name === '') {
            alert('Por favor, informe seu nome!');
            return;
        }

        createPlayer(name);
        navigate('/start');
    }

    return (
        <HomeContainer>
            <HomeContent>
                <Header />

                <div className="main">
                    <p>
                        Bem vindo ao nosso jogo, aqui iremos testar seus conhecimentos nas mais diversas áreas.
                    </p>

                    <p>
                        <strong>Regras do jogo:</strong> Para jogar é muito simples. Você deve escolher a quantidade 
                        de perguntas que deseja responder, se acertar todas as perguntas você será coroado como 
                        o Sabidão, caso não consiga você poderá tentar novamente.
                    </p>

                    <div>
                        <span>Vamos começar?</span>

                        <div>
                            <label htmlFor="name">Qual seu nome?</label>
                            <Input 
                                type="text" 
                                id="name" 
                                onChange={(event) => setName(event.target.value)}
                            />
                            <Button 
                                type="button" 
                                onClick={handleGoToStart}
                            >
                                Enviar
                            </Button>
                        </div>
                    </div>
                </div>
            </HomeContent>
            
            <Link to={'/results'}>Resultados</Link>
        </HomeContainer>
    );
}