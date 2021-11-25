import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    height: 3rem;
    padding: 0.3rem 1rem;
    background: #000;
    border-radius: 0.3rem;
    border: 0;
    margin-top: 0.5rem;

    color: var(--yellow);
    font-size: 1.2rem;

    transition: all 0.2s;

    &:hover {
        color: var(--background);
    }
`;