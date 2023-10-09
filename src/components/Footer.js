import { Col, Container, Row } from "react-bootstrap"
import FAVAS from '../assets/img/FAVAS.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer =() => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={FAVAS}  />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://in.linkedin.com/in/mohammed-favaz-a-80437a227"><img src={navIcon1} /></a>
                            <a href="https://www.instagram.com/mohdfavaz/"><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRights 2022.All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}