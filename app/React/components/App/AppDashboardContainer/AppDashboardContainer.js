/**
* AppDashboardVisibleContainer.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

/**
* App DashboardVisibleContainer
*
* @module AppDashboardVisibleContainer
*/
class AppDashboardVisibleContainer extends React.Component {

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
    _div(position) {
        let left = {sm: "3.5%", md: "3.5%", lg: "7.5%"};
        left = (position === "left" ? {sm: "-103.5%", md: "-103.5%", lg: "-107.5%"} : left);
        left = (position === "right" ? {sm: "103.5%", md: "103.5%", lg: "107.5%"} : left);
        return {
            style: {
                position: "absolute",
                top: "2vh",
                left: left.sm,
                width: "93%",
                transition: "left 0.5s",
                display: "flex",
                flexDirection: "row wrap",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                "@media (min-width: 64em)": {
                    top: "8vh",
                    left: left.lg,
                    width: "85%",
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
        var {children, position, ...other} = this.props;
        let _div = this._div(position);
        return (
            <div style={_div.style}>
                {children}
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardVisibleContainer);