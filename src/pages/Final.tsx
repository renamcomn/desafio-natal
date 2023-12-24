import { Container } from "@mui/material";

export default function Final() {

    const msg = "parabéns você conseguiu!!".toUpperCase()
   
    return (
        <Container>
            <h1 style={{ color: 'green'}}>{msg}</h1>
            <iframe src="https://giphy.com/embed/xURk7rLZ7zX0twoJXS" width="300" height="400" frameBorder="0" allowFullScreen></iframe>
        </Container>
    )
}