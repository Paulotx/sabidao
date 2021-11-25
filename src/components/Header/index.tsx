import logo from '../../assets/logo-sabidao.png';

import { HeaderContainer } from './styles';

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="Logo Sabidão" />
            <h1>Quiz do Sabidão</h1>
            <span>Conhecimentos Gerais</span>
        </HeaderContainer>
    );
}