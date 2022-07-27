import React,{useState,useEffect} from 'react';
import './addImage.css';



const ToggleSwitch = () => {
  
    const [isToggled, setIsToggle] = useState(false)
    const handleToggle = () =>{
        setIsToggle(true);
    }

     useEffect(() => {
        return () => {
            if(isToggled===true)
                console.log(setIsToggle)
        };
    })
    return (
    <div className='toggle'>
      <h4>Toggle Switch</h4>

      <label className='switch'>
        <input type="checkbox" 
        onChange={handleToggle}/>
        <span className='slider' />
      </label>
    </div>
  )
}

export default ToggleSwitch
