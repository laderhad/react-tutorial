import profilPic from './assets/profile.jpg';
function Card(){
    return (
        <div className="card">
            <img className='cardImage' src={profilPic} alt="profile picture" width="200" height="200"></img>
            <h2 className='card-title'>Laderhad Code</h2>
            <p className='card-text'>I code and watch regular show</p>
        </div>      
    );
}
export default Card;