import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from 'axios';
import Cookies from 'js-cookie';

const options = ['DC Universe', 'Marvel Universe'];

function Header() {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userData, setUserData] = useState({});

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove("authorization");
    setUserData({});
    navigate("/"); 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("authorization");
        const response = await axios.get("http://localhost:5000/user/data", {
          headers: { authorization: token }
        });
        setUserData(response.data);
      } catch (error) {
        navigate('/login');
        console.log("Error", error);
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <>
      <div id='navbar' className='p-2 flex justify-evenly  w-full'>
        <div>
          <p className='text-white font-semibold text-3xl p-2'>Hero Hollywood</p>
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
      
        <div className=" text-white ">
          <div className='text-white'>
            <Link to={"/"}>
              <img src="logo.svg" className="h-6" alt="" />
            </Link>

            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <div className="flex items-center w-40">
                  <AccountCircle />
                  <span className="mx-2 font-bold">{userData.username || 'Login'}</span>
                </div>
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {userData.username ? (
                  <MenuItem sx={{ color: 'blue', fontSize :'20px' }} onClick={handleLogout}>Logout</MenuItem>
                ) : (
                  <Link to={"/login"}>
                    <MenuItem sx={{ color: 'blue', fontSize :'20px' }}>Login</MenuItem>
                  </Link>
                )}
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
