import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="ht-footer" id="footer">
      <Container>
        <Row className="flex-parent-ft">
          <Col className="flex-child-ft item1">
            <Link to="index-2.html"><img className="logo" width="250" src="images/logo8.png" alt="" /></Link>
            <p>Tran Hoang Hai - SE1832 - FPT University</p>
            <p>Call us: <Link to="#">(+84) 972773693</Link></p>
          </Col>
          <Col className="flex-child-ft item2">
            <h4>Resources</h4>
            <ul>
              <li><Link to="#">About</Link></li>
              <li><Link to="#">FBTrailer</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Help Center</Link></li>
            </ul>
          </Col>
          <Col className="flex-child-ft item3">
            <h4>Legal</h4>
            <ul>
              <li><Link to="#">Terms of Use</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Security</Link></li>
            </ul>
          </Col>
          <Col className="flex-child-ft item4">
            <h4>Account</h4>
            <ul>
              <li><Link to="#">My Account</Link></li>
              <li><Link to="#">Wishlist</Link></li>
              <li><Link to="#">Collections</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="ft-copyright">
        <Container>
          <Row className="justify-content-end">
            <Col className="backtotop">
              <p><Link to="#" id="back-to-top">Back to top <i className="ion-ios-arrow-thin-up"></i></Link></p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};
