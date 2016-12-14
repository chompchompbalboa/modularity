/**
* App.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const isSet = require('../../lib/isSet');

const AppDashboard = require('./AppDashboard/AppDashboard');

/**
* The top level site component
*
* @module App
*/
class App extends React.Component {

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
    * Settings for: _section
    *
    * @function _section
    * @return {object}
    */
    _section() {
        return {
            style: {
                position: "fixed",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                height: "100vh",
                fontFamily: "Source Sans Pro, sans-serif"
            }
        }
    }

    /**
    * Settings for: __app
    *
    * @function __app
    * @param {object} app
    * @return ReactElement
    */
    __app(app) {
        let payload;
        let module = "AppDashboard";
        if (app.display && app.display.App) {
            module = app.display.App
        }
        try {
            payload = this[module]();
        }
        catch(e) {
            payload = this["AppDashboard"]();
        }
        return payload;
    }

    /**
    * App Dashboard
    *
    * @function AppDashboard
    * @return ReactElement
    */
    AppDashboard() {
        return (
            <AppDashboard content={this.props.content} />
        )
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {content, ...other} = this.props;
        let _section = this._section();
        let __app = this.__app(content.app);
        return (
            <section id="app" style={_section.style}>
                {__app}
            </section>
        )
    }    
}
module.exports = Radium(App);