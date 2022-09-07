import React from 'react'
import { Button, Box,Grid,Typography} from '@material-ui/core'
import './Home.css'

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              {' '}
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>              
            </Box>
            <Button
              variant="outlined" className='botao'          
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://files.passeidireto.com/2e0c40eb-394d-4dc0-848e-8d7d7cc0b3a7/2e0c40eb-394d-4dc0-848e-8d7d7cc0b3a7.jpeg"
            alt=""
            style={{ width: '100%', height: '100%' }}
          ></img>
        </Grid>
        <Grid xs={12} style={{ backgroundColor: 'white' }}></Grid>
      </Grid>
    </>
  )
}

export default Home
