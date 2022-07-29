import "./topbar.css";

export default function TopBar(){
    return(
        <div className="top">
            <div className="topLeft">
            <i className=" topIcon fa-brands fa-facebook-square"></i>
            <i className=" topIcon fa-brands fa-twitter"></i>
            <i className=" topIcon fa-brands fa-pinterest"></i>
            <i className=" topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImage" src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" height=""/>
                <i className=" SearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}