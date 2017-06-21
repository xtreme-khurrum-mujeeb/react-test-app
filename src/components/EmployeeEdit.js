import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeReset, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';


class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
       this.props.employeeUpdate({ prop, value });
   });
  }

  componentWillUnmount() {
    console.log('In componentWilUnMount()');
    this.props.employeeReset();
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    console.log(name, phone, shift);
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    //this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;
    console.log(uid);
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }


  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
       </CardSection>
       <CardSection>
         <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
           Fire Employee
         </Button>
       </CardSection>

       <Confirm
         visible={this.state.showModal}
         onAccept={this.onAccept.bind(this)}
         onDecline={this.onDecline.bind(this)}
       >
         Are you sure you want to delete this?
       </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate,
   employeeSave,
   employeeReset,
   employeeDelete
  })(EmployeeEdit);