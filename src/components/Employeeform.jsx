// import React from 'react'
// import TextField from '@mui/material/TextField';

// const Employeeform = () => {
//   return (
//     <div>
//     <h1>Employee Form</h1>
//       <TextField label="Name" fullWidth margin="normal" />
//       <TextField label="Designation" fullWidth margin="normal" />
//       <TextField label="Location" fullWidth margin="normal" />
//       <TextField label="Salary" fullWidth margin="normal" />
//       {/* Add submit button and form functionality here */}

//     </div>
//   )
// }

// export default Employeeform  



import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const EmployeeForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <Container maxWidth="sm">
      <div>
        <h1>Employee Form</h1>
        <form onSubmit={handleSubmit}>
          <TextField label="Name"  variant='outlined' fullWidth margin="normal" sx={{ width: '300px' }} />
          <TextField label="Designation" variant='outlined' fullWidth margin="normal" sx={{ width: '300px' }} />
          <TextField label="Location" variant='outlined' fullWidth margin="normal" sx={{ width: '300px' }} />
          <TextField label="Salary" variant='outlined' fullWidth margin="normal" sx={{ width: '300px' }} />
           <br /> <br />
           <Button type="submit" variant="contained" color='success' sx={{ marginTop: '16px' }}>
            Submit
          </Button> 
        </form>
      </div>
    </Container>
  );
};

export default EmployeeForm;
