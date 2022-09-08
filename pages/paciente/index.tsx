import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Title from '../../src/Title/Title';
import { Container, Divider, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

export default function Paciente() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
        <Container component={Paper} sx={{  }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    m: 1,
                    p: 1
                }}>
                <Title>Paciente</Title>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    m: 2
                }}>
                <Typography>
                    Data de Admissão: 20/10/2022
                </Typography>
                <Typography>
                    Dias Internado: 16 dias
                </Typography>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    startIcon={<KeyboardArrowDownIcon />}
                    sx={{
                        color: 'white',
                        backgroundColor: '#1E292E',
                        '&:hover': {
                            color: 'white',
                            backgroundColor: '#415760',
                        },
                        
                    }}
                >
                    Prioridade
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}

                >
                    <MenuItem onClick={handleClose}
                        sx={{
                            '&:hover': {
                                color: 'white',
                                backgroundColor: '#1E292E',
                            }
                        }}
                    >
                        Alta</MenuItem>
                    <MenuItem onClick={handleClose}
                        sx={{
                            '&:hover': {
                                color: 'white',
                                backgroundColor: '#1E292E',
                            }
                        }}
                    >
                        Médio</MenuItem>
                    <MenuItem onClick={handleClose}
                        sx={{
                            '&:hover': {
                                color: 'white',
                                backgroundColor: '#1E292E',
                            }
                        }}
                    >
                        Baixo</MenuItem>
                </Menu>
            </Box>
            <Box
                sx={{
                    p: 1
                }} 
            >
                <Typography
                    sx={{
                        m: 2
                    }}
                >
                    Nome: Walter Gomes dos Santos
                </Typography>
                <Typography
                    sx={{
                        m: 2
                    }}
                >
                    Nome da  Mãe: Capitu Gomes dos Santos
                </Typography>
                <Typography
                    sx={{
                        m: 2
                    }}
                >
                    Telefone: (84) 99103-6182
                </Typography>
                <Typography
                    sx={{
                        m: 2
                    }}
                >
                    Idade: 32 Anos
                </Typography>
                <Typography
                    sx={{
                        m: 2
                    }}
                >
                    Email: walterzinho@gmail.com
                </Typography>
                <Typography
                    sx={{
                        m: 2
                    }}
                >
                    Diagnostico: Indefinido
                </Typography>
                <Typography
                    sx={{
                        m: 2

                    }}
                >
                    Dieta: DIETA LÍQUIDA COMPLETA
                </Typography>
            </Box>
        </Container>
        <Box
            sx={{
                p:2,
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
            <Button variant="contained" href = "http://localhost:3000/medicamentoPaciente" >Ver Medicamentos</Button>
            <Button variant="contained" href = "http://localhost:3000/cadastrarPacientes" >Ver Exames</Button>
        </Box>
    </div>
    );
}