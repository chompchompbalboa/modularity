/**
* AppDashboardPage.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardContainer = require('../AppDashboardContainer/AppDashboardContainer');
const AppDashboardContainerNavigation = require('../AppDashboardContainerNavigation/AppDashboardContainerNavigation');
const AppDashboardContainerSection = require('../AppDashboardContainerSection/AppDashboardContainerSection');
const AppDashboardContainerSectionHeader = require('../AppDashboardContainerSectionHeader/AppDashboardContainerSectionHeader');
const AppDashboardPageModules = require('../AppDashboardPageModules/AppDashboardPageModules');
const ChangeContentInputText = require('../../lib/ChangeContentInputText/ChangeContentInputText');
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
const ContentActionLink = require('../../lib/ContentActionLink/ContentActionLink');
/**
* App Dashboard Page
*
* @module AppDashboardPage
*/
class AppDashboardPage extends React.Component {

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
    * Settings for: position
    *
    * @function position
    * @return string
    */
    position(content) {
        let position = "right";
        if(content.app 
            && content.app.state 
            && content.app.state.AppDashboardPage
            && content.app.state.AppDashboardPage.position) {
            position = content.app.state.AppDashboardPage.position;
        }
        return position;
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {content, ...other} = this.props;
        let position = this.position(content);
        let page = content.app.state.AppDashboardPage.page;
        if (typeof content.site.pages[page] !== "undefined") {
            return (
                <AppDashboardContainer content={content} position={position}>
                    <AppDashboardContainerNavigation>
                        <ChangeContentLink
                            changes={[
                                {key: "app.state.AppDashboardPage.position", value: "right"},
                                {key: "app.state.AppDashboardOverview.position", value: "center"}
                            ]}
                            style="navigation"
                            >
                            &#x2190;&nbsp;OVERVIEW
                        </ChangeContentLink>
                    </AppDashboardContainerNavigation>
                    <AppDashboardContainerSection>
                        <ChangeContentInputText
                            changeKeys={["site.pages." + page + ".name"]}
                            style="header"
                            value={content.site.pages[page]["name"]}
                        />
                        <ChangeContentInputText
                            changeKeys={["site.pages." + page + ".path", "site.state.path"]}
                            style="small"
                            value={content.site.pages[page]["path"]}
                        />
                    </AppDashboardContainerSection>
                    <AppDashboardContainerSection>
                        <AppDashboardContainerSectionHeader 
                            text="Modules"
                        />
                        <AppDashboardPageModules 
                            content={content} 
                            page={content.site.pages[page]} 
                            pageKey={page}
                        />
                        <ContentActionLink
                            action="deletePage"
                            content={content}
                            info={{
                                pageKey: page
                            }}
                            style="delete"
                        >
                            DELETE PAGE
                        </ContentActionLink>
                    </AppDashboardContainerSection>
                </AppDashboardContainer>
            )   
        }
        else {
            return (
                <AppDashboardContainer content={content} position={position} / >
            )
        }
    }    
}
module.exports = Radium(AppDashboardPage);