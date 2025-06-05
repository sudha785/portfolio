import './Profile.css';
import  myphoto  from '../assets/myphoto.jpg';
function Profile(){
    return(
        <div className='profile-container'>
            <div className='profile-left'>
                <img src={myphoto} alt="Sudha" className="profile-pic"/>

            </div>
            <div className='profile-right'>
            <h2>Sudha</h2>
                <p className="Title">Full Stack Developer(MERN)</p>
                <div className="Profile-links">
                    <a href="https://github.com">Github </a>
                     <a href="https://www.linkedin.com/in/sudha-sajjan-737b16296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn </a>
                      <a href="mailto:sudhasajjan48@gmail.com">Email</a>
                 
                </div>

             
           
            </div>
        </div>
    );

}
export default Profile;