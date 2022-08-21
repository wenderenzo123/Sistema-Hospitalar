import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Gerar prontuarios
function createChart(
  id: number,
  date: string,
  name: string,
  symptoms: string,
  treatmentMethod: string,
  contact: string,
) {
  return { id, date, name, symptoms, treatmentMethod, contact };
}

const rows = [
  createChart(
    0,
    '16 Mar, 2019',
    'Miltin do Grau',
    'Cancer de pulmao no cerebro',
    'Medicamento',
    '0000-0000',
  ),
  createChart(
    1,
    '16 Mar, 2019',
    'Irineu Vasconcelos',
    'Queimadura de 2 grau',
    'Tilapia',
    '0000-0000',
  ),
  createChart(
    2,
    '16 Mar, 2019', 
    'Power guido', 
    'A quinta serie que habita em mim', 
    'Sauda a quinta serie que habita em voce', 
    '0000-0000',
    ),
  createChart(
    3,
    '16 Mar, 2019',
    'Maria Farofeira',
    'Zumbido no ouvido',
    'Medicamento',
    '0000-0000',
  ),
  createChart(
    4,
    '15 Mar, 2019',
    'Wendercleitonilson meireles',
    'Rins completamente danificados',
    'Venda de orgaos',
    '0000-0000',
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Prontuarios recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Sintomas</TableCell>
            <TableCell>Metodo de tratamento</TableCell>
            <TableCell align="right">Contato</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.symptoms}</TableCell>
              <TableCell>{row.treatmentMethod}</TableCell>
              <TableCell align="right">{`(84) ${row.contact}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Visualizar mais pacientes
      </Link>
    </React.Fragment>
  );
}