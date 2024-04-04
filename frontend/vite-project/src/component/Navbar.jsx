import React, { useState, useEffect } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import axios from 'axios';
import Cookies from 'js-cookie';



function Navbar() {
 
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
          <p className='text-white font-semibold text-3xl p-6'>Hero Hollywood</p>
         
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

export default Navbar;
