import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class FormFood extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={(event) => this.props.recipe(event)}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Enter the name of the recipe you want</Form.Label>
                        <Form.Control type="text" placeholder="your food" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form >

            </div>
        )
    }
}

export default FormFood
