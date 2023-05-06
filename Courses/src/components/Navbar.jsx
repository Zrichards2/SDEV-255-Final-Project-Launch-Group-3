import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { useState, useEffect } from 'react';

export default function TopNavBar() {
    const [user, serUser] = useState({});

    useEffect(() => {
        const user = JSON.parse(window.sessionStorage.getItem("currentUser"))
        if(user) {
            serUser(user)
        } else {
            window.location.replace("/")
        }
    }, [])
    return (
        <Navbar sticky="top" bg="light" expand="lg" className='pad-bottom '>
            <Container fluid>
                <Navbar.Brand href="/">Course Scheduler</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/teachers">Teachers</Nav.Link>
                        {user.account === 'student' ? <Nav.Link href="/schedule">Schedule</Nav.Link> : <></>}
                        
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    {/* <CartWidget /> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}