import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'

const Wrapper = styled(Container)`
	padding-left: 25px;
	padding-right: 25px;
	display: flex;
`
const Navi = styled(Nav)`
	margin-left: auto;
`

const Header = () => {
	return (
		<Navbar
			bg='dark'
			variant='dark'
			fixed='top'
			style={{ marginBottom: '10px', display: 'block' }}
		>
			<Wrapper>
				<Navbar.Brand href='/'>torrentic</Navbar.Brand>
				<Nav.Link hrref='/about'>About</Nav.Link>
				<Nav.Link hrref='/feedback'>Feedback</Nav.Link>
				<Nav.Link hrref='https://github.com/MiguelDominguezSanchez'>
					github
				</Nav.Link>
			</Wrapper>
		</Navbar>
	)
}

export default Header
