import Navbar from './component/Navbar';
import Home from './component/Home';

function App() {

  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const link ="https://www.google.com";

  return (
    <div className='whole'>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        {/* <h1>{title} </h1>
        <p>Liked {likes} times</p>
        <p>{"Hello"}</p>
        <p>{10}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{ Math.random()* 10}</p>
        <a href={link}>Google</a> */}

      </div>
    </div>
    </div>
  );
}

export default App;
