/**
* AppDashboardOverview.js
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
const AppDashboardDevices = require('../AppDashboardDevices/AppDashboardDevices');
const AppDashboardOverviewNavigation = require('../AppDashboardOverviewNavigation/AppDashboardOverviewNavigation');
const AppDashboardOverviewPages = require('../AppDashboardOverviewPages/AppDashboardOverviewPages');
const AppDashboardSaveButton = require('../AppDashboardSaveButton/AppDashboardSaveButton');
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
const ChangeContentInputText = require('../../lib/ChangeContentInputText/ChangeContentInputText');
const ContentActionLink = require('../../lib/ContentActionLink/ContentActionLink');
const Spacer = require('../../lib/Spacer/Spacer');
/**
* App Dashboard Overview
*
* @module AppDashboardOverview
*/
class AppDashboardOverview extends React.Component {

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
        let position = "center";
        if(content.app 
            && content.app.state 
            && content.app.state.AppDashboardOverview
            && content.app.state.AppDashboardOverview.position) {
            position = content.app.state.AppDashboardOverview.position;
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
        return (
            <AppDashboardContainer content={content} position={position}>
                <AppDashboardContainerSection>
                    <ChangeContentInputText
                        changeKeys={["site.meta.title"]}
                        style="header"
                        value={content.site.meta.title}
                    />
                    <ChangeContentInputText
                        changeKeys={["site.meta.domain"]}
                        style="small"
                        value={content.site.meta.domain}
                    />
                </AppDashboardContainerSection>
                <Spacer height={{sm: "2vh", md: "2vh", lg: "3vh"}} />
                <AppDashboardContainerSection>
                    <AppDashboardContainerSectionHeader text="Device"/>
                    <AppDashboardDevices />
                </AppDashboardContainerSection>
                <Spacer height={{sm: "2vh", md: "2vh", lg: "3vh"}} />
                <AppDashboardContainerSection>
                    <AppDashboardContainerSectionHeader text="Pages"/>
                    <AppDashboardOverviewPages content={content}/>
                </AppDashboardContainerSection>
                <Spacer height={{sm: "2vh", md: "2vh", lg: "3vh"}} />
                <AppDashboardContainerSection>
                    <AppDashboardSaveButton content={content} />
                </AppDashboardContainerSection>
            </AppDashboardContainer>
        )
    }    
}
module.exports = Radium(AppDashboardOverview);