import React, { useState } from "react";

import { Grid, TextField, Button, Paper } from "@mui/material";

const SayHiForm = () => {
  const paddingBottom = 2;
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        sx={{ pt: paddingBottom }}
        justifyContent="center"
        component={Paper}
      >
        <Grid xs={10} item pb={paddingBottom}>
          <TextField
            placeholder="Name"
            label="Name"
            variant="outlined"
            fullWidth
            required
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={10} pb={paddingBottom}>
          <TextField
            type="email"
            placeholder="Enter email"
            label="Email"
            variant="outlined"
            fullWidth
            required
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={10} pb={paddingBottom}>
          <TextField
            type="text"
            placeholder="Enter phone number"
            label="Phone"
            variant="outlined"
            fullWidth
            required
            name="phone"
            value={formValues.phone}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={10} pb={paddingBottom}>
          <TextField
            label="Message"
            multiline
            rows={4}
            placeholder="Type your message here"
            variant="outlined"
            fullWidth
            required
            name="message"
            value={formValues.message}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={10} pb={paddingBottom}>
          <Button type="submit" variant="contained" color="primary" p={2}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default SayHiForm;
