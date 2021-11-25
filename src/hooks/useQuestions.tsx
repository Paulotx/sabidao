import { createContext, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface QuestionsContextProps {
    children: ReactNode
}

interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
    answers?: Array<string>;
}

interface QuestionsContextData {
    questions: Question[];
    loadQuestions: (number_questions: number) => Promise<void>;
}

const QuestionsContext = createContext<QuestionsContextData>({} as QuestionsContextData);

export function QuestionsProvider({ children }: QuestionsContextProps) {
    const [questions, setQuestions] = useState<Question[]>([])

    async function loadQuestions(number_questions: number) {
        const response = await api.get(`/api.php?amount=${number_questions}`);

        const result: Question[] = response.data.results;

        let questionsFormatted = result.map(item => {
            if(item.type === 'multiple') {
                const answers = [...item.incorrect_answers, item.correct_answer];

                answers.sort(()=> Math.random() - 0.5);

            return { ...item, answers }

            } 
            
            return item;
        });

        setQuestions(questionsFormatted);
    }

    return (
        <QuestionsContext.Provider value={{ questions, loadQuestions }}>
            {children}
        </QuestionsContext.Provider>
    );
}

export function useQuestions() {
    const context = useContext(QuestionsContext);

    return context;
}