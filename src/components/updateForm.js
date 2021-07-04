import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.hiding}>
                    <Modal.Header closeButton>
                        <Modal.Title>Updating your Favorite</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(event) => this.props.updatingFav(event)}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.title} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.image} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.props.hiding}>
                                Save
                            </Button>
                        </Form>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

export default UpdateForm
