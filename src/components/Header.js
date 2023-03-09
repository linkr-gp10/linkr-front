import styled from "styled-components";
import { UserInfoContext } from "../contexts/UserContext";
import { useContext } from "react";

export default function Header() {
    const { userInfo } = useContext(UserInfoContext);

    return (
        <Container>
            <h1>linkr</h1>
            <ImageContainer>
                <UserImage src={userInfo?.imageUrl}/>
            </ImageContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background: #151515;
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    h1 {
        font-family: 'Passion One', cursive;
        font-size: 49px;
        letter-spacing: 0.05em;
        line-height: 117px;
        padding-left: 1vw;
    }
`

const UserImage = styled.img`
    display: inline;
    margin: 0 auto;
    margin-left: -25%;
    height: 100%;
    width: auto;
`
const ImageContainer = styled.div`
    height: 60px;
    width: 60px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 1vw;
`