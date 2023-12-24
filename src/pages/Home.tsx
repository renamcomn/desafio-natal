import { Alert, Box, Button, Container, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "../components/CounterDown";

const number = Math.floor(Math.random() * 100) + 1

export default function Home() {
    const [bet, setBet] = useState<number>(0)
    const [acertou, setAcertou] = useState<boolean>(false)
    const [openMoreMessage, setOpenMoreMessage] = useState<boolean>(false)
    const [openMinusMessage, setOpenMinusMessage] = useState<boolean>(false)
    const navigate = useNavigate();
    
    const handleVerifyNumber = () => {
        if(bet > number) {
            setOpenMinusMessage(true)
        } else if(bet < number) {
            setOpenMoreMessage(true)
        } else {
            setAcertou(true)
        }
    }

    const handleCloseMessage = () => {
        setOpenMoreMessage(false)
        setOpenMinusMessage(false)
    }

    return (
        <Container component="main" maxWidth="xs">
            <Snackbar open={openMoreMessage} autoHideDuration={3000} onClose={handleCloseMessage} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="error">O NÚMERO É MAIOR QUE {bet}</Alert>
            </Snackbar>
            <Snackbar open={openMinusMessage} autoHideDuration={3000} onClose={handleCloseMessage} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="success">O NÚMERO É MENOR QUE {bet}</Alert>
            </Snackbar>
            <CountdownTimer minutes={2} seconds={0} acertou={acertou} />
            <Box display={'flex'} alignItems={'center'} gap={2}>
                <TextField label="Número 1 a 100" variant="outlined" onChange={(event) => setBet(event.target.value)} inputProps={{ inputMode: 'numeric' }} />
                <Button variant="contained" onClick={handleVerifyNumber}>Validar</Button>
            </Box>
            {acertou && 
                <Box display={'flex'} alignItems={'center'} mt={5} justifyContent={'center'} flexDirection={'column'}>
                    <Typography color={'green'}>PARABÉNS!! VOCE ACERTOU!</Typography>
                    <Button onClick={() => navigate("/fase2")} variant="contained" color="success">Próxima FASE</Button>
                </Box>
            }
            
        </Container>
    )
}