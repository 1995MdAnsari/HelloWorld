import  React,{useState} from 'react'
import './App.css';

const  App = () =>{
  let [names, setNames] = useState(-1);
  const [data, setData] = useState([
    {
      id:1,
      name:'Anna'
    },
    {
      id:2,
      name:'Vivek'
    }
  ]);
  // const data = [
  //   {
  //     id:1,
  //     name:'Anna'
  //   },
  //   {
  //     id:2,
  //     name:'Vivek'
  //   }
  // ] 

  const handleChange = (e) =>{
    let val = e.target.value;

    let res = '';
    for(let i=0; i<val.length;i++)
    {
      res += val[i].name;
    }
    console.log(res)
    setData(res);

  }
  console.log(data)
  return (
    <div className="App">
     {data.map((e,index)=>
     
      
        names === index ? (
          <input placeholder={e.name} 
          name="name"
          // value={e.name}
          // onChange={handleChange}
          />
        )
        :
        (
        <div>
          <p>{e.name}</p>
          <button 
          onClick={() =>setNames(
            index
          )}>edit</button>
        </div>
        )
      
     )}
    </div>
  );
}

export default App;
