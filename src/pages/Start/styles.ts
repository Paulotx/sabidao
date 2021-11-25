import styled from 'styled-components';

export const StartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    height: 100vh;

    position: relative;

    svg {
        position: absolute;
        top: 3rem;
        left: 3rem;
        cursor: pointer;
    }
`;

export const StartContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 45rem;

    div.main {
        margin-top: 2rem;

        width: 100%;

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            width: 50%;
            margin: 2rem auto;

            label {
                font-weight: 500;
                margin-bottom: 0.4rem;
            }
        }

        div.start {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            width: 50%;
            margin: 2rem auto;

            span {
                font-weight: 500;
            }

            div.btn-group {
                width: 100%;
            }
        }
    }
`;
