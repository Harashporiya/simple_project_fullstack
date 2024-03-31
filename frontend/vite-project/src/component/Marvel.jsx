import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';



function Dc() {
  const [data, setData] = useState();
  const [data1, setData1] = useState();


  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/marvel");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:5000/movies/marvel/add");
        setData1(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchdata();
  }, []);

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
      <Header />
      <div className='flex flex-wrap pt-2 justify-center '>

        {data && data.map((datas) => (
          <div id='card' className='rounded-lg shadow-2xl bg-white m-4 ' key={datas.id}>
            <img id='img' className='cover rounded-t-lg' src={datas.Image} alt='' />
            <div className='p-4'>
              <p className='font-bold text-xl'>{datas.Hero_Name}</p>
              <p className='text-gray-600'>{datas.Real_Name}</p>
              <p className='mt-2'><span className='font-bold'>Superpower:</span> {datas.Superpower}</p>
              <p className='mt-2'><span className='font-bold'>First Appearance:</span> {datas.First_Appearance}</p>
              <p className='mt-2'><span className='font-bold'>Costume Quirk:</span> {datas.Costume_Quirk}</p>
              <p className='mt-2'><span className='font-bold'>Catchphrase:</span> {datas.Catchphrase}</p>
              <p className='mt-2'><span className='font-bold'>Backstory:</span> {datas.Backstory}</p>
              <p className='mt-2'><span className='font-bold'>Most Useless Moment:</span> {datas.Most_Useless_Moment}</p>
            </div>
          </div>
        ))}


        {data1 && data1.map((datas1) => (
          <div id='card' key={datas1.id} className='rounded-lg shadow-2xl bg-white m-4 '>
            <img id='img' className='cover rounded-t-lg' src={datas1.Image} alt='' />
            <div className='p-4'>
              <p className='font-bold text-xl'>{datas1.Hero_Name}</p>
              <p className='text-gray-600'>{datas1.Real_Name}</p>

              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <p className='mt-2'><span className='font-bold'>Superpower:</span> {datas1.Superpower}</p>
                <p className='mt-2'><span className='font-bold'>First Appearance:</span> {datas1.First_Appearance}</p>
                <p className='mt-2'><span className='font-bold'>Costume Quirk:</span> {datas1.Costume_Quirk}</p>
                <p className='mt-2'><span className='font-bold'>Catchphrase:</span> {datas1.Catchphrase}</p>
                <p className='mt-2'><span className='font-bold'>Backstory:</span> {datas1.Backstory}</p>
                <p className='mt-2'><span className='font-bold'>Most Useless Moment:</span> {datas1.Most_Useless_Moment}</p>
              </div>
            </div>
          </div>
        ))}


        <div className='rounded-lg shadow-2xl bg-white m-4 p-40 h-96'>
          <button onClick={() => navigate("/addmarvelmovies")} className='bg-blue-600 text-2xl p-8 rounded-sm text-white '>+</button>
        </div>
      </div>
    </>
  );
}

export default Dc;
