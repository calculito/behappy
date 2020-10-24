<Grid container className={classes.root} spacing={2}>
  <Grid item xs={12}>
    <Grid container justify="center" spacing={spacing}>
      {[0, 1, 2].map((value) => (
        <Grid key={value} item>
          <Paper className={classes.paper}>test</Paper>
        </Grid>
      ))}
    </Grid>
    <Grid container justify="center" spacing={spacing}>
      {[0, 1, 2].map((value) => (
        <Grid key={value} item>
          <Paper className={classes.paper} />
        </Grid>
      ))}
    </Grid>
  </Grid>
</Grid>;
