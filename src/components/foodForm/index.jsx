import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import useStyles from './styles';
import RenderTextField from '../renderTextField';


const FoodForm = (props) => {
  const { onSubmit, updateData } = props;
  const classes = useStyles();
  const { handleSubmit, formState: { errors, isValid, isDirty }, control, reset } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    reset({
      name: updateData?.name || null,
      description: updateData?.description || null,
      picture: updateData?.picture || null,
    })
  }, [reset, updateData])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} style={{ paddingTop: '25px', paddingLeft: '25px' }}>
        <Grid item xs={5}>
          <Typography className={classes.labelSize}>
            Nombre:
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Controller
            name="name"
            defaultValue={updateData ? updateData?.name : null }
            control={control}
            rules={{
              required: true,
            }}
            render={
              ({ field }) => (
                <RenderTextField
                  field={field}
                  maxLength={100}
                  className={classes.formTextfield}
                  variant="outlined"
                  error={Boolean(errors.name)}
                  helperText="Campo requerido." />
              )
            } />
        </Grid>
        <Grid item xs={5}>
          <Typography className={classes.labelSize}>
            Descripcion:
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Controller
            name="description"
            defaultValue={updateData?.description || null }
            control={control}
            rules={{
              required: true,
            }}
            render={
              ({ field }) => (
                <RenderTextField
                  field={field}
                  maxLength={100}
                  className={classes.formTextfield}
                  variant="outlined"
                  error={Boolean(errors.name)}
                  helperText="Campo requerido." />
              )
            } />
        </Grid>
        <Grid item xs={5}>
          <Typography className={classes.labelSize}>
            URL de la imagen:
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Controller
            name="picture"
            defaultValue={updateData?.picture || null }
            control={control}
            rules={{
              required: true,
            }}
            render={
              ({ field }) => (
                <RenderTextField
                  field={field}
                  maxLength={100}
                  className={classes.formTextfield}
                  variant="outlined"
                  error={Boolean(errors.name)}
                  helperText="Campo requerido." />
              )
            } />
        </Grid>
        <Grid item xs={6} align="center">
          <Button
            size="small"
            variant="contained"
            type="submit"
            disabled={!isValid || !isDirty} >
              Guardar
          </Button >
        </Grid>
      </Grid>
    </form>
  );
};

export default FoodForm;
