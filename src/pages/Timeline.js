import styled from "styled-components";
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
    height: auto;
    width: auto;
    overflow: auto;
    background: #333333;
`

