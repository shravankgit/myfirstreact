import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  Alert,
  Box
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Employee = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const empDetails = { name, role, email, dept };

  const empHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/emp/add-emp", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(empDetails)
      });

      if (response.ok) {
        setStatusMessage("Employee submitted successfully!");
        setIsError(false);
        setName(""); setRole(""); setEmail(""); setDept("");
      } else {
        setStatusMessage("Error: Unable to submit employee.");
        setIsError(true);
      }
    } catch (error) {
      setStatusMessage("Network error: Please try again later.");
      setIsError(true);
    }
  };

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <PersonAddIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            Employee Registration
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Form Section */}
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <form onSubmit={empHandler}>
          <TextField
            fullWidth
            label="Employee Name"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Employee Role"
            margin="normal"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <TextField
            fullWidth
            label="Employee Email"
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Employee Department"
            margin="normal"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" type="submit" fullWidth>
              Submit
            </Button>
          </Box>
        </form>

        {/* Success/Error Alert */}
        {statusMessage && (
          <Alert severity={isError ? "error" : "success"} sx={{ mt: 3 }}>
            {statusMessage}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default Employee;
