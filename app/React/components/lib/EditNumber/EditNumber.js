/**
* EditNumber.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const contentActions = require('../../../actions/contentActions');

/**
* App DashboardDocked
*
* @module EditNumber
*/
class EditNumber extends React.Component {

    /**
    * Constructor
    *
    * @requires {object} props
    */
    constructor(props) {
        super(props);
    }

    /**
    * Validate the prop types
    *
    * @prop propTypes
    */
    static propTypes = {
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
    }

    /**
    * Handle Change
    *
    * @function handleChange
    * @return {object}
    */
    handleChange(e, changeKeys) {
        this.submitChanges(e.target.value, changeKeys);
    }

    /**
    * Handle Click
    *
    * @function handleClick
    * @return {object}
    */
    handleClick(changeKeys, plusMinus) {
        let value;
        if(isNaN(this.props.value)) {
            value = (plusMinus === "plus" ? 1 : -1) + 0;
        }
        else {
            value = (plusMinus === "plus" ? 1 : -1) + Number(this.props.value);
        }
        this.submitChanges(value, changeKeys);
    }

    /**
    * Submit Changes
    *
    * @function submitChanges
    * @return {object}
    */
    submitChanges(value, changeKeys) {
        let changes = [];
        for(let i in changeKeys) {
            let changeKey = changeKeys[i];
            changes.push(
                {key: changeKey, value: value}
            );
        }
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: _button
    *
    * @function _button
    * @return {object}
    */
    _button(type) {
        return {
            style: {
                cursor: "pointer",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.9em",
                "@media (min-width: 64em)": {
                    width: "2vw",
                    height: "2vw",
                }
            }
        }
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(type) {
        return {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                color: "white",
            }
        }
    }

    /**
    * Settings for: _input
    *
    * @function _input
    * @return {object}
    */
    _input(type) {
        return {
            style: {
                margin: "0vh 2vw",
                borderWidth: "0px",
                borderRadius: "10px",
                backgroundColor: "rgb(145,145,145)",
                textAlign: "center",
                fontSize: "1em",
                color: "white",
                "@media (min-width: 64em)": {
                    margin: "0vh 0.5vw",
                    width: "3.5vw",
                    height: "2vw",
                }
            }
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {changeKeys, value, ...other} = this.props;
        let _button = this._button();
        let _div = this._div();
        let _input = this._input();
        return (
            <div style={_div.style}>
                <div className="hoverAppCounterButton" style={_button.style} onClick={(e) => this.handleClick(changeKeys, "minus")}>&minus;</div>
                <input style={_input.style} value={value} onChange={(e) => this.handleChange(e, changeKeys)} />
                <div className="hoverAppCounterButton" style={_button.style} onClick={(e) => this.handleClick(changeKeys, "plus")}>&#43;</div>
            </div>
        )
    }    
}
module.exports = Radium(EditNumber);