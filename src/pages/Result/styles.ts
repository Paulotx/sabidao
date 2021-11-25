import styled from 'styled-components';

export const ResultContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
`;

export const ResultContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    h2 {
        margin-top: 3rem;
    }
    
    div.main {
        width: 100%;
        max-width: 42.5rem;
        margin-top: 1.5rem;

        & > div:first-child {
            text-align: left;
            border-bottom: 2px solid #000;
            border-top: 2px solid #000;
            padding: 1rem 10rem;

            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                font-size: 1.5rem;
                font-weight: bold;

                &:first-child {
                    color: green;
                }

                &:last-child {
                    color: red;
                }
            }
        }

        div.questions {
            margin-top: 1.5rem;

            div.question {
                margin-top: 1rem;

                display: flex;
                flex-direction: column;

                font-size: 1.2rem;
                
                span {
                    &:first-child {
                        font-weight: 700;
                    }
                }
            }
        }

        button {
            margin-top: 3rem;
        }
    }
`;
