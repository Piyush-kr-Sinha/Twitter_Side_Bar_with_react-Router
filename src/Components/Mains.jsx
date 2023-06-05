import "./Style.css";
import Home from "./Home";
import Explore from "./Explore";
import Notification from "./Notification";
import Message from "./Message";
import Lists from "./Lists";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Mains() {
  return (
    <Router>
      <div id="mainCont">
        <div id="navbar">
          <nav>
            <ul id="mId">
              <li className="lId">
                <Link to="/">Home</Link>
              </li>
              <li className="lId">
                <Link to="/Explore">Explore</Link>
              </li>
              <li className="lId">
                <Link to="/Notification">Notification</Link>
              </li>
              <li className="lId">
                <Link to="/Message">Message</Link>
              </li>
              <li className="lId">
                <Link to="/Lists">Lists</Link>
              </li>
            </ul>
          </nav>
          <div id="twt">
            <button>Tweet</button>
          </div>
          <div id="profile">
            <p>Piyush Kumar</p>
            <p>@Pk200125230503</p>
          </div>
        </div>
        <div id="disp">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route exact path="/Explore" element={<Explore />} />
            <Route exact path="/Notification" element={<Notification />} />
            <Route exact path="/Message" element={<Message />} />
            <Route exact path="/Lists" element={<Lists />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
