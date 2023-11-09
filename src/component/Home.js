import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // const [name, setName] = useState('Ranjana');
  // const [age, setAge] = useState(22);
  // const handleClick = () => {
  //     setName('Malu');
  //     setAge(18);
  // }

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum....", author: "Rose", id: 1 },
    { title: "Website by me", body: "lorem ipsum....", author: "Daisy", id: 2 },
    { title: "My new blog", body: "lorem ipsum....", author: "Rose", id: 3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !==id);
    setBlogs(newBlogs);
  }

  useEffect(()=>{
    console.log('use effect ran');
    console.log(blogs);
  })

  return (
    <div className="home">
      {/* <h1>Homepg</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick} >Click Me</button> */}
            <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'Rose')} title="Rose's Blogs!"/> //if we want to filter only roses blog then */}

    </div>
  );
};

export default Home;
