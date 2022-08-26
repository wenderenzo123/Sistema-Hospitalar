import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import QrCodeRoundedIcon from '@mui/icons-material/QrCodeRounded';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Title from '../../components/Title/Title';
function createData(
    id: number,
    name: string,
    years: number,
    date: string,
    status: string
) {
    return { id, name, years, date, status };
}

const pacientes = [
    createData(1,'Frozen yoghurt', 159, "27/09/2002", "Ativo"),
    createData(2,'Ice cream sandwich', 237,"27/09/2002", "Desativado"),
    createData(3,'Eclair', 262, "27/09/2002", "Ativo"),
    createData(4,'Cupcake', 305, "27/09/2002", "Desativado"),
    createData(5,'Gingerbread', 356, "27/09/2002", "Desativado")
];
export default function Pacientes() {
    return (
        <TableContainer component={Paper} sx={{
            
            height: '100%',
            // bgcolor: '#e0e0e0'
            }}>
             <Box
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                m: 1,
                p: 1
                }}>
            <Title>Prontuarios recentes</Title>
            <Button variant="contained">Cadastrar Paciente</Button>
            </Box>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Nome</TableCell>
                        <TableCell align="right">Data de entrada</TableCell>
                        <TableCell align="right">Idade</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pacientes.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.years}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">
                                <IconButton edge="end" aria-label="delete">
                                    <QrCodeRoundedIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <EditRoundedIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
