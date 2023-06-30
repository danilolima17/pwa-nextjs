const { styled } = require("styled-components");
import { useAmp } from "next/amp";
import imageSection from "../assets/1.png"
import Image from "next/image";


const SectionContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    @media (max-width: 667px) {
        margin-top: 3rem;
        flex-direction: column-reverse;
        gap: 1rem;

        img {
            width: 300px;
        }
    } 
`

const AreaRight = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 1rem;
    padding: 3rem;

    h1 {
        font-size: 30px;
        color: #122A57;
    }
`


export default function Section() {
    const isAmp = useAmp()

    return (
        <SectionContainer>
            <div>
                {
                    isAmp ? (
                        <amp-img
                        src={imageSection}
                        width="300"
                        height="275"
                        layout="responsive"
                        >
                        </amp-img>
                    ) : (
                        <Image
                        src={imageSection}
                        width={400}
                        height={300}
                        >
                        </Image>
                    )
                }
            </div>
            <AreaRight>
                <h1>Quem Somos</h1>
                <p>It is a long established fact that a reader will
                     be distracted by the readable content of a page when looking at its layout.</p>
                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </AreaRight>
        </SectionContainer>
    )
}