import React, { useState } from 'react'
import {v4} from "uuid"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const  [roomId,setRoomId] = useState('');
    const  [userName,setUserName] = useState('');
    const navigate = useNavigate();

    const createNewRoom = (e) =>{    
        e.preventDefault();
        const id = v4();
        setRoomId(id);
        toast.success('Created a New Room');
    };
    const joinRoom = ()=>{
        if(!roomId || !userName){
            toast.error('Username & Room Id is required ');
            return;
        }
        navigate(`/editor/${roomId}`,{
            state :{
                userName,
            }
        })
    }
    const handleEnter = (e)=>{
        if(e.code == 'Enter'){
            joinRoom();
        }
    }
    return (
        <div className='homePageWrapper'>
            <div className='formWrapper'>
                <img src='/codenator.png' className='homePageLogo' alt='CodeItor'></img>
                <h4 className='mainInvitation'> Paste Invitation ROOM ID</h4>
                <div className='inputGroup'>
                    <input className='inputBox' placeholder='Room ID' onChange={(e)=>setRoomId(e.target.value )} value={roomId}
                    onKeyUp={handleEnter}
                    ></input>
                    <input className='inputBox' placeholder='User Name' onChange={(e)=>setUserName(e.target.value)} value={userName}
                    onKeyUp={handleEnter}></input>
                    <button className='btn joinBtn' onClick={joinRoom}>Join</button>
                    <span className='createInfo'>
                        If you don't have an invite then create &nbsp;
                        <a onClick={createNewRoom} href='' className='createNewBtn'> new room</a>
                    </span> 
                </div>
            </div>
            {/* <footer>
            <h4>Build with </h4>
        </footer> */}
        </div>
    )
}

export default Home