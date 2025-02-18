import React,{useRef,useState,useEffect} from 'react'
import background from '../../../assets/background.png'
import './../../../App.css'
import pic1 from '../../../assets/Untitled_design__1_-removebg-preview.png'
import pic2 from '../../../assets/Untitled_design__2_-removebg-preview.png'
import pic3 from '../../../assets/hang.png'
import pic4 from '../../../assets/Untitled_design__3_.png_Untitled_design.png_Untitled_design__1_.png_Untitled_design__2_.png-removebg-preview.png'
import pic5 from '../../../assets/Screenshot_2025-02-15_at_11.25.42_PM-removebg-preview.png'
import pic6 from '../../../assets/80_Sunflower_Junk_Journal_Pages__Free_Vintage_Printables_-removebg-preview-removebg-preview.png'
import pic7 from '../../../assets/envelop.png'
import pic8 from '../../../assets/disc-removebg-preview.png'
import aud from '../../../assets/audio.mp3'
import First from '../First/firstpage'

const firstpage = () => {

    const vwToPx = (vw) => (window.innerWidth * vw) / 100;

    const [positions, setPositions] = useState({
        1: { x: vwToPx(48.104), y: vwToPx(11.177) },
        2: { x: vwToPx(12.419), y: vwToPx(16.396) },
        3: { x: vwToPx(32), y: vwToPx(-11) },
        4: { x: vwToPx(34.75), y: vwToPx(19.135) },
        5: { x: vwToPx(25.7), y: vwToPx(9.2) },
      });

      const [modal,setModal]=useState(false)  
      const [play,setPlay]= useState(false);
      const [isDragging, setIsDragging] = useState(false);
      const [activeImage, setActiveImage] = useState(null);
      const [offset, setOffset] = useState({ x: 0, y: 0 });
      
      
      // Handle mouse down (Start dragging)
      const handleMouseDown = (e, id) => {
        e.preventDefault();
        setIsDragging(true);
        setActiveImage(id);
        setOffset({
          x: e.clientX - positions[id].x,
          y: e.clientY - positions[id].y,
        });
    
      };
    
      // Handle mouse move (Dragging)
      const handleMouseMove = (e) => {
        if (!isDragging || activeImage === null) return;
    
        const newX = e.clientX - offset.x;
        const newY = e.clientY - offset.y;
        setPositions((prevPositions) => ({
          ...prevPositions,
          [activeImage]: { x: newX, y: newY },
        }));
      };
    
      // Handle mouse up (Stop dragging)
      const handleMouseUp = () => {
        setIsDragging(false);
        setActiveImage(null);
        
      };

     const images=[
        {
            id:1,
            src:pic1
        },
        {
            id:2,
            src:pic2
        },
        {
            id:3,
            src:pic3
        },
        {
            id:4,
            src:pic4
        },
        {
            id:5,
            src:pic5
        },
    ]
    const audioRef = useRef(null);
    useEffect(() => {
      if (!audioRef.current) {
        audioRef.current = new Audio(aud);
        audioRef.current.loop = true;
      }
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }, []);
  

    const playaudio = () => {
      if (!audioRef.current) return;
      if (audioRef.current.paused) {
        audioRef.current.play().catch(err => console.error('Playback error:', err));
        setPlay(!play)
      } else {
        audioRef.current.pause();
        setPlay(!play)
      }
    };
    const pop = () => {
        setModal(!modal)
    }
    
  return (
    <div className='section' style={{backgroundImage: `url(${background})`,
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover"
        }}>
        {images.map((image) => (
          <div
          key={image.id}
          className='hide'
          
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseUp={handleMouseUp}
          onMouseDown={(e) => handleMouseDown(e, image.id)}
          style={{
            position: 'absolute',
            left: `${positions[image.id].x}px`,
            top: `${positions[image.id].y}px`,
            cursor: 'grab',
            userSelect: "none",
            transition: isDragging && activeImage === image.id ? "none" : "transform 0.2s ease-out",
          }}
        >
          <img
            src={image.src}
            alt={`Draggable ${image.id}`}
            className={`i${image.id}`}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
          /></div>))}
        <div className='i6'><img src={pic6} alt="" /></div>
        <img onClick={pop} className='envelop' src={pic7} alt="" />
        <div className='disc'><img onClick={playaudio} className={`${play ? 'spinning' : 'paused'}`} src={pic8} alt="" /></div>
        <div className='clk'>Click here 👆</div>
        {modal && <First pop={pop} modal={modal} />}

    </div>
  )
}
export default firstpage