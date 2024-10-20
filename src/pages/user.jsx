import React from 'react'
import Header from './Header'

export default function User({componentPrams,headerPrams}) {
  let {userData} = componentPrams;
  console.log(userData);

  function getLabInventory(lab){
    let labItems = [];
    for(let item in lab){
      console.log(item);
      labItems.push(item);
    }

    // let labInventory = labItems.map((item)=>{
    //   return(
    //     <ul>
    //       <li>{item} : {lab.item}</li>
    //     </ul>
    //   )
    // })

    return (
      <ul>
        {labItems.map((item)=>{
          return (
            <p>{item} : {lab[item]}</p>
          )
        })}
      </ul>
    )
  }

  return (
    <div>
        <Header headerPrams={headerPrams}/>
        <h1>hello {userData.uname} ..... Wellcome</h1>
        <h2>Here is your inventory</h2><br />

        <div>
          <h3>Branch : {userData.ubranch}</h3><br />
          <div>
            <h2>teachers : </h2><br />
            <ul>
              {userData.branchInventory.teachers.map((teacher)=>{
                return(
                  <li>{teacher}</li>
                )
              })}
            </ul>
          </div><br />

          <div>
            <h2>number of students </h2>
            <h3>{userData.branchInventory.students}</h3>
          </div><br />

          <div>
            <h2>labs in your branch</h2>
            <ul>
              {
                userData.branchInventory.labs.map((lab)=>{
                  return(
                    <div>
                      <h3> . {lab}</h3>
                      <h4>-- lab inventory --</h4>
                      {
                        getLabInventory(userData.branchInventory[lab])
                      }
                      <br />
                    </div>
                  )
                })
              }
            </ul>
          </div><br />
          

        </div>
    </div>
  )
}
