import styled from "styled-components";

const Container = styled.div`
    width: 611px;
    height: 276px;
    background-color: #171717;
    border: none;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
`

const UserName = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #FFFFFF;
    margin: 5px;
`

const Description = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #B7B7B7;
    margin: 2px;
`

const UrlThumb = styled.div`
    width: 503px;
    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    margin: 2px;
`

export { Container, UserName, UrlThumb, Description }