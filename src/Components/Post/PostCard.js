import { Container, UserName, Description, UrlThumb } from "./style"
import { ReactTagify } from "react-tagify";

export default function PostCard() {

    return (
        <Container data-test="post">
            <UserName data-test="username">Juvenal</UserName>
            <ReactTagify
                colors={"white"}
                tagClicked={(tag) => alert(tag)}>
                <Description data-test="description">Llalalala #javascript</Description>
            </ReactTagify>
            <UrlThumb data-test="link"></UrlThumb>
        </Container>
    )
}