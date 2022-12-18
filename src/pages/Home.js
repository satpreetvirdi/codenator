import React, { useState } from 'react'
import {v4 as uuidV4  } from "uuid"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUserName] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a New Room');
    };
    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('Username & Room Id is required ');
            return;
        }
        navigate(`/editor/${roomId}`, {
            state: {
                username
            }
        })
    }
    const handleEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    }
    return (
        <div className='homePageWrapper'>
            <div className='formWrapper'>
                <img src='/codenator.png' className='homePageLogo' alt='CodeItor'></img>
                <h4 className='mainInvitation'> Paste Invitation ROOM ID</h4>
                <div className='inputGroup'>
                    <input type= "text" className='inputBox' placeholder='Room ID' onChange={(e) => setRoomId(e.target.value)} value={roomId}
                        onKeyUp={handleEnter}
                    />
                    <input type="text" className='inputBox' placeholder='User Name' onChange={(e) => setUserName(e.target.value)} value={username}
                        onKeyUp={handleEnter}/>
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