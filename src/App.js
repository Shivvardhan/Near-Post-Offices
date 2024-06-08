import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPinFetch } from "./pinSlice";
import { Button, Container, TextField, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

function App() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [pincode, setPincode] = useState("");
  const pins = useSelector((state) => state.pin.pin);
  const dispatch = useDispatch();
  const fetchAPI = () => {
    dispatch(getPinFetch(pincode));
  };

  console.log(pins);

  const postOffices = pins[0]?.PostOffice || [];

  console.log(postOffices);

  return (
    <div className="App">
      <Container align="center">
        <br />
        <br />
        <br />
        <Grid>
          <TextField
            id="outlined-basic"
            label="Pincode"
            size="small"
            margin="normal"
            variant="outlined"
            onChange={(e) => setPincode(e.target.value)}
          />
        </Grid>
        <Grid>
          <Button variant="contained" onClick={fetchAPI}>
            Fetch
          </Button>
        </Grid>
        <br />
        <br />
        <Grid item xs={8}>
          <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
            <InputLabel id="demo-select-small-label">Post Offices</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {postOffices.map((pin) => (
                <MenuItem key={pin.index} value={pin.Name}>
                  {pin.Name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
