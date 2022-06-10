import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>上線與朋友分享周遭大小事！</h1>
          <p>柴柴聊天室提供你快速的聊天天地</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              開始聊天 <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home_bg"></Col>
    </Row>
  );
}

export default Home;
