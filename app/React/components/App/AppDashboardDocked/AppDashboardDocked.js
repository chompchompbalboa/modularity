/**
* AppDashboardDocked.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');

/**
* App DashboardDocked
*
* @module AppDashboardDocked
*/
class AppDashboardDocked extends React.Component {

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
                left: "23.5vw",
                width: "4vw",
                height: "100vh",
                transition: "all 0.5s",
                "@media (min-width: 64em)": {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center"
                }
            }
        }
    }

    /**
    * Settings for: _link
    *
    * @function _link
    * @return {object}
    */
    _link() {
        return {
            style: {
                display: "none",
                transition: "color 0.25s",
                "@media (min-width: 64em)": {
                    display: "block",
                    height: "8vh",
                    width: "4vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
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
        let {content, visible, ...other} = this.props;
        let _div = this._div(visible);
        let _link = this._link();
        return (
            <div style={_div.style}>
                <ChangeContentLink changes={[{key: "app.display.AppDashboard", value: "AppDashboardVisible"}]}>
                    <div className="hoverAppLink" style={_link.style}>&#x21b1;</div>
                </ChangeContentLink>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardDocked);