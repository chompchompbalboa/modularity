/**
* AppDashboardContainerNavigation.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

/**
* App DashboardContainerNavigation
*
* @module AppDashboardContainerNavigation
*/
class AppDashboardContainerNavigation extends React.Component {

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
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div() {
        return {
            style: {
                width: "100%",
                height: "5vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Source Sans Pro, sans-serif",
                fontSize: "0.9em",
                letterSpacing: "0.125em",
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
        var {children, ...other} = this.props;
        let _div = this._div();
        return (
            <div style={_div.style}>
                {children}
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContainerNavigation);