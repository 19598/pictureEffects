import { Pic } from './App.js';
import { Carousel } from 'react-bootstrap';
import './App.css';
import img0 from './zero.jpg';
import img1 from './one.jpg';
import img2 from './two.jpg';
import img3 from './three.jpg';
import img4 from './four.jpg';
import img5 from './five.jpg';


function NIN() {
    return (
      <div className="App">
        <header className="App-header" width="1000px">
            <Carousel fade>
                <Carousel.Item>
                    <Pic img={img0} background={true} blur={1} percent={25}/>
                    <Carousel.Caption>
                    <h3>Pic</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                    <Carousel.Item>
                    <Pic img={img1} blur={5} percent={50}/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Pic img={img2} blur={10} percent={75}/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Pic img={img3} blur={30}/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Pic img={img4} blur={50}/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Pic img={img5} blur={100}/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </header>
      </div>
    );
  }
  
  export default NIN;