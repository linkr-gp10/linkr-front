import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";

export default function Timeline() {
    return (
        <>
        <Header />
        <Container>
        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    height: 92vh;
    width: auto;
    background: #333333;
`

