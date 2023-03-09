import { Container, UserName, Description, UrlThumb } from "./style"
import { ReactTagify } from "react-tagify";

export default function PostCard() {

    return (
        <Container>
            <UserName>Juvenal</UserName>
            <ReactTagify
                colors={"white"}
                tagClicked={(tag) => alert(tag)}>
                <Description>Llalalala #javascript</Description>
            </ReactTagify>
            <UrlThumb></UrlThumb>
        </Container>
    )
}