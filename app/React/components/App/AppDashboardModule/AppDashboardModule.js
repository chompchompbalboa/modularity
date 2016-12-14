/**
* AppDashboardModule.js
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
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
/**
* App Dashboard Module
*
* @module AppDashboardModule
*/
class AppDashboardModule extends React.Component {

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
            && content.app.display 
            && content.app.display.AppDashboardModule
            && content.app.display.AppDashboardModule.position) {
            position = content.app.display.AppDashboardModule.position;
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
                <AppDashboardContainerNavigation>
                    <ChangeContentLink
                        changes={[
                            {key: "app.display.AppDashboardModule.position", value: "right"},
                            {key: "app.display.AppDashboardModules.position", value: "center"}
                        ]}>
                        <div className="hoverAppLink">&#x2190;&nbsp;BACK</div>
                    </ChangeContentLink>
                </AppDashboardContainerNavigation>
            </AppDashboardContainer>
        )
    }    
}
module.exports = Radium(AppDashboardModule);