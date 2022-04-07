import logo from './logo.svg';
import './App.css';
import img0 from './zero.jpg';
import img1 from './one.jpg';
import img2 from './two.jpg';
import img3 from './three.jpg';
import img4 from './four.jpg';
import img5 from './five.jpg';

function Pic(props) {
  return <div style={{display: 'grid'}}>
    <img src={props.img} style={{gridColumn: 1, gridRow: 1, filter: 'blur(20px)'}} />
    <img src={props.img} onMouseOver={(i) => {i.target.style.width = '100%'; i.target.style.height = '100%'; i.target.style.top = '0%'; i.target.style.left = '0%';}} onMouseOut={(i) => {i.target.style.width = (props.size ? (props.size ? props.size : 75) : 75) + '%'; i.target.style.height = (props.size ? props.size : 75) + '%'; i.target.style.top = ((100 - (props.size ? props.size : 75)) / 2) + '%'; i.target.style.left = ((100 - (props.size ? props.size : 75)) / 2) + '%';}} style={{gridColumn: 1, gridRow: 1, width: (props.size ? props.size : 75) + '%', height: (props.size ? props.size : 75) + '%', position: 'relative', left: ((100 - (props.size ? props.size : 75)) / 2) + '%', top: ((100 - (props.size ? props.size : 75)) / 2) + '%'}} />
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pic img={img0}/>
        <Pic img={img1}/>
        <Pic img={img2}/>
        <Pic img={img3}/>
        <Pic img={img4}/>
        <Pic img={img5}/>
      </header>
    </div>
  );
}

export default App;
