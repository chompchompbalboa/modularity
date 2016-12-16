/**
* AppDashboardHeader.js
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
* App DashboardHeader
*
* @module AppDashboardHeader
*/
class AppDashboardHeader extends React.Component {

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
                height: "8vh",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                "@media (min-width: 64em)": {
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
                    margin: "0 1.25vw 0 0"
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
        var {content, ...other} = this.props;
        let _div = this._div();
        let _link = this._link();
        return (
            <div style={_div.style}>
                <ChangeContentLink
                    changes={[
                        {key: "app.state.AppDashboard", value: "AppDashboardDocked"}
                    ]}
                    style="header"
                >
                    &#x2573;
                </ChangeContentLink>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardHeader);