import React, {Component} from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        //show spinner while request being made (spinner)
        this.setState({loading: true})
        const order = {
          ingredients: this.props.ingredients,
          //ideally in real app price should be calculated on the server
          price: this.props.price,
          customer: {
            name: 'Slava Tambovtsev',
            address: {
              street: 'SomeStreet 1',
              zipCode: 'M4P1234',
              country: 'Canada'
            },
            email: 'test@test.com'
          },
          deliveryMethod: 'fastest'

        }
        axios.post('/orders.json', order)
            /*after request gets sent we don't show spinner both for 'happy path' and 'error path'
            * also we setting state purchasing to false so that way we close modal window
            * */
            .then(response => {
              this.setState({loading: false});
              this.props.history.push('/');
            })
            .catch(error => {
              this.setState({loading: false})
            });

    }

    render () {
        let form = (
            <form action="">
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
