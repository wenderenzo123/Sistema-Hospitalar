import type { NextPage } from 'next'
import { Container, Grid, Link, Paper, Typography } from "@mui/material";
import Interned from "../pages/Home/Interned";
import Patients from "../pages/Home/Patients";
const Homelander: NextPage = () => {
  function Copyright(props: any) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://github.com/artiefellype/sistema-hospitalar"
        >
          Health
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* GRAFICOS DE PACIENTES */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  {/* LOCAL PARA GRAFICOS */}
                </Paper>
              </Grid>
              {/* Internacoes recentes */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Interned />
                </Paper>
              </Grid>
              {/* Prontuarios mais recentes */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Patients />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
  );
}

export default Homelander
