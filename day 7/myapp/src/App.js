import './App.css';
import { lastDayOfMonth } from "date-fns";

const today = new Date();
console.log(lastDayOfMonth(today));
function App() {
  return (
    <div>
      <span className="nav-bar">
        FaceBook
        <input type="search" name="" id="search" />
        
      </span>
      <div className="container">
        <div className="container__image div__one">
          <div className="image__title">Hey</div>
        </div>
        <div className="container__image div__two">
          <div className="image__title">Let's</div>
        </div>
        <div className="container__image div__three">
          <div className="image__title">Give</div>
        </div>
        <div className="container__image div__four">
          <div className="image__title">All</div>
        </div>
        <div className="container__image div__five">
          <div className="image__title">You Can!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
