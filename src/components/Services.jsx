import { useAmp } from "next/amp";
import Image from "next/image";
import IconHosted from "../assets/icon-1.png"
import IconTravels from "../assets/icon-2.png"
import IconRouters from "../assets/icon-3.png"

const { styled } = require("styled-components");

const ServicesContainer = styled.div`
    background-color: #122A57;
    padding: 3rem;

    h2 {
        text-align: center;
        margin-bottom: 1rem;
        color: #fff;
        font-size: 32px;
    }
`

const ServicesBox = styled.div`
    display: flex;
    gap: 8rem;
    justify-content: center;
    margin-top: 3rem;

    @media (max-width: 667px) {
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }
`


const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ButtonBox = styled.button`
    background-color: #fff;
    color: #122A57;
    border: 0;
    border-radius: 8px;
    padding: 0.973rem 1rem;
    cursor: pointer;

    @media (max-width: 667px) {
        padding: 0.835rem 0.875rem;
    } 
`

export default function Services() {
    const isAmp = useAmp()

    return (
        <ServicesContainer>
            <h2>Serviços</h2>
        <ServicesBox>
            <Box>
                {
                    isAmp ? (
                        <amp-img
                        src={IconHosted}
                        width="300"
                        height="275"
                        layout="responsive"
                        >
                        </amp-img>
                    ) : (
                        <Image
                        src={IconHosted}
                        width={130}
                        height={130}
                        ></Image>
                    )
                }
                <ButtonBox>Comprar Agora</ButtonBox>
            </Box>
            <Box>
                {
                    isAmp ? (
                        <amp-img
                        src={IconTravels}
                        width="300"
                        height="275"
                        layout="responsive"
                        >
                        </amp-img>
                    ) : (
                        <Image
                        src={IconTravels}
                        width={130}
                        height={130}
                        ></Image>
                    )
                }
                <ButtonBox>Comprar Agora</ButtonBox>
            </Box>
            <Box>
                {
                    isAmp ? (
                        <amp-img
                        src={IconRouters}
                        width="300"
                        height="275"
                        layout="responsive"
                        >
                        </amp-img>
                    ) : (
                        <Image
                        src={IconRouters}
                        width={130}
                        height={130}
                        ></Image>
                    )
                }
                <ButtonBox>Comprar Agora</ButtonBox>
            </Box>
        </ServicesBox>
        </ServicesContainer> 
    )
}