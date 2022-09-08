import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../../src/components/Title/Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Internacoes recentes</Title>
      <Typography component="p" variant="h4">
        3.000
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        em 20 Ago, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver balanco
        </Link>
      </div>
    </React.Fragment>
  );
}