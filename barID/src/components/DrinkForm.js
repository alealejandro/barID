import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { drinkUpdate } from '../actions';
import { CardSection, Input } from './common';

class DrinkForm extends Component {
  render() {
    return (
      <View>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Drink</Text>
          <Picker
            selectedValue={this.props.name}
            onValueChange={value => this.props.drinkUpdate({ prop: 'name', value })}
          >
            <Picker.Item label="Gin | Tonic" value="Gin | Tonic" />
            <Picker.Item label="Whiskey | Coke" value="Whiskey | Coke" />
            <Picker.Item label="Long Island" value="Long Island" />
            <Picker.Item label="Moscow Mule" value="Moscow Mule" />
            <Picker.Item label="Beer" value="Beer" />
            <Picker.Item label="Vodka" value="Vodka" />
            <Picker.Item label="Bacardi" value="Bacardi" />
          </Picker>
        </CardSection>

        <CardSection style={styles.containerStyle}>
          <Text style={styles.pickerTextStyle}>Price</Text>
          <Text style={styles.inputStyle}>$10</Text>
        </CardSection>

        <CardSection>
          <Input
            label="Quantity"
            placeholder="1"
            value={this.props.quantity.toString()}
            onChangeText={value => this.props.drinkUpdate({ prop: 'quantity', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 70,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    paddingTop: 10,
    paddingBottom: 10
  }
};

const mapStateToProps = (state) => {
  const { name, quantity } = state.drinkForm;

  return { name, quantity };
};

export default connect(mapStateToProps, { drinkUpdate })(DrinkForm);
