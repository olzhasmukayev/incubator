import './App.css';
import { useState } from 'react';

function App() {
  // we write function, states, variables in this area 
  
  // let counter = 0; after using the useState, we don't need the counter variable 
  
  // although we are increase/decrease the counter, the HTML element doesn't change the content
  // this is due to the fact that, we are not telling react what element is affected, so react could change it 
  // for this reason, we need to use useState 

  const news = [
    {
      id: 0,
      title: "some 1st title",
      content: "[pqwoeirq[weorpi q[weorpiwe[rpoi",
    },
    {
      id: 1,
      title: "some 2st title",
      content: "[pqweorpwoeirq[wewoeirq[werpwoeirq[weorpi q[weoriwe[rpoi",
    },
    {
      id: 2,
      title: "some 3st title",
      content: "[pqeirq[wwoeirq[weorpi q[eirq[weorweorpiwe[rpoi",
    },
  ];

  const [increase, setIncrease] = useState(0); // first value is the actuall value of the counter, second is the function that we change
  // look to the useState as a pointer to the object that we are changing, and the its' function as a tool to change what is inside of it 
  const [displayText, setdisplayText] = useState("Some text");
  const [theme, setTheme] = useState("white"); // this will change the theme of the website 
  const [addPost, setAddPost] = useState();
  const [addPostText, setAddPostText] = useState("");

  const increment = () => {
    setIncrease(increase + 1); // the second function is needed to change the first variable in the useState
  }

  const decrement = () => {
    setIncrease(increase - 1);
  }
  
  const goBlack = () => {
    if (theme === "white") {
      setTheme("black");
    } else {
      setTheme("white");
    }
  }

  const changePost = () => {
    news.push({
      id: 10,
      title: addPostText,
      content: addPostText,
    });
  }

  return (
    <div className={`${theme}`}>
      <div id="counter">{increase}</div>
      <div className='center'>{displayText}</div>
      <div className="center">
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={goBlack}>Go Black</button>
      </div>
      <div className="center">
        <br />
        <input type="text" value={displayText} onChange={event => setdisplayText(event.target.value)} /> {/* we call the setDisplayText function to Change the DisplayText variable */}
      </div>
      <div className="">
        <hr />
        {news.map((post) => (
          <div key={post.id} className="posts">
              <p>{post.title}</p>
              <p>{post.content}</p>
              <hr />
          </div>
        ))}
        <div className='center'>
          <input type="text" onChange={(event) => setAddPostText(event.target.value)} />
          <button onClick={changePost}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
