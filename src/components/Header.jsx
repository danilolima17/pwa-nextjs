const { styled } = require("styled-components");

const HeaderContainer = styled.header`
    background-color: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    color: #fff;
`
const NavList = styled.nav`
    ul {
        display: flex;
        list-style: none;
        gap: 4rem;
    }

    @media (max-width: 667px) {
        display: none;
    }
    
`

export default function Header() {
    return (
        <HeaderContainer>
        <h1>Flex Turismos</h1>
        <NavList>
            <ul>
                <li>Quem Somos</li>
                <li>Serviços</li>
                <li>Planos</li>
            </ul>
        </NavList>
        </HeaderContainer>
    )
}