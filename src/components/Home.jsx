import React from 'react';
import { connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { changeState1 } from '../actions';

const Home = (props) => {

  return (
    <div className='Home'>
      <style jsx>{`
        .Home {
          height: 100vh;
          width: 100vw;
          background-color: rgba(50,100,0,1)
        }

      `}</style>
      <h1>Home</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    testState: state.testState
  };
};

export default connect(mapStateToProps)(Home);