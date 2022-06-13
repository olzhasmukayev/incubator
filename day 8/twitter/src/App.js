import './App.css';
import SideBar  from './components/sidebar/sidebar';
import Header from './components/header/header';
import CreatePost from './components/create-post/create-post';
import TweetList from './components/tweet-list/tweet-list';

function App() {
  return (
    <div className="app-wrapper">
      <SideBar />
      <div className='main'>
        <Header />
        <CreatePost />
        <TweetList />
      </div>
    </div>
  );
}

export default App;
