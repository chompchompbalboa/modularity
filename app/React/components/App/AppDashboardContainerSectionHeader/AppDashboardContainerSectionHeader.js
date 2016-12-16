/**
* AppDashboardContainerSectionHeader.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

/**
* App DashboardContainerSectionHeader
*
* @module AppDashboardContainerSectionHeader
*/
class AppDashboardContainerSectionHeader extends React.Component {

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
        text: React.PropTypes.string.isRequired
    }

    /**
    * Set the default props
    *
    * @prop defautProps
    */
    static defaultProps = {
        text: "Header"
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
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _divider
    *
    * @function _divider
    * @return {object}
    */
    _divider() {
        return {
            style: {
                margin: "1vh 0 0 0",
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(145,145,145,0.65)",
                "@media (min-width: 64em)": {
                    margin: "2vh 0 0 0"
                }
            }
        }
    }

    /**
    * Settings for: _text
    *
    * @function _text
    * @return {object}
    */
    _text() {
        return {
            style: {
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
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
        var {text, ...other} = this.props;
        let _div = this._div();
        let _divider = this._divider();
        let _text = this._text();
        return (
            <div style={_div.style}>
                <div style={_text.style}>{text}</div>
                <div style={_divider.style}></div>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardContainerSectionHeader);