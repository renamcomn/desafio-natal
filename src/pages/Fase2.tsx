import { useState } from "react";
import { Alert, Box, Button, Container, Snackbar, TextField } from "@mui/material";
import CountdownTimer from "../components/CounterDown";
import { useNavigate } from "react-router-dom";

import MORSE from '../assets/images/morse.jpeg'

export default function Fase2() {
    const [acertou, setAcertou] = useState<boolean>(false)
    const [resposta, setResposta] = useState<string>("")
    const [openMessage, setOpenMessage] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleCheck = () => {
        if(resposta.toUpperCase() == 'JESUS NASCEU') {
            setAcertou(true)
            setOpenMessage(true)
            setTimeout(() => {
                navigate("/fase3")
            }, 5000);
        }
    }

    const handleCloseMessage = () => {
        setOpenMessage(false)
    }
    
    return (
        <Container>
            <CountdownTimer minutes={5} seconds={0} acertou={acertou} />
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <h2>.--- . ... ..- ... / -. .- ... -.-. . ..-</h2>
            </Box>

            <img src={MORSE} width={300}/>

            <Box>
            <TextField
              margin="normal"
              fullWidth
              label="DIGITE A FRASE"
              autoFocus
              inputProps={{ style: { textTransform: "uppercase"} }}
              onChange={(event) => setResposta(event.target.value)}
            />
            </Box>
            <Button variant="contained" onClick={handleCheck}>ENVIAR RESPOSTA</Button>
            <Snackbar open={openMessage} autoHideDuration={2000} onClose={handleCloseMessage} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="success">PARABÉNS... JESUS NASCEU!</Alert>
            </Snackbar>
        </Container>
    )
}