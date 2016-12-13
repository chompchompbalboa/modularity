/**
* AppDashboardVisible.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardVisibleHeader = require('../AppDashboardVisibleHeader/AppDashboardVisibleHeader');

/**
* App DashboardVisible
*
* @module AppDashboardVisible
*/
class AppDashboardVisible extends React.Component {

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
    _div(visible) {
        return {
            style: {
                zIndex: (visible ? "2" : "1"),
                opacity: (visible ? "100" : "0"),
                position: "absolute",
                top: "0vh",
                left: "0vw",
                width: "100%",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                transition: "all 0.5s",
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
        var {content, visible, ...other} = this.props;
        let _div = this._div(visible);
        return (
            <div style={_div.style}>
                <AppDashboardVisibleHeader content={content} />
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardVisible);