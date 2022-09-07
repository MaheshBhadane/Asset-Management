import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
   return (
      <Grid item xs={2} sx={{ height: "90vh", bgcolor: "lightgray" }}>
         <Box display="flex" flexDirection="column" justifyContent="center">
            <Button variant="outlined" size="large" component={Link} to="/admin/dash">
               Dashboard
            </Button>
            <Button variant="outlined" size="large" component={Link} to="/admin/emp">
               Employee
            </Button>
            <Button variant="outlined" size="large" component={Link} to="/admin/asset">
               Assets
            </Button>
            <Button variant="outlined" size="large" component={Link} to="/admin/services">
               Services
            </Button>
         </Box>
      </Grid>
   );
}
