
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpdateForm from './updateForm';



export class FavoriteFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favData: [],
            show: false,
            title: '',
            image: '',
            index: -1,
        }
    }

    componentDidMount = async () => {

        const favorite = await axios.get('https://favoritefoodddddd.herokuapp.com/displayingFav');
        console.log(favorite.data);
        this.setState({
            favData: favorite.data
        })
    }
    deletingFav = async (id) => {
        try {
            const returnedData = await axios.delete(`https://favoritefoodddddd.herokuapp.com/deleteFav?id=${id}`);
            console.log(returnedData.data);
            this.setState({
                favData: returnedData.data,
            })
        }
        catch (error) {
            console.log(error)
        }
        console.log(id);
    }
    opening = (indx) => {
        this.setState({
            index: indx,
            show: true,
            title: this.state.favData[indx].title,
            image: this.state.favData[indx].image,

        })
    }

    hiding = () => {
        this.setState({
            show: false
        })

    }
    updatingFav = async (event) => {
        event.preventDefault();
        const id = this.state.favData[this.state.index]._id;
        console.log(id);
        try {
            const obj = {
                title: event.target.title.value,
                image: event.target.image.value,
                id: id
            }
            const data = await axios.put(`https://favoritefoodddddd.herokuapp.com/updateFav`, obj);
            this.setState({
                favData: data.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {

        return (
            <div>
                <Row xs={1} md={2} className="g-4">
                    {this.state.favData.map((element, indx) => {
                        return <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={element.image} />
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => this.deletingFav(element._id)}>Delete</Button>
                                    <Button variant="primary" onClick={() => this.opening(indx)}>Update</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                </Row>
                <UpdateForm show={this.state.show} opening={this.opening} hiding={this.hiding} title={this.state.title} image={this.state.image} updatingFav={this.updatingFav} />


            </div >
        )
    }
}

export default FavoriteFood;
