import React from "react";
import {
  Typography,
  Grid,
  Select,
  FormControl,
  InputLabel,
  FormLabel,
} from "@material-ui/core";

export const Configurator = () => {
  return (
    <>
      <Typography component="h1" variant="h5">
        Конфигуратор заказа
      </Typography>
      <form method="post">
        <Grid container spacing={1} justify="space-between">
          <Grid item xs={12}>
            <FormControl>
              <FormLabel>Label</FormLabel>
              <InputLabel disabled>Age</InputLabel>
              <Select
                native
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="age-native-simple">Age</InputLabel>
              <Select
                native
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
