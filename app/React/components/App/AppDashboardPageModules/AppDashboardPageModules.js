/**
* AppDashboardPageModules.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardContainerSection = require('../AppDashboardContainerSection/AppDashboardContainerSection');
const AppDashboardPageModulesModule = require('../AppDashboardPageModulesModule/AppDashboardPageModulesModule');
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
const ContentActionLink = require('../../lib/ContentActionLink/ContentActionLink');
/**
* App Dashboard PageModules
*
* @module AppDashboardPageModules
*/
class AppDashboardPageModules extends React.Component {

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
                width: "93vw",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between",
                alignItems: "center",
                "@media (min-width: 64em)": {
                    width: "23.375vw"
                }
            }
        }
    }

    /**
    * Settings for: __links
    *
    * @function __links
    * @return string
    */
    __links(content, page, pageKey) {
        let payload = [];
        for(let i in page.modules) {
            let module = page.modules[i];
            payload.push(
                <AppDashboardPageModulesModule
                    key={i}
                    content={content}
                    module={module}
                    moduleKey={i}
                    pageKey={pageKey}
                />
            );
        }
        return payload;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {content, page, pageKey, ...other} = this.props;
        let _div = this._div();
        let __links = this.__links(content, page, pageKey);
        return (
            <div style={_div.style}>
                {__links}
                <ChangeContentLink
                    changes={[
                        {key: "app.state.AppDashboardPage.position", value: "left"},
                        {key: "app.state.AppDashboardModules.position", value: "center"},
                        {key: "app.state.AppDashboardModules.page", value: pageKey}
                    ]}
                    style="dashboard"
                    >
                    &#65291;
                </ChangeContentLink>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardPageModules);