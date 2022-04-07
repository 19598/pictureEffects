import logo from './logo.svg';
import './App.css';
import img0 from './zero.jpg';
import img1 from './one.jpg';
import img2 from './two.jpg';
import img3 from './three.jpg';
import img4 from './four.jpg';
import img5 from './five.jpg';

export function Pic(props) {
  return <div style={{display: 'grid', width: (props.width ? props.width : '500px'), height: (props.height ? props.height : '500px')}}>
    <img src={props.img} style={{gridColumn: 1, gridRow: 1, width: '100%', height: '100%', filter: 'blur(' + (props.blur ? props.blur : 20) + 'px)'}} />
    <img src={props.img} onMouseOver={(i) => {if (props.zoom) {i.target.classList.add('grow');}}} onMouseOut={(i) => {if (props.zoom) {i.target.classList.remove('grow'); i.target.style.width = (props.percent ? (props.percent ? props.percent : 75) : 75) + '%'; i.target.style.height = (props.percent ? props.percent : 75) + '%'; i.target.style.top = ((100 - (props.percent ? props.percent : 75)) / 2) + '%'; i.target.style.left = ((100 - (props.percent ? props.percent : 75)) / 2) + '%';}}} style={{gridColumn: 1, gridRow: 1, width: (props.percent ? props.percent : 75) + '%', height: (props.percent ? props.percent : 75) + '%', position: 'relative', left: ((100 - (props.percent ? props.percent : 75)) / 2) + '%', top: ((100 - (props.percent ? props.percent : 75)) / 2) + '%'}} />
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pic img={img0} background={true} blur={1} percent={25} zoom={true}/>
        <Pic img={img1} blur={5} percent={50} zoom={true}/>
        <Pic img={img2} blur={10} percent={75} zoom={true}/>
        <Pic img={img3} blur={30}/>
        <Pic img={img4} blur={50}/>
        <Pic img={img5} blur={100}/>
      </header>
    </div>
  );
}

export default App;
