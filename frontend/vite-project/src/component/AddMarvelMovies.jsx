import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './index.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
function AddMarvelMovies() {
    const [Hero_Name, setHeroname] = useState('');
    const [Real_Name, setRealname] = useState('');
    const [Superpower, setSuperpower] = useState('');
    const [Image, setImage] = useState('');
    const [First_Appearance,setFirst_Appearance] = useState('');
    const [Costume_Quirk, setCostume_Quirk] = useState('');
    const [Catchphrase, setCatchphrase] = useState('')
    const [Backstory, setBackstory] = useState('');
    const [Most_Useless_Moment, setMost_Useless_Moment] = useState('');
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/movies/add/marvel", {
        Hero_Name,
        Real_Name,
        Superpower,
        Image,
        First_Appearance,
        Costume_Quirk,
        Backstory,
        Catchphrase,
        Most_Useless_Moment,
        });
        setTimeout(() => {
            toast.success("Movie added successfully!", {
                position: "top-right"
              });
          navigate('/marvel')
        }, 5000);
        toast.success("Movie added successfully!", {
            position: "top-right"
          });
        setHeroname("");
        setRealname("");
        setSuperpower("");
        setImage("")
        setFirst_Appearance("")
        setCostume_Quirk("")
        setCatchphrase("")
        setMost_Useless_Moment("")
      
        setBackstory("")
      
        
       
        console.log(response.data);
      } catch (error) {
       
      
        console.error("fetching error", error);
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = Cookies.get("authorization");
          // console.log(token)
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
        <div className=" mx-auto max-w-2xl rounded-lg shadow-2xl bg-white m-4 p-4 ">
        <p className='text-black font-semibold'>Marvel Hero Add</p>
          <form onSubmit={handleSubmit} className="space-y-6 pt-10">
            <div>
              <label htmlFor='name' className="block text-sm font-medium text-gray-700">Hero Name</label>
              <input type='text' value={Hero_Name} onChange={(e) => setHeroname(e.target.value)} placeholder='Enter the hero name' className=" block w-full shadow-sm sm:text-sm border-gray-300 p-3" required/>
            </div>
            <div>
              <label htmlFor='name' className="block text-sm font-medium text-gray-700">Real Name</label>
              <input type='text' value={Real_Name} onChange={(e) => setRealname(e.target.value)} placeholder='Enter the real name' className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 p-3" required/>
            </div>
            <div>
              <label htmlFor='name' className="block text-sm font-medium text-gray-700">Superpower</label>
              <input type='text' value={Superpower} onChange={(e) => setSuperpower(e.target.value)} placeholder='Enter the superpower' className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 p-3" required/>
            </div>
            <div>
              <label htmlFor='name' className="block text-sm font-medium text-gray-700">Image Url</label>
              <input type='url' value={Image} onChange={(e) => setImage(e.target.value)} placeholder='Enter the url' className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 p-3" />
            </div>
            <div>
              <label htmlFor='name' className="block text-sm font-medium text-gray-700">First Appearance</label>
              <input type='text' value={First_Appearance} onChange={(e) => setFirst_Appearance(e.target.value)} placeholder='Enter the first appearance' className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 p-3" />
            </div>
            <div>
              <label htmlFor='name' className="block text-sm font-medium text-gray-700">Costume Quirk</label>
              <input type='text' value={Costume_Quirk} onChange={(e) => setCostume_Quirk(e.target.value)} placeholder='Enter the qostume quirk' className=" block w-full shadow-sm sm:text-sm border-gray-300 p-3" />
            </div>
            <div>
              <label htmlFor='name' className="block text-sm font-medium text-gray-700">Catchphrase</label>
              <input type='text' value={Catchphrase} onChange={(e) => setCatchphrase(e.target.value)} placeholder='Enter the hero catchphrase' className=" block w-full shadow-sm sm:text-sm border-gray-300 p-3" />
            </div>
            <div>
              <label htmlFor='name' className="block text-sm font-medium text-gray-700">Backstory</label>
              <input type='text' value={Backstory} onChange={(e) => setBackstory(e.target.value)} placeholder='Enter the hero Backstory' className=" block w-full shadow-sm sm:text-sm border-gray-300 p-3" />
            </div>
            <div>
              <label htmlFor='name' className="block text-sm font-medium text-gray-700">Most Useless Moment</label>
              <input type='text' value={Most_Useless_Moment} onChange={(e) => setMost_Useless_Moment(e.target.value)} placeholder='Enter the hero most useless moment' className=" block w-full shadow-sm sm:text-sm border-gray-300 p-3" />
            </div>
  
            <button type='submit' className=" py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 ">Submit</button>
          </form>
        
          <ToastContainer />
        </div>
    
      </>
    );
}

export default AddMarvelMovies
