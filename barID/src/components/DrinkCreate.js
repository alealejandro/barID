import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { drinkUpdate, drinkCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import DrinkForm from './DrinkForm';

class DrinkCreate extends Component {
  onButtonPress() {
    const { currentUser } = firebase.auth();
    const { name, price, status, quantity } = this.props;
    const userID = currentUser.uid;
    const code = Math.floor(Math.random() * 1000) + 1;

    this.props.drinkCreate({
      name: name || 'Gin | Tonic',
      price: price || 10,
      status: 'IN-PREPARATION',
      quantity: Number(quantity) || 1,
      userID,
      code
    });
  }

  render() {
    return (
      <Card>
        <DrinkForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Purchase
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, price, status, quantity, userID, code } = state.drinkForm;

  return { name, price, status, quantity, userID, code };
};

export default connect(mapStateToProps, {
  drinkUpdate, drinkCreate
})(DrinkCreate);
