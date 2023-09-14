import './App.css';
import Header from './Components/Header';
import Actors from './Components/Actors';
import SelectActors from './Components/SelectActors';
import { useState } from 'react';

function App() {
  let mainStyle = {
    fontFamily: "'Montserrat', sans-serif",
    background: "url('https://i.ibb.co/JB1y0X5/4690.jpg'), linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
    backgroundBlendMode: "overlay", // Corrected property name
    backgroundRepeat: "no-repeat", // Corrected property name
    backgroundSize: "cover", // Corrected property name
    backgroundAttachment: "fixed", // Corrected property name
  };

  let [hireActors, setHireActors] = useState([]);
  let [totalCost, setTotalCost] = useState(0);
  let [remainingCost, setRemainingCost] = useState(40000);

  let handleHire = (actors) => {
    let ifActorExists = hireActors.find(item => item.id === actors.id)
    let cost = actors.salary;

    if (ifActorExists) {
      return alert("Cast Already Exists");
    }
    else {
      hireActors.forEach((item) => {
        cost = cost + item.salary;
      });
      let remaining = 40000 - cost;
      if (cost > 40000) {
        return alert("Not Enough Budget")
      }
      else {
        setTotalCost(cost);
        setRemainingCost(remaining);
        let newHiredActors = [...hireActors, actors];
        setHireActors(newHiredActors);
      }
    }
  }

  return (
    <>
      <Header></Header>
      <div style={mainStyle}>
        <div className='w-[85%] mx-auto flex flex-col-reverse md:flex-row'>
          <Actors handleHire={handleHire}></Actors>
          <SelectActors remainingCost={remainingCost} totalCost={totalCost} hireActors={hireActors}></SelectActors>
        </div>
      </div>
    </>
  );
}

export default App;
