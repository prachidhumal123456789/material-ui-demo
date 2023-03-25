import React from "react";
import {  Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import useStyles  from "./styles";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Slider from '@mui/material/Slider';





const cards =[1, 2, 3, 4, 5, 6, 7, 8, 9]
const theme = createTheme(
  {
    palette: 
    {
      background:
       {
        default: '#f5f5f5',
      },
    },
  });



  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

const App=()=>{
    const classes= useStyles();
    return(
        <>
        <CssBaseline/>
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera className={classes.icon}/>
                <Typography variant="h6">
                    Photo Album
                </Typography>
           </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm">
                 <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Photo Album
                 </Typography>
                 <Typography variant="h5" align="center" color="textSecondary" paragraph>
                   Hello Every Body This is a Photo Album and I want to make this sentence as long as possible So I can see It.And Also I want to check how text is Alligned
                 </Typography>
                 <div className={classes.button}>
                    <Grid container spacing = {2}  justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                               See my photos 
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                               Secondary Action
                            </Button>
                        </Grid>
                    </Grid>
                    </div>
                </Container>
                <div align="center">
                <Box width={300}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
                </div>
                <div align='center'>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
    <div align='center'>
    <Box component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    <div align="center">
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </div>
    </div>
                <div style={{ height: 400, width: '100%' }}>
                <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
                </div>
                
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card)=>(
                    <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image Title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5">
                              Heading
                            </Typography>
                            <Typography>
                              This is an media card you can use this section to describe the content.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>    
                            
                        </CardActions>

                        
                    </Card>
                </Grid>
                ))}
                    

                </Grid>

            </Container>
        </main>
        <footer className={classes.footer}>
         <Typography variant="h6" align="center" gutterBottom>
           Footer
         </Typography>
         <Typography variant="subtitle1" align="center" color="textSecondary">
           Something Here to give Footer a purpose
         </Typography>
        </footer>
        </>
    );
}
  
export default App;