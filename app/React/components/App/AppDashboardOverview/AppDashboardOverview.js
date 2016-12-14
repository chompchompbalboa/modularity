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
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
const ChangeContentInputText = require('../../lib/ChangeContentInputText/ChangeContentInputText');
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
            && content.app.display 
            && content.app.display.AppDashboardOverview
            && content.app.display.AppDashboardOverview.position) {
            position = content.app.display.AppDashboardOverview.position;
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
                        changeKey="site.meta.title"
                        style="header"
                        value={content.site.meta.title}
                    >
                    </ChangeContentInputText>
                </AppDashboardContainerSection>
            </AppDashboardContainer>
        )
    }    
}
module.exports = Radium(AppDashboardOverview);