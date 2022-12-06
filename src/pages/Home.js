import React from 'react'

const Home = () => {
    return (
        <div className='homePageWrapper'>
            <div className='formWrapper'>
                <img src='/codenator.png' className='homePageLogo' alt='CodeItor'></img>
                <h4 className='mainInvitation'> Paste Invitation ROOM ID</h4>
                <div className='inputGroup'>
                    <input className='inputBox' placeholder='Room ID'></input>
                    <input className='inputBox' placeholder='User Name'></input>
                    <button className='btn joinBtn'>Join</button>
                    <span className='createInfo'>
                        If you don't have an invite then create &nbsp;
                        <a href='' className='createNewBtn'> new room</a>
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