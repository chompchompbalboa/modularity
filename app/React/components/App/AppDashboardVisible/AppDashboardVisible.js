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

const AppDashboardEdit = require('../AppDashboardEdit/AppDashboardEdit');
const AppDashboardHeader = require('../AppDashboardHeader/AppDashboardHeader');
const AppDashboardPage = require('../AppDashboardPage/AppDashboardPage');
const AppDashboardModules = require('../AppDashboardModules/AppDashboardModules');
const AppDashboardOverview = require('../AppDashboardOverview/AppDashboardOverview');

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
                <AppDashboardHeader key={1} content={content} />
                <AppDashboardOverview key={2} content={content} />
                <AppDashboardPage key={3} content={content} />
                <AppDashboardModules key={5} content={content} />
                <AppDashboardEdit key={4} content={content} />
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardVisible);