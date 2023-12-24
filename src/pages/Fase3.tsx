import { useState } from "react";
import { Alert, Box, Button, Container, Snackbar, TextField } from "@mui/material";
import CountdownTimer from "../components/CounterDown";

import MORSE from '../assets/images/morse.jpeg'
import { useNavigate } from "react-router-dom";

export default function Fase3() {
    const [acertou, setAcertou] = useState<boolean>(false)
    const [resposta, setResposta] = useState<string>("")
    const [openMessage, setOpenMessage] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleCheck = () => {
        if(resposta == '..-. . .-.. .. --.. / -. .- - .- .-..') {
            setAcertou(true)
            setOpenMessage(true)
            setTimeout(() => {
                navigate("/fase4")
            }, 5000);
        }
    }

    const handleCloseMessage = () => {
        setOpenMessage(false)
    }
    
    return (
        <Container>
            <CountdownTimer minutes={5} seconds={0} acertou={acertou} />
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <h3>Transforme a frase abaixo em código morse</h3>
                <h2>FELIZ NATAL</h2>
            </Box>

            <img src={MORSE} width={300}/>

            <Box>
            <TextField
              margin="normal"
              fullWidth
              label="FRASE"
              autoFocus
              inputProps={{ style: { textTransform: "uppercase", fontSize: '30px' } }}
              onChange={(event) => setResposta(event.target.value)}
            />
            </Box>
            <Button variant="contained" onClick={handleCheck}>ENVIAR RESPOSTA</Button>
            <Snackbar open={openMessage} autoHideDuration={3000} onClose={handleCloseMessage} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="success">PARABÉNS... FELIZ NATAL!</Alert>
            </Snackbar>
        </Container>
    )
}