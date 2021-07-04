import React, { Component } from 'react';
import FormFood from './FormFood';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodData: [],
        }

    }
    componentDidMount = async () => {


        const recipe = await axios.get(`https://favoritefoodddddd.herokuapp.com/getting`);
        console.log(recipe.data);
        this.setState({
            foodData: recipe.data
        })
        console.log(this.state.foodData);



    }
    addingtoFav = async (indx) => {
        const url = "http://localhost:3031";
        const obj = {
            title: this.state.foodData[indx].title,
            image: this.state.foodData[indx].image,
        }
        try {
            await axios.post(`https://favoritefoodddddd.herokuapp.com/addingFav`, obj);
            console.log(obj);
        }
        catch (error) {
            console.log(error)
        }
    }
    //when you wanna send data using post to server you place it inside object and put it after ' url' inside {}
    render() {
        return (
            <div>
                <h5>Welcome to Balsem Recipes website</h5>
                <Row xs={1} md={2} className="g-4">
                    {this.state.foodData.map((element, indx) => {
                        return <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={element.image} />
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => this.addingtoFav(indx)}>Add to favorite</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                </Row>

            </div>
        )
    }
}

export default Home
