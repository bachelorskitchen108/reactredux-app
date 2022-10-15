import React from 'react'

const Header = () => {
  
  // function main() {
  //   return new Promise( resolve => {
  //     console.log(3);
  //     resolve(4);
  //     console.log(5);
  //   });
  // }
  
  // async function f(){
  //     console.log(2);
  //     let r = await main();
  //     console.log(r);
  // }
  
  // console.log(1);
  // f();
  // console.log(6);

  function newmain() {
    console.log("inside newMain console before return:10");
    return "returning newMain";
}

async function foo(){
    console.log("inside foo before :11");
    let roo = await newmain();
    console.log("inside foo",roo);
}

console.log("Outside before foo invoke : 12");
console.log('Involing outside:', foo());
console.log("Outside After foo invoke : 13");

  return (
    <div className="ui fixed menu">
       <div className="ui container center">
            <h2>JayShop</h2>
       </div>
    </div>
  )
}

export default Header
