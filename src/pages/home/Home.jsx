import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Post from "../../post/Post"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"

export default function Home(){

    return(
<> <Header/>
        <div className="home">
        <Posts/>
      
            
        <Sidebar/>
       
        </div>
      </>
    )
}