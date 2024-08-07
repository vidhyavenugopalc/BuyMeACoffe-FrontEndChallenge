import React from 'react';
import "./Home.css";
import chatImage from '../../assets/images/chatImage.jpg';
import Design3 from '../../assets/images/Design3.png';
import { FaSmile } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from "react-icons";
import { FaLocationDot } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomPanel from '../pages/BottomPanel';
import ImageGenerator from './ImageGenerator';

const Home = () => {
  return (
    <div>
    <div className="home-container">
      <div className="main-heading">
        <span className="heading-black">Stay Close to your</span>
        <br />
        <span className="heading-colored">favorite people</span>
      </div>
      <div className="phoneNumSearch">
        <div className="input-wrapper"> 
            <input type="text" placeholder="Enter your phone number" /> 
            <button> Get Started </button> 
        </div>
      </div>
      <div class="chat">
        <img src={chatImage} className="chat-image" alt="chat-image" />
      </div>
      <Container className="content-container1">
        <Row>
          <Col xs={12} md={6}>
            <IconContext.Provider value={{ color: '#9b62e0', size: '20'}}>
              <div>
                <FaSmile />
              </div>
            </IconContext.Provider>
            <h1 className="sub-heading1">Express yourself <br/>freely</h1>
            <span className="descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit, send do eiusmod tempor incididunt ut laboore et
                      dolore magna aligua. Ut enim ad minim veniam, quis 
                      nostrud execitation ullamco laboris nisit ut aliquin ex
                      ea commodo consequat.
            </span>
            <br />
            <button className="learn-more-button"><span><b>learn more </b></span><GoArrowRight /></button>
          </Col>
          <Col xs={12} md={6}>
            <img src={Design3} className="description1-image" alt="description1-image" />
          </Col>
        </Row>
      </Container>
      <Container className='content-container2'>
        <Row>
          <div class="second-content-image">
            <div id="outer-circle">
                <div id="inner-circle">
                </div>
            </div>
          </div>
          <Col xs={12} md={6}>
          <img src="https://s3-alpha-sig.figma.com/img/a0a6/1bac/af9eb26f1200ad1ff6925faa9ef84367?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=clq6HmXqcRxc333RyC3PatzWdbF79VqnUQcwVwW2Qt9Wt1ssBio3rF4GEkMsN4f10RCiHDS5ZyvDw7keN7IUTAavD7BDwYFmIESn-7O7Hz9D9TN5BUt4q~F-C5~VZOtugE4cku-xk4rzpfjz7PRAeY6KFk1Z4Vo~KVw6uJI7MceyRyQIl6Sbr5k~Yjm1sW~X-aVSPUHyWWmSTPwMmAlMlKK2OYic-xnfudapVl1ukk62Kahkrc6OcUaRAwmtngt~Y2ENnT1ciPu5OmX0bzPjYk5EV4XXeATZn0i4i7y~AexGAxb5yjSNhPejE-e~hi~Ho9lFMPe6fBXdd1bK8DDtdQ__" className="description2-img" alt="description2-image" />
          </Col>
          <Col xs={12} md={6}>
            
            <h1 className="sub-heading1">Create and <br/>Share</h1>
            <span className="descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit, send do eiusmod tempor incididunt ut laboore et
                      dolore magna aligua. Ut enim ad minim veniam, quis 
                      nostrud execitation ullamco laboris nisit ut aliquin ex
                      ea commodo consequat.
            </span>
            <br />
            <button className="learn-more-button"><span><b>learn more </b></span><GoArrowRight /></button>
          </Col>
        </Row>
      </Container>
      <Container  className="content-container2">
        <Row>
          <Col xs={12} md={6}>
            <IconContext.Provider value={{ color: '#9b62e0', size: '20'}}>
              <div>
                <FaLocationDot />
              </div>
            </IconContext.Provider>
            <h1 className="sub-heading1">Share live <br/>location</h1>
            <span className="descriptions">Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, send do eiusmod tempor incididunt ut laboore et
                        dolore magna aligua. Ut enim ad minim veniam, quis 
                        nostrud execitation ullamco laboris nisit ut aliquin ex
                        ea commodo consequat.
            </span>
            <br />
            <button className="learn-more-button"><span><b>learn more </b></span><GoArrowRight /></button>
          </Col>
          <Col xs={12} md={6}>
          <img src="https://s3-alpha-sig.figma.com/img/3b1e/888a/03bb1278b8fb9a6f19ef534cad2da0f0?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Br-hxy5fX38H45uR46u2v-rRmkSNWwRm~acl3xi6MeMfN7580-cfrtDrsj9ia95IUzaT8OVW1od6JZhE8csnEx3Q0xea9VE-q3WeJF~qmt7Ny8ci6TQbo4WNpbwfZnBRWQq709nwsqgVhekjHo-UQbYVtHbvXayhkDXW83jEnQ1al8j23v6cNNLExOMHwQgQxWn0-VqLfMQJZGs-ETt1EA9PG-c9o9SWc3tOYzgL7B7Oj91o1C3PddpTiU8j6KM1lNSifkOlp~v~hw0bR8jSN74-fZ8ufuELLrlEf4Nf357QU81kc5-EwoMx8c3ta2sl-yKScKB2nZS1qhmU48MajA__" className="description3-image" alt="description3-image" />
          </Col>
        </Row>
      </Container>
      <div className="bottom-container">
        <p className="bottom-heading">Around 5M+ creators</p>
        <div className="bottom-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
          elit, send do eiusmod tempor incididunt ut laboore
        </div>
      </div>
    </div>
    <div className='image-container'>
      <ImageGenerator />
    </div>
    <BottomPanel />
    </div>
  );
}

export default Home;