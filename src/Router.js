import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key="auth"
        navigationBarStyle={styles.navBarStyle}
        titleStyle={styles.navBarTitleStyle}
      >
        <Scene key="login" component={LoginForm} title='Login' intial />
      </Scene>

      <Scene
        key="main"
        navigationBarStyle={styles.navBarStyle}
        titleStyle={styles.navBarTitleStyle}
        leftButtonIconStyle={styles.navBarIconStyle}
      >
        <Scene
          onRight={() => Actions.employeecreate()}
          rightTitle="Add"
          rightButtonTextStyle={styles.navBarTitleStyle}
          key="employeeList"
          component={EmployeeList}
          title='Employees'
          panHandlers={null}
          initial
        />
        <Scene
          key="employeecreate"
          component={EmployeeCreate}
          title='Create Employee'
          panHandlers={null}
        />
      </Scene>
    </Router>
  );
};

const styles = {
  navBarStyle: {
    backgroundColor: '#00AE9E'
  },
  navBarTitleStyle: {
    color: 'white'
  },
  navBarIconStyle: {
    tintColor: 'white'
  }
};

export default RouterComponent;
