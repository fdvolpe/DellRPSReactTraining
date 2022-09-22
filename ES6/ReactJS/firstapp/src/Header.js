import './Header.css';
import logo from './logo.svg';
var header = () => (
    <div>
        <img src={logo}/>
        <h1>DELL</h1>
        <hr/>
        <div id='navbar'>
            <a class='navItem' href="#">Home</a>
            <span> | </span>
            <a href="#">Contact Us</a>
            <span> | </span>
        </div>
    </div>
)

export default header;