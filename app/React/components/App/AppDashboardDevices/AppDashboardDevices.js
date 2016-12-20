/**
* AppDashboardDevices.js
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
* App Dashboard Devices
*
* @module AppDashboardDevices
*/
class AppDashboardDevices extends React.Component {

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
    * @return string
    */
    _div() {
        return {
            style: {
                margin: "1.5vh 0 0 0",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }
        }
    }

    /**
    * Settings for: _linkContainer
    *
    * @function _linkContainer
    * @return string
    */
    _linkContainer() {
        return {
            style: {
                width: "7vw",
                height: "5vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }
        }
    }

    /**
    * Settings for: _linkIcon
    *
    * @function _linkIcon
    * @return string
    */
    _linkIcon() {
        return {
            style: {
                margin: "0 0.5vw 0 0",
                height: "2vw",
                width: "2vw",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }
        }
    }

    /**
    * Settings for: _linkText
    *
    * @function _linkText
    * @return string
    */
    _linkText() {
        return {
            style: {
                fontSize: "0.75em"
            }
        }
    }

    /**
    * Settings for: _linkMobile
    *
    * @function _linkMobile
    * @return string
    */
    _linkMobile() {
        return {
            style: {
                backgroundImage: "url(/icons/mobile.png)"
            }
        }
    }

    /**
    * Settings for: _linkTablet
    *
    * @function _linkTablet
    * @return string
    */
    _linkTablet() {
        return {
            style: {
                backgroundImage: "url(/icons/tablet.png)"
            }
        }
    }

    /**
    * Settings for: _linkDesktop
    *
    * @function _linkDesktop
    * @return string
    */
    _linkDesktop() {
        return {
            style: {
                backgroundImage: "url(/icons/desktop.png)"
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
        let _linkContainer = this._linkContainer();
        let _linkIcon = this._linkIcon();
        let _linkText = this._linkText();
        let _linkMobile = this._linkMobile();
        let _linkTablet = this._linkTablet();
        let _linkDesktop = this._linkDesktop();
        return (
            <div style={_div.style}>
                <ChangeContentLink
                    changes={[
                        {key: "app.state.device", value: "mobile"}
                    ]}
                    style="device"
                >
                    <div style={_linkContainer.style}>
                        <div style={[_linkMobile.style, _linkIcon.style]}></div>
                        <div style={_linkText.style}>MOBILE</div>
                    </div>
                </ChangeContentLink>
                <ChangeContentLink
                    changes={[
                        {key: "app.state.device", value: "tablet"}
                    ]}
                    style="device"
                >
                    <div style={_linkContainer.style}>
                        <div style={[_linkTablet.style, _linkIcon.style]}></div>
                        <div style={_linkText.style}>TABLET</div>
                    </div>
                </ChangeContentLink>
                <ChangeContentLink
                    changes={[
                        {key: "app.state.device", value: "desktop"}
                    ]}
                    style="device"
                >
                    <div style={_linkContainer.style}>
                        <div style={[_linkDesktop.style, _linkIcon.style]}></div>
                        <div style={_linkText.style}>DESKTOP</div>
                    </div>
                </ChangeContentLink>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardDevices);