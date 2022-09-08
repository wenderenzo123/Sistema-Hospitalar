import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, FormControlLabel, FormLabel } from '@mui/material';
import QrCodeRoundedIcon from '@mui/icons-material/QrCodeRounded';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const currencies = [
    {
        value: 'Vazio',
        label: 'Selecione',
    },
    {
      value: 'Baixo',
      label: 'Baixo',
    },
    {
      value: 'Medio',
      label: 'Médio',
    },
    {
      value: 'Alta',
      label: 'Alta',
    },
  ];
  
export default function CadastrarPacientes(){
    const [currency, setCurrency] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
      };
    return (
        <Box component="form"
            sx={{
                p:2,
                backgroundColor: '#fff',
                borderRadius: '5px',
                }}>
            <TextField
                fullWidth
                id="filled-textarea"
                label="Nome do Paciente"
                multiline
                variant="filled"
                sx={{
                        mb:2
                    }}/>
            <TextField
                fullWidth
                id="filled-textarea"
                label="Nome da Mãe"
                multiline
                variant="filled"
                sx={{
                    mb:2
                }}/>
            <TextField
                type="number"
                InputProps={{
                    inputProps: { 
                        max: 200, min: 1 
                    }
                }}
                id="filled-select-currency"
                label="Idade"
                variant="filled"
                sx={{
                    mr:2
                }}
            >
            </TextField>
            <TextField
                id="filled-select-currency"
                select
                label="Selecionar"
                value={currency}
                onChange={handleChange}
                helperText="Selecione a prioridade"
                variant="filled"
                sx={{
                    mr:2
                }}
                >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                name="Date"
                label="Data da Admissão"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                variant="filled"
                sx={{
                    mr:2
                }}
            />
            <TextField
                name="Date"
                label="Data de Nascimento"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                variant="filled"
            />
            <FormControl sx={{ width: "100%",}} component="fieldset" variant="standard">
                <FormLabel component="legend">Alergias</FormLabel>
                <FormGroup sx={{ width: "30%", display: "flex" }}>
                    <FormControlLabel 
                        control={
                            <Checkbox onChange={handleChange} name="Asma Brônquica" />
                        }
                        label="Asma Brônquica"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox onChange={handleChange} name="Dermatite Atópica" />
                        }
                        label="Dermatite Atópica"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox onChange={handleChange} name="Urticária" />
                        }
                        label="Urticária"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox onChange={handleChange} name="Conjutivite Alérgica" />
                        }
                        label="Conjutivite Alérgica"
                    />
                    <TextField
                        id="filled-textarea"
                        label="Outro"
                        multiline
                        variant="filled"
                        sx={{
                            mb:2
                        }}/>
                </FormGroup>
            </FormControl>
            <TextField
                fullWidth
                id="filled-textarea"
                label=" Observações"
                multiline
                variant="filled"
                rows={4}
                sx={{
                    mb:2
                }}/>
            <TextField
                fullWidth
                id="filled-textarea"
                label="Admissão"
                multiline
                variant="filled"
                rows={4}
                sx={{
                    mb:2
                }}/>
            <TextField
                fullWidth
                id="filled-textarea"
                label="APP"
                placeholder="APP(antecedentes pessoais patologicos) Ex: HAS, DM2, Hipotiroidismo, medicação psiquiatricas..."
                multiline
                variant="filled"
                rows={4}
                sx={{
                    mb:2
                }}/>
                <Button variant="contained" href = "http://localhost:3000/cadastrarPacientes/" >Cadastrar Paciente</Button>
        </Box>
    );
}