import './App.css'
import Login from './pages/Login'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fase2 from './pages/Fase2';
import Fase3 from './pages/Fase3';
import Fase4 from './pages/Fase4';
import Fase5 from './pages/Fase5';
import Final from './pages/Final';

const defaultTheme = createTheme();

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/fase1' element={<Home />}></Route>
          <Route path='/fase2' element={<Fase2 />}></Route>
          <Route path='/fase3' element={<Fase3 />}></Route>
          <Route path='/fase4' element={<Fase4 />}></Route>
          <Route path='/final' element={<Final />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
   
  )
}

export default App
