/**
* EditColor.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

import { ChromePicker } from 'react-color';

const contentActions = require('../../../actions/contentActions');

/**
* Edit Color
*
* @module EditColor
*/
class EditColor extends React.Component {

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
    * Handle Change Complete
    *
    * @function handleChangeComplete
    * @return {object}
    */
    handleChangeComplete(color, changeKey) {
        let newColor = color.rgb;
        let changes = [
            {key: changeKey, value: newColor}
        ];
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div() {
        return {
            style: {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
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
        let {content, pageKey, moduleKey, ...other} = this.props;
        let _div = this._div();
        let changeKey = "site.pages." + pageKey + ".modules." + moduleKey + ".props.backgroundColor";
        let color = content.site.pages[pageKey].modules[moduleKey].props.backgroundColor;
        return (
            <div style={_div.style}>
                Color
                <ChromePicker 
                    color={color}
                    onChangeComplete={(color) => this.handleChangeComplete(color, changeKey)}
                />
            </div>
        )
    }    
}
module.exports = Radium(EditColor);