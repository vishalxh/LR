import React, { useRef, useState } from 'react'
import pic from '../../../assets/Untitled design.png'
import bg from '../../../assets/yesbg.png'
import bg1 from '../../../assets/nobg.png'
import './../../../App.css'
const Third = () => {
  const noButton = useRef(null)
  const lines=["Would you like to be my Mikasa? 👉👈","Btw made the 'no' button bigger to avoid trouble for you 😓","Specs number increased or what?! I thought i made the button big enough 😢","High on something? why clicking the button you don't want to 😓","You sure?!!🥹"];
  const [idx,setIdx]=useState(0); 
  const [yes,setYes]=useState(false)
  const [no,setNo]=useState(false)
  const [noScale, setNoScale] = useState(2.2);
  
  const pop = () => {
    setYes(!yes)
  }
  const popno = () => {
    setNo(!no)
  }
  const ques = () => {
    if(idx>=lines.length-1){
        setYes(!yes)
        return;
    }
    
    setIdx((prevIdx) => (prevIdx + 1));
    setNoScale(prevScale => Math.max(prevScale - 0.3, 1)); 
  };
  return (
    <div className='third' style={{backgroundImage: `url(${pic})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover"
    }}>
        <div className="title">{lines[idx]}</div>
        <div><button onClick={ques} ref={noButton} className='yes'><span>Yes</span></button>
        <button className='no' onClick={popno}
        style={{ transform: `scale(${noScale})`, transition: "transform 0.2s ease" }}
        ><span>No</span></button>
        </div>
        {yes && (<div className='last'>
      <div className="overlay"></div>
      <div className="last1">
        <img src={bg} alt="" />
        <button className='cls' onClick={pop}>Close</button>
      </div>
    </div>)}
    {no && (<div className='last'>
      <div className="overlay"></div>
      <div className="last1">
        <img src={bg1} alt="" />
        <button className='cls' onClick={popno}>Close</button>
      </div>
    </div>)}
    </div>
  )
}

export default Third