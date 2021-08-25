
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const App = () => {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    const resp = await fetch("https://reqres.in/api/users?page=2");
    const actualdata = await resp.json();
    setdata(actualdata.data);
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="text-center">Employee Details</h1>
        <div className="container">
              		<div className=" row ">
       
            {data.map((item, i) => {
              return (
              	
              			<div key={i} className="col-md-4 col-sm-12 col-12">
              				<div className="card text-center">
              					<img src={item.avatar} alt="img" />
              					<p>Emp-id:-{item.id}</p>
              					<p>First name:-{item.first_name}</p>
              					<p>Last name:-{item.last_name}</p>
              					<p>Email-id:-{item.email}</p>
              				</div>
              			</div>
              		
   
              );
            })}
            </div>
              	
              	</div>
       
      </div>
    </>
  );
};
export default App;
