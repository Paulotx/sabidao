import styled from 'styled-components';

export const QuestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    height: 100%;
`;

export const QuestionsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    max-width: 45rem;
    margin-top: 3rem;

    div.information {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        span {
            text-transform: capitalize;
        }

        p {
            width: 100%;
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
    }

    div.answers {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 1rem;

        div {
            & + div {
                margin-top: 1rem;
            }
        }

        label {
            margin-left: 0.5rem;
        }
    }

    .end-game-btn {
        background: var(--yellow);
        color: #000;
        font-weight: 700;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
