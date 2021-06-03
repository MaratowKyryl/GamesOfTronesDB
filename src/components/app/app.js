import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage/';
import './app.css';
import { ThemeConsumer } from 'styled-components';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class  App extends Component {

    state = {
        toggle: false,
        selectedChar: 130,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error:true
        })
    }



    render() {
        const randomChar = this.state.toggle ? null : <RandomChar/>

        if(this.state.error) {
            return <ErrorMessage/>
        }

        return(
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                        </Col>
                    </Row>
                    <Button onClick={() => this.setState({ toggle: !this.state.toggle} )} color="primary" className="toggleButton">Toggle random character</Button>
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onCharSelected={this.onCharSelected}
                                />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}