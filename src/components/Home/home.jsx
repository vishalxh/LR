import React, { useState } from 'react'
import '../../App.css'
import {Link, Routes} from 'react-router-dom'
import background from '../../assets/image.png'
import image from '../../assets/___4_-removebg-preview.png'
import image1 from '../../assets/lucy1.png'
import image2 from '../../assets/ramen_buldak_spice_level_4-removebg-preview.png'
import image3 from '../../assets/TULIPS•°.jpeg'
import gif from '../../assets/_.gif'
import x from '../../assets/mic-removebg-preview.png'
import o from '../../assets/zero.png'
import Draggable from 'react-draggable'
import { useRef } from 'react'

let data=['','','','','','','','',''];




const home = () => {
    const titleref= useRef(null)
    const box0=useRef(null);
    const box1=useRef(null);
    const box2=useRef(null);
    const box3=useRef(null)
    const box4=useRef(null)
    const box5=useRef(null)
    const box6=useRef(null)
    const box7=useRef(null)
    const box8=useRef(null)

    const arr=[box0,box1,box2,box3,box4,box5,box6,box7,box8];
    let [count,setCount]= useState(0);
    let [lock,setLock]=useState(false);

    const toggle = (e,num) => {
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML=`<img src='${x}' className='x'>`
            data[num]='x';
            setCount(++count)
        }
        else{
            e.target.innerHTML=`<img src='${o}' className='o' >`
            data[num]='o';
            setCount(++count)
        }
        checkwin()
    }

    const checkwin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==''){
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==''){
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==''){
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==''){
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==''){
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==''){
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==''){
            won(data[8]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==''){
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==''){
            won(data[6]);
        }
        
    }
    const won = (winner) => {
        setLock(true);
        if(winner==='x'){
            titleref.current.innerHTML=`<span className='greet'> Congratulations: </span><img className='player' src='${x}'/> `
        }
        else{
            titleref.current.innerHTML=`<span className='greet'> Congratulations: </span><img className='player' src='${o}'/> `
        }
    }
    const reset = () => {
        setLock(false)
        data=['','','','','','','','',''];
        titleref.current.innerHTML=`<span className='tictactoe' ref={titleref}>Tic Tac Toe</span>`
        arr.map((box) => {
            box.current.innerHTML=''
        })
    }

  return (
    <div className='container' style={{backgroundImage: `url(${background})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover"
    }}>
        <img src={image} alt="" className='image' />
        <img src={image1} alt="" className='image1' />
        <img src={image2} alt='' className='image2' />
        <img src={image3} alt='' className='image3' />
        <Link to='/first'><img className='gif' src={gif} alt="" /></Link>
        <span className='click'>click me</span>
         
        <span className='tictactoe' ref={titleref}>Tic Tac Toe</span>
       
        
        <div className='board'>
            <div className="row1">
                <div className="boxes" ref={box0} onClick={(e) => {toggle(e,0)}}></div>
                <div className="boxes" ref={box1} onClick={(e) => {toggle(e,1)}}></div>
                <div className="boxes" ref={box2} onClick={(e) => {toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box3} onClick={(e) => {toggle(e,3)}}></div>
                <div className="boxes" ref={box4} onClick={(e) => {toggle(e,4)}}></div>
                <div className="boxes" ref={box5} onClick={(e) => {toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box6} onClick={(e) => {toggle(e,6)}}></div>
                <div className="boxes" ref={box7} onClick={(e) => {toggle(e,7)}}></div>
                <div className="boxes" ref={box8} onClick={(e) => {toggle(e,8)}}></div>
            </div>
        </div>
        
        <button onClick={reset} className='btn'>Reset</button>
        </div>
  )
}

export default home