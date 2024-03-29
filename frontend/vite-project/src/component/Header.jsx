import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['DC Universe', 'Marvel Universe'];

function Header() {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <div className='p-9'>
        <p className='text-white font-semibold text-3xl p-2'>Hero Hollywood</p>
        <div>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="All"
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'white',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'white',
                  },
                  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'blue',
                  },
                  '&:hover .MuiInputLabel-root': {
                    color: 'blue',
                  },
                }}
              />
            )}
            renderOption={(props, option) => (
              <>
                <Button
                  {...props}
                  onClick={() => navigate("/dc")}
                  sx={{ mr: 1, mb: 1 }}
                  variant="contained"
                  color="primary"
                >
                  {option} (DC)
                </Button>
                <Button
                  {...props}
                  onClick={() => navigate("/marvel")}
                  sx={{ mr: 1, mb: 1 }}
                  variant="contained"
                  color="secondary"
                >
                  {option} (Marvel)
                </Button>
              </>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
