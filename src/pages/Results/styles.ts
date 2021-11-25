import styled from 'styled-components';

export const ResultsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;

    position: relative;

    svg {
        position: absolute;
        top: 3rem;
        left: 3rem;
        cursor: pointer;
    }
`;

export const ResultsContent = styled.div`
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
        
        table {
            width: 100%;
            border-spacing: 0;

            tr {
                &:hover {
                    background: rgba(0, 0, 0, 0.3);
                }
            }

            th {
                font-weight: 500;
                text-align: left;
                line-height: 1.5rem;
                color: #FFF;

                background: #000;
                padding: 1rem 2rem;
                border: 1px solid #FFF;
            }

            td {
                padding: 1rem 2rem;
                border: 1px solid #FFF;
                background: rgba(0, 0, 0, 0.2);
                cursor: pointer;

                
            }
        }
    }
`;
