import "./post.css";

export default function Post() {
  return (
   <div className="post">
    <img src="https://images.pexels.com/photos/12784538/pexels-photo-12784538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
     alt=""
      className="postImg" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem Ipsum sit amet</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Blanditiis, maiores fugit. Tenetur quia sint explicabo consequuntur 
        reprehenderit quo voluptatum quis soluta, voluptatibus perspiciatis eos sunt architecto 
        impedit optio quae nesciunt!
      </p>
   </div>
  )
}
