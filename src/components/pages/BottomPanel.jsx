import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import appleDownload from '../../assets/images/appleDownload.svg'
import playStore from '../../assets/images/playStore.svg'
import "./BottomPanel.css"


const BottomPanel = () => {
  return (
   
    <div>
    <Container className="content-container1">
    <Row>
    <Col col-md-15 col-sm-3>
      <div className="logo">
        <p className="large-circle"></p>
				<p className="small-circle"></p>
      </div>
    </Col>  
    <Col col-md-15 col-sm-3>
      <div>
        <ul>
          <li className="sub-head-menu">
            Company
          </li>
          <li className="items">
            About
          </li>
          <li className="items">
            Privacy
          </li>
          <li className="items">
            Privacy & Terms
          </li>
        </ul>
      </div>
    </Col>
    <Col col-md-15 col-sm-3>
      <div >
        <ul>
          <li className="sub-head-menu">
            Support
          </li> 
          <li className="items">
            Chat with us
          </li>
          <li className="items">
            Help center
          </li>
          <li className="items">
            Feature request
          </li>
        </ul>
      </div>
    </Col>
    <Col col-md-15 col-sm-3>
      <div>
        <ul>
          <li className="sub-head-menu">
            Community
          </li>
          <li className="items">
            Twitter
          </li>
          <li className="items">
            Facebook
          </li>
          <li className="items">
            Discord
          </li>
        </ul>
      </div>
    </Col>
    <Col col-md-15 col-sm-3>
      <div>
        <ul>
          <li className="sub-head-menu">
            More
          </li>
          <li className="items">
            Buttons
          </li>
          <li className="items">
            Brand assets
          </li>
          <li className="items">
            Careers
          </li>
        </ul>
      </div>
    </Col>
  </Row>
  </Container>  
    <div className='store-icons'>
      <img src={appleDownload} className="apple-store" alt="download-from-apple-store" />
      <img src={playStore} className="playstore" alt="download-from-playstore" />
    </div>
    <span class="privacy-text"> 2023. Privacy & Terms.</span>
    </div>  
  )
}

export default BottomPanel