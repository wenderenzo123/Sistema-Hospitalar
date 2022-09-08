import Paper from '@mui/material/Paper';
import { Container, Divider, Menu, MenuItem, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Title from '../../src/components/Title/Title';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MedicamentoPaciente(){
    const theme = createTheme();
    theme.typography.h3 = {

        color: 'white',
        fontSize: '1.5rem',
        '@media (min-width:600px)': {
            fontSize: '1.7rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.2rem',
        },
    };
    theme.typography.h5 = {
        color:'black',
        fontFamily: 'Montserrat',
        fontSize: '1.1rem',
        '@media (max-width:600px)': {
            fontSize: '0.8rem',
        },
    };
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Typography variant="h3">Medicamentos</Typography>
            </ThemeProvider>
            <Container component={Paper} sx= {{py:1,my:2,display: { sm: 'none', md: 'flex'}, justifyContent: 'space-between', alignItems: 'center'}}>
                <ThemeProvider  theme={theme}>
                    <Typography variant = 'h5'> EPINEFRINA 1mg/mL ampola 1mL – sol.injetável</Typography>
                    <Box sx= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant = 'h5'>Freq: 12/12h</Typography>
                        <IconButton edge="end" aria-label="qrcode">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </ThemeProvider >
            </Container>
            <Container component={Paper} sx= {{display: 'flex', justifyContent:'space-between' ,py:1,my:2, alignItems: 'center'}}>
                <ThemeProvider theme={theme}>
                    <Typography variant = 'h5'> PROPRANOLOL 40mg – comprimido</Typography>
                    <Box sx= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant = 'h5'>Freq: 12/12h</Typography>
                        <IconButton edge="end" aria-label="qrcode">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </ThemeProvider>
            </Container>
            <Container component={Paper} sx= {{py:1,my:2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <ThemeProvider  theme={theme}>
                    <Typography variant = 'h5'> EPINEFRINA 1mg/mL ampola 1mL – sol.injetável</Typography>
                    <Box sx= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant = 'h5'>Freq: 12/12h</Typography>
                        <IconButton edge="end" aria-label="qrcode">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </ThemeProvider >
            </Container>
            <Container component={Paper} sx= {{py:1,my:2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <ThemeProvider  theme={theme}>
                    <Typography variant = 'h5'> EPINEFRINA 1mg/mL ampola 1mL – sol.injetável</Typography>
                    <Box sx= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant = 'h5'>Freq: 12/12h</Typography>
                        <IconButton edge="end" aria-label="qrcode">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </ThemeProvider >
            </Container>
            <Container component={Paper} sx= {{py:1,my:2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <ThemeProvider  theme={theme}>
                    <Typography variant = 'h5'> EPINEFRINA 1mg/mL ampola 1mL – sol.injetável</Typography>
                    <Box sx= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant = 'h5'>Freq: 12/12h</Typography>
                        <IconButton edge="end" aria-label="qrcode">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </ThemeProvider >
            </Container>
            <Container component={Paper} sx= {{display: 'flex', justifyContent:'space-between' ,py:1,my:2, alignItems: 'center'}}>
                <ThemeProvider theme={theme}>
                    <Typography variant = 'h5'> PROPRANOLOL 40mg – comprimido</Typography>
                    <Box sx= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant = 'h5'>Freq: 12/12h</Typography>
                        <IconButton edge="end" aria-label="qrcode">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </ThemeProvider>
            </Container>
            <Container component={Paper} sx= {{py:1,my:2, display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>
                <ThemeProvider  theme={theme}>
                    <Typography variant = 'h5'> EPINEFRINA 1mg/mL ampola 1mL – sol.injetável</Typography>
                    <Box sx= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant = 'h5'>Freq: 12/12h</Typography>
                        <IconButton edge="end" aria-label="qrcode">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </ThemeProvider >
            </Container>
            <Container component={Paper} sx= {{py:1,my:2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <ThemeProvider  theme={theme}>
                    <Typography variant = 'h5'> EPINEFRINA 1mg/mL ampola 1mL – sol.injetável</Typography>
                    <Box sx= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant = 'h5'>Freq: 12/12h</Typography>
                        <IconButton edge="end" aria-label="qrcode">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </ThemeProvider >
            </Container>
            <Container component={Paper} sx= {{py:1,my:2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <ThemeProvider  theme={theme}>
                    <Typography variant = 'h5'> EPINEFRINA 1mg/mL ampola 1mL – sol.injetável</Typography>
                    <Box sx= {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography variant = 'h5'>Freq: 12/12h</Typography>
                        <IconButton edge="end" aria-label="qrcode">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </ThemeProvider >
            </Container>
        </div>
    )
}