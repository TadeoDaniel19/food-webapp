import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const Home = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >

      <Grid item xs={3}>
        <Typography variant="h1" component="h2" gutterBottom>
          Bienvenido
      </Typography>
      </Grid>

    </Grid>

  )
}

export default Home