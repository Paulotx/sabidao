import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;

    position: relative;

    & > a {
        position: absolute;
        bottom: 2rem;
        right: 2rem;

        font-size: 1.5rem;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 40rem;

    div.main {
        margin-top: 3rem;

        p {
            font-size: 1.2rem;
            text-align: center;
            border: 2px solid #000;

            border-left: 0;
            border-right: 0;
            padding: 2rem 0;

            & + p {
                text-align: justify;
                border: 0;
            }
        }

        div {
            margin-top: 1.5rem;
            text-align: center;

            span {
                font-size: 1.2rem;
                font-weight: bold;
            }

            div {

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                width: 50%;
                margin: 2rem auto;
            }
        }
    }
`;
