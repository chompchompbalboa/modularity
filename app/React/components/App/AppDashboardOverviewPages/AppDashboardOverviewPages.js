/**
* AppDashboardPages.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardContainerSection = require('../AppDashboardContainerSection/AppDashboardContainerSection');
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
const ContentActionLink = require('../../lib/ContentActionLink/ContentActionLink');
/**
* App Dashboard Pages
*
* @module AppDashboardPages
*/
class AppDashboardPages extends React.Component {

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
    __links(content) {
        let payload = [];
        for(let i in content.site.pages) {
            let page = content.site.pages[i];
            payload.push(
                <ChangeContentLink
                    key={i}
                    changes={[
                        {key: "site.state.path", value: page.path},
                        {key: "app.state.AppDashboardPage.page", value: i},
                        {key: "app.state.AppDashboardPage.position", value: "center"},
                        {key: "app.state.AppDashboardOverview.position", value: "left"}
                    ]}
                    style="dashboard"
                    >
                    {page.name}
                </ChangeContentLink>
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
        var {content, ...other} = this.props;
        let _div = this._div();
        let __links = this.__links(content);
        return (
            <div style={_div.style}>
                {__links}
                <ContentActionLink
                    action="insertPage"
                    content={content}
                    style="dashboard"
                >
                &#65291;
                </ContentActionLink>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardPages);