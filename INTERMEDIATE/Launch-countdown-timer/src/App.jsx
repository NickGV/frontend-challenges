import { CountDown } from "./components/CountDown";

import "./App.css";
function App() {
  return (
    <>
      <main className="container">
        <h1 className="title">WE`RE LAUNCHING SOON</h1>
        <CountDown />
      </main>
      <footer className="footer">
        <ul className="links">
          <li className="link">
            <a href="">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li className="link">
            <a href="">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </li>
          <li className="link">
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
