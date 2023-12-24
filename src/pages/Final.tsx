import { Container } from "@mui/material";

export default function Final() {

    const msg = "parabéns você conseguiu!!".toUpperCase()
   
    return (
        <Container>
            <h1 style={{ color: 'green'}}>{msg}</h1>
            <iframe src="https://giphy.com/embed/xURk7rLZ7zX0twoJXS" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </Container>
    )
}