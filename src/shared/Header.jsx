import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return(
    <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#adult-services">Adult Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#child-services">Pediatric Services</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}
export default Header