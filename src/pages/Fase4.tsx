import { useState } from "react";
import { Alert, Box, Button, Container, Snackbar, TextField } from "@mui/material";
import CountdownTimer from "../components/CounterDown";

import TABELA from '../assets/images/1.jpeg'
import imgA from '../assets/images/a.jpeg'
import imgE from '../assets/images/e.jpeg'
import imgI from '../assets/images/i.jpeg'
import imgL from '../assets/images/l.jpeg'
import imgN from '../assets/images/n.jpeg'
import imgT from '../assets/images/t.jpeg'
import imgU from '../assets/images/u.jpeg'
import imgV from '../assets/images/v.jpeg'
import { useNavigate } from "react-router-dom";


export default function Fase4() {
    const [acertou, setAcertou] = useState<boolean>(false)
    const [resposta, setResposta] = useState<string>("")
    const [openMessage, setOpenMessage] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleCheck = () => {
        if(resposta.toUpperCase() == 'VALEU NATALINA') {
            setAcertou(true)
            setOpenMessage(true)
            setTimeout(() => {
                navigate("/final")
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
                <img src={imgV} />
                <img src={imgA} />
                <img src={imgL} />
                <img src={imgE} />
                <img src={imgU} />
            </Box>

            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginBottom={5}>
                <img src={imgN} />
                <img src={imgA} />
                <img src={imgT} />
                <img src={imgA} />
                <img src={imgL} />
                <img src={imgI} />
                <img src={imgN} />
                <img src={imgA} />
            </Box>

            <img src={TABELA}/>

            <Box>
            <TextField
              margin="normal"
              fullWidth
              label="FRASE"
              autoFocus
              inputProps={{ style: { textTransform: "uppercase" } }}
              onChange={(event) => setResposta(event.target.value)}
            />
            </Box>
            <Button variant="contained" onClick={handleCheck}>ENVIAR RESPOSTA</Button>
            <Snackbar open={openMessage} autoHideDuration={3000} onClose={handleCloseMessage} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="success">PARABÉNS... VALEU NATALINA!</Alert>
            </Snackbar>
        </Container>
    )
}