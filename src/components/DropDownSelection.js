import React, { Component } from "react";
import { Grid, Dropdown } from "semantic-ui-react";

const DropDownSelection = () => (
  <Grid container centered columns={2} style={{ margin: 14 }}>
    <Dropdown
      placeholder="Select User"
      fluid
      selection
      options={[
        {
          text: "Jenny Hess",
          value: "Jenny Hess",
          image: { avatar: true, src: require("../images/avatars/daniel.jpg") }
        }
      ]}
    />
  </Grid>
);

export default DropDownSelection;
