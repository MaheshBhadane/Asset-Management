import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import SideBar from "../assets/SideBar";

export default function Services() {
  return (
    <Grid container>
      <SideBar />
      <Grid item xs={10}>
        <Typography variant="h4" marginLeft={60} marginRight={50}>
          Service Update
        </Typography>
        <Box>
          <Typography textAlign="center" variant="h6">
            Ticket ID:{"124587"}
          </Typography>
          <Typography textAlign="center" variant="h6">
            Employee ID:{"21TCS260"}
          </Typography>
          <Typography textAlign="center" variant="h6">
            Type:{"Hardware/software"}
          </Typography>
          <Typography textAlign="center" variant="h6">
            Current Status:{"Allocated"}
          </Typography>
          <Typography textAlign="center" variant="h6">
            Add Note:{"Type here.."}
          </Typography>
          <Typography textAlign="center" variant="h6">
            Update Status:{"In-Process"}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
