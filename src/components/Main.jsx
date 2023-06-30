import { useAmp } from "next/amp";
import imageMain from "../assets/0-main.png"
import Image from "next/image";

const { styled } = require("styled-components");

const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    > div {
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
    }

    h1 {
        max-width: 40px;
        color: #122A57;
        font-size: 40px;
    }

    @media (max-width: 667px) {
        flex-direction: column-reverse;
        margin-top: 2rem;

        img {
            width: 320px;
            height: 180;
        }
    }
`
const Button = styled.button`
    background-color: #122A57;
    padding: 1rem 1rem;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 18px;
    font-size: 17px;
`


export default function Main() {
    const isAmp = useAmp()

    return (
        <MainContainer>
            <div>
                <h1>Flex Turismos</h1>
                <p>O melhor serviço para você!</p>
                <Button>Saiba Mais!</Button>
            </div>
            <div>
                {isAmp ? (
                    <amp-img alt="A view of the sea"
                    src={imageMain}
                    width="100"
                    height="100"
                    layout="responsive">
                    </amp-img>
                ) : (
                    <Image
                    src={imageMain}
                    width={500}
                    height={320}
                    alt="Picture of the author"
                    />
                )}
            </div>
        </MainContainer>
    )
}