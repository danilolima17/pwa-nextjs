import { styled } from "styled-components"

const FooterContainer = styled.footer`
    background-color: #122A57;
    color: #fff;
    margin-top: 8rem;
    padding: 1rem;
    text-align: center;
`

export default function Footer() {
    return (
        <FooterContainer>
            <p>© 2023 CSS Flexbox - Danilo Lima</p>
        </FooterContainer>
    )
}