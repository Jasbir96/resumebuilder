import React from "react";
import { skinCodes } from "../../constants/typeCodes";
// import * as actionTypes from '../../actions/actionTypes';
// import { bindActionCreators } from 'redux';
// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
function GettingStarted(props) {
  let history = useHistory();

  const setSkinCode = async (skinCode) => {
    // history.push('/contact');
  };

  return (
    <div className="container med gettingStarted">
      <div className="section">
        <h1 className=" center">Select a resume template to get started</h1>
        <p className=" center">
          You’ll be able to edit and change this template later!
        </p>
        <div className="styleTemplate ">
          {skinCodes.map((skinCode, index) => {
            return (
              <div key={index} className="template-card rounded-border">
                <i
                  className={
                    skinCode == "demo-value" ? "selected fa fa-check" : "hide"
                  }
                ></i>
                <img className="" src={"/images/" + skinCode + ".svg"} />
                <button
                  type="button"
                  onClick={() => setSkinCode(skinCode)}
                  className="btn-select-theme"
                >
                  USE TEMPLATE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(store) {
  console.log("Inside map state to props");
  console.log(store);
  return { document : store.document}; // set document object into components props
}

function mapDispatchToProps(dispatch) {
  console.log("Inside map dispatch to props");
  // set skin => document id , skinId
  // update skin
  return {
    setSkin: (document) => {
      dispatch({ type: "SET_SKIN", payload: document });
    },
    updateSkin: (skinCode) => {
      dispatch({ type: "UPDATE_SKIN", payload: skinCode });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted);
