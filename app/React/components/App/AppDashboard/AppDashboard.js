/**
* AppDashboard.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardDocked = require('../AppDashboardDocked/AppDashboardDocked');
const AppDashboardVisible = require('../AppDashboardVisible/AppDashboardVisible');

/**
* App Dashboard
*
* @module AppDashboard
*/
class AppDashboard extends React.Component {

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
    * Settings for: visible
    *
    * @function visible
    * @return {object}
    */
    visible(content) {
        let display = "AppDashboardVisible";
        if(content.app && content.app.state && content.app.state.AppDashboard) {
            display = content.app.state.AppDashboard;
        }
        return (display === "AppDashboardVisible")
    }

    /**
    * Settings for: _div
    *
    * @function _div
    * @return {object}
    */
    _div(visible) {
        return {
            style: {
                position: "fixed",
                top: (visible ? "35vh" : "100vh"),
                left: "0vw",
                width: "100vw",
                height: "65vh",
                backgroundColor: "rgba(41,41,41,0.975)",
                overflowX: "hidden",
                overflowY: "scroll",
                color: "white",
                transition: "left 0.5s",
                "@media (min-width: 64em)": {
                    top: "0vh",
                    left: (visible ? "0vw" : "-23.5vw"),
                    width: "27.5vw",
                    height: "100vh",
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
        let {content, ...other} = this.props;
        let visible = this.visible(content);
        let _div = this._div(visible);
        return (
            <div style={_div.style}>
                <AppDashboardVisible content={content} visible={visible}/>
                <AppDashboardDocked content={content} visible={!visible}/>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboard);