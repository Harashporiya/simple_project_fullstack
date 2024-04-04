import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";

function Dc() {
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  const [loader, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dc");
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
       
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } 
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:5000/movies/dc/add");
        setData1(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <Header />
      {loader ? <Loader/> : null} 
     
    
        <div className="flex flex-wrap pt-28 justify-center ">
          {data &&
            data.map((datas1) => (
              <div
                id="card"
                className="rounded-lg shadow-2xl bg-white m-4"
                key={datas1.id}
              >
                <img
                  id="img"
                  className="cover rounded-t-lg"
                  src={datas1.Image}
                  alt=""
                />
                <div className="p-4">
                  <p className="font-bold text-xl">{datas1.Hero_Name}</p>
               
                  <p className="text-gray-600">{datas1.Real_Name}</p>
                  <p className="mt-2">
                    <span className="font-bold">Superpower:</span>{" "}
                    {datas1.Superpower}
                  </p>
                  <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                    <p className="mt-2">
                      <span className="font-bold">First Appearance:</span>{" "}
                      {datas1.First_Appearance}
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Costume Quirk:</span>{" "}
                      {datas1.Costume_Quirk}
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Catchphrase:</span>{" "}
                      {datas1.Catchphrase}
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Backstory:</span>{" "}
                      {datas1.Backstory}
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Most Useless Moment:</span>{" "}
                      {datas1.Most_Useless_Moment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          {data1 &&
            data1.map((datas1) => (
              <div
                id="card"
                key={datas1.id}
                className="rounded-lg shadow-2xl bg-white m-4 "
              >
                <img
                  id="img"
                  className="cover rounded-t-lg"
                  src={datas1.Image}
                  alt=""
                />
                <div className="p-4">
                  <p className="font-bold text-xl">{datas1.Hero_Name}</p>
                  <p className="text-gray-600">{datas1.Real_Name}</p>
                  <p className="mt-2">
                    <span className="font-bold">Superpower:</span>{" "}
                    {datas1.Superpower}
                  </p>
                  <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                    <p className="mt-2">
                      <span className="font-bold">First Appearance:</span>{" "}
                      {datas1.First_Appearance}
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Costume Quirk:</span>{" "}
                      {datas1.Costume_Quirk}
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Catchphrase:</span>{" "}
                      {datas1.Catchphrase}
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Backstory:</span>{" "}
                      {datas1.Backstory}
                    </p>
                    <p className="mt-2">
                      <span className="font-bold">Most Useless Moment:</span>{" "}
                      {datas1.Most_Useless_Moment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          <div className="rounded-lg shadow-2xl bg-white m-4 p-40 h-96">
            <button
              onClick={() => navigate("/addDcMovies")}
              className="bg-blue-600 text-2xl p-8 rounded-sm text-white"
            >
              +
            </button>
          </div>
        </div>
      
    </>
  );
}

export default Dc;
