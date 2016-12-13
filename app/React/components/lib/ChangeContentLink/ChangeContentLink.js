/**
* ChangeContentLink.js
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
* @module ChangeContentLink
*/
class ChangeContentLink extends React.Component {

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
    * Handle Click
    *
    * @function handleClick
    * @return {object}
    */
    handleClick(e) {
        e.preventDefault();
        contentActions.changeContent(this.props.changes);
    }

    /**
    * Settings for: _a
    *
    * @function _a
    * @return {object}
    */
    _a() {
        return {
            style: {
                cursor: "pointer",
                "@media (min-width: 64em)": {
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
        let {children, ...other} = this.props;
        let _a = this._a();
        return (
            <a style={_a.style} onClick={(e) => this.handleClick(e)}>
                {children}
            </a>
        )
    }    
}
module.exports = Radium(ChangeContentLink);