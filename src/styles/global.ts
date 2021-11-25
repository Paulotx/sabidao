import { createGlobalStyle } from 'styled-components';

import bg from '../assets/bg.jpg';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F6F4E1;
        --text: #050404;
        --yellow: #FBC921;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%
        }
        @media (max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Adumu', sans-serif;
        color: var(--text);
        letter-spacing: 2px;
    }

    p, span, button, input, label, a, th, td {
        font-family: 'Poppins', sans-serif;
        color: var(--black);
    }

    button, input[type='radio'] {
        cursor: pointer;
    }
`;

