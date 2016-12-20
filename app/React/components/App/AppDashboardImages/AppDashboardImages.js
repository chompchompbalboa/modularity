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
const AppDashboardImagesList = require('../AppDashboardImagesList/AppDashboardImagesList');
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
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
            && content.app.state.AppDashboardImages
            && content.app.state.AppDashboardImages.position) {
            position = content.app.state.AppDashboardImages.position;
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
                            {key: "app.state.AppDashboardImages.position", value: "right"},
                            {key: "app.state.AppDashboardEdit.position", value: "center"}
                        ]}
                        style="navigation"
                        >
                        &#x2190;&nbsp;MODULE
                    </ChangeContentLink>
                </AppDashboardContainerNavigation>
                <AppDashboardContainerSection>
                    <AppDashboardImagesList content={content}/>
                </AppDashboardContainerSection>
            </AppDashboardContainer>
        )
    }    
}
module.exports = Radium(AppDashboardPage);