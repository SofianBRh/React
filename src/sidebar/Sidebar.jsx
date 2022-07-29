import "./sidebare.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem" >
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImage"
        src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-443446.jpg&fm=jpg"
        alt="profile"/>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet
            , consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet
          
        </p>
      
        <div className="SidebarItem"></div> 
         <span className="sidebarTitle">CATEGORIES</span>
         <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
         </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLOW US</span>
        <div className="sidebarSocial">
        <i className=" sidebarIcon fa-brands fa-facebook-square"></i>
            <i className=" sidebarIcon fa-brands fa-twitter"></i>
            <i className=" sidebarIcon fa-brands fa-pinterest"></i>
            <i className=" sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
