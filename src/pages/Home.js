import React, { useState } from 'react'
import {v4} from "uuid"
const Home = () => {
    const  [roomId,setRoomId] = useState('');
    const  [userName,setUserName] = useState('');


    const createNewRoom = (e) =>{    
        e.preventDefault();
        const id = v4();
        setRoomId(id);
    }
    return (
        <div className='homePageWrapper'>
            <div className='formWrapper'>
                <img src='/codenator.png' className='homePageLogo' alt='CodeItor'></img>
                <h4 className='mainInvitation'> Paste Invitation ROOM ID</h4>
                <div className='inputGroup'>
                    <input className='inputBox' placeholder='Room ID' onChange={(e)=>setRoomId(e.target.value )} value={roomId}></input>
                    <input className='inputBox' placeholder='User Name' onChange={(e)=>setUserName(e.target.value)} value={userName}></input>
                    <button className='btn joinBtn'>Join</button>
                    <span className='createInfo'>
                        If you don't have an invite then create &nbsp;
                        <a onClick={createNewRoom} href='' className='c'> new room</a>
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