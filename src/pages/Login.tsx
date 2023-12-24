import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [tentativas, setTentativas] = React.useState<number>(5)
    const [gameOver, setGameOver] = React.useState<boolean>(false)
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if((data.get('user') == 'sumaia' || data.get('user') == 'Sumaia') && data.get('password') == '2036') {
            navigate("/fase1");
        } else {
            setTentativas(tentativas - 1)
        }
  };

  React.useEffect(() => {
    if(tentativas == 0) {
        setGameOver(true)
    }
  }, [tentativas])

  return (
      <Container component="main" maxWidth="xs">
        <h1>TENTATIVAS: {tentativas} </h1>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" marginBottom={3}>
            Fazer Login
          </Typography>
          <Typography component="p">
            Nome de usúario : primeiro nome do criador do grupo da família.
          </Typography>
          <Typography component="p">
            Senha : a soma dos números da data de criação do grupo.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="Usuário"
              name="user"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={gameOver}
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Container>
  );
}