import React from 'react';
import { connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { changeState1 } from '../actions';

const TestComponent = (props) => {

  return (
    <div className='TestComponent'>
      <style jsx>{`
        .TestComponent {
          height: 100vh;
          width: 100vw;
          background-color: rgba(50,0,100,1)
        }

      `}</style>
      <h1>Test Component</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    testState: state.testState
  };
};

export default connect(mapStateToProps)(TestComponent);