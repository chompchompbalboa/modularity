/**
* ChangeContentInputText.js
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
* @module ChangeContentInputText
*/
class ChangeContentInputText extends React.Component {

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
    handleChange(e, changeKey) {
        let changes = [
            {key: changeKey, value: e.target.value}
        ];
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: _style
    *
    * @function _style
    * @return {object}
    */
    _style(type) {
        let style;
        switch (type) {
            case "header":
                style = {
                    padding: "0.25vw",
                    border: "none",
                    backgroundColor: "transparent",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "2em",
                    fontWeight: "400",
                    color: "white"
                }
            break;
        }
        return style;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {changeKey, style, value, ...other} = this.props;
        let _style = this._style(style)
        return (
            <input style={_style} value={value} onChange={(e) => this.handleChange(e, changeKey)} />
        )
    }    
}
module.exports = Radium(ChangeContentInputText);