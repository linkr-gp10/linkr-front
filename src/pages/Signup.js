import styled from "styled-components";
import FormSignup from "../components/FormSignup";

export default function Signup() {
    return (
        <Container>
            <ContainerBrand>
                <ContainerLetters>
                    <h1>linkr</h1>
                    <h2>save, share and discover the best links on the web</h2>
                </ContainerLetters>
            </ContainerBrand>
            <ContainerInput>
                <FormSignup />
            </ContainerInput>
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`

const ContainerBrand = styled.div`
    background: #151515;
    width: 60%;
    color: #ffffff;
    font-weight: 700;
    padding-left: 10%;
    padding-top: 15%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ContainerLetters = styled.div`
    width: 50%;
    flex: display;
    flex-direction: column;
    justify-content: space-between;
    h1 {
        font-family: 'Passion One', cursive;
        font-size: 106px;
        letter-spacing: 0.05em;
        line-height: 117px;
    }
    h2 {
        font-family: 'Oswald', sans-serif;
        font-size: 43px;
    }
`

const ContainerInput = styled.div`
    display:flex;
    background: #333333;
    width: 40%;
    justify-content: center;
`