import React, { useState } from 'react'
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core'
import { Fastfood } from '@material-ui/icons';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import styles from './style'

export const Finder = () => {
  const [searchText, setSearchText] = useState('')
  const classes = styles()
  let history = useHistory();
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleCleanTextClick = () => {
    setSearchText('')
  }

  const handleSearchTextClick = () => {
    history.push(`/results?movieName=${searchText}`)
  }

  return (
    <Router>
      <Route>
        <Container className={classes.container}>
          <Card className={classes.cardContainer}>
            <Grid container className={classes.titleGridContainer}>
              <Grid>
                <Typography className={classes.title}> Busqueda por palabra </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Fastfood className={classes.movieIcon}  />
            </Grid>
            <TextField
              value={searchText}
              placeholder='Buscar'
              onChange={handleSearchTextChange}
              className={classes.textFieldSearch}
            />
            <Grid container className={classes.buttonsContainer} style={{ paddingTop: '15px', display: 'flex', justifyContent: 'center' }}>
              <Grid item style={{ paddingRight: '10px' }}>
                <Button  variant='contained' disabled={searchText === ''} onClick={handleCleanTextClick}> Limpiar</Button>
              </Grid>

              <Button variant='contained' color='primary' disabled={searchText === ''} onClick={handleSearchTextClick}>Buscar</Button>
            </Grid>
          </Card>
        </Container>
      </Route>
    </Router>
  )
}
