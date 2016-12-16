/**
* Site.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const LandingPage = require('./LandingPage/LandingPage');

/**
* App DashboardDocked
*
* @module Site
*/
class Site extends React.Component {

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
    * Settings for: page
    *
    * @function page
    * @return {object}
    */
    page(content) {
        let pageKey = 1;
        let path = content.site.state.path;
        for (let i in content.site.pages) {
            let page = content.site.pages[i];
            if (page.path === path) {
                pageKey = i;
            }
        }
        if (typeof content.site.pages[pageKey] !== "undefined") {
            return content.site.pages[pageKey];
        }
        else {
            return {
                modules: {}
            }
        }
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
                zIndex: "1",
                position: "absolute",
                top: "0vh",
                left: "0vw",
                width: "100vw",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                fontSize: "1em",
                "@media (min-width: 64em)": {
                }
            }
        }
    }

    /**
    * Settings for: __page
    *
    * @function __page
    * @return {object}
    */
    __page(modules) {
        let payload = [];
        for (let i in modules) {
            let module = modules[i];
            payload.push(
                this[module.module](i, module.props)
            );
        }
        return payload;
    }

    /**
    * Landing Page
    *
    * @function LandingPage
    * @return React Element
    */
    LandingPage(key, props) {
        return (
            <LandingPage
                key={key}
                width={props.width}
                height={props.height}
                backgroundColor={props.backgroundColor}
            />
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
        let page = this.page(content);
        let _div = this._div();
        let __page = this.__page(page.modules);
        return (
            <div style={_div.style}>
                {__page}
            </div>
        )
    }    
}
module.exports = Radium(Site);