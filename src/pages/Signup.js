import axios from "axios";
import styled from "styled-components";

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
                e-mail
                password
                username
                picture url
                sign up
                switch back to log in
            </ContainerInput>
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh
`

const ContainerBrand = styled.div`
    background: #151515;
    width: 60%;
    color: #ffffff;
    font-weight: 700;
    padding-left: 10%;
    padding-top: 15%;

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
    background: #333333;
    width: 40%;
`