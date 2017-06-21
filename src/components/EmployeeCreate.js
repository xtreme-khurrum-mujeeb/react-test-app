import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, employeeReset } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';


class EmployeeCreate extends Component {

  componentWillUnmount() {
    console.log('In componentWilUnMount()');
    this.props.employeeReset();
  }

  onButtonPress() {
    console.log('Pressed Create!');
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate, employeeReset
 })(EmployeeCreate);
