import React from 'react'
import { Card, Grid, Typography, Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { Edit } from '@material-ui/icons';
import style from './style'

const MovieResult = ({ name, picture, history, id, description }) => {
  const classes = style();
  const handleSeeMovieClick = () => {
    history.push(`/editFood/${id}`)
  }

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={picture} alt={name} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titlesContainer}>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="body2">{description}</Typography>
          <Button onClick={handleSeeMovieClick} startIcon={<Edit />}>Editar</Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default withRouter(MovieResult)