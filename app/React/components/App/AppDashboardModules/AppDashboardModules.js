/**
* AppDashboardModules.js
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
const AppDashboardModulesList = require('../AppDashboardModulesList/AppDashboardModulesList');
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
/**
* App Dashboard Modules
*
* @module AppDashboardModules
*/
class AppDashboardModules extends React.Component {

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
            && content.app.state.AppDashboardModules
            && content.app.state.AppDashboardModules.position) {
            position = content.app.state.AppDashboardModules.position;
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
        return (
            <AppDashboardContainer content={content} position={position}>
                <AppDashboardContainerNavigation>
                    <ChangeContentLink
                        changes={[
                            {key: "app.state.AppDashboardModules.position", value: "right"},
                            {key: "app.state.AppDashboardPage.position", value: "center"}
                        ]}
                        style="navigation"
                        >
                        &#x2190;&nbsp;PAGE
                    </ChangeContentLink>
                </AppDashboardContainerNavigation>
                <AppDashboardContainerSection>
                    <AppDashboardContainerSectionHeader text="Choose a module"/>
                    <AppDashboardModulesList content={content} />
                </AppDashboardContainerSection>
            </AppDashboardContainer>
        )
    }    
}
module.exports = Radium(AppDashboardModules);