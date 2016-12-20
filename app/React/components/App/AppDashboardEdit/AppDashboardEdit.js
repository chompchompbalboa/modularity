/**
* AppDashboardEdit.js
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
const ChangeContentInputText = require('../../lib/ChangeContentInputText/ChangeContentInputText');
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
const Spacer = require('../../lib/Spacer/Spacer');

const ImageEditor = require('../../Site/Image/ImageEditor');
const TextBoxEditor = require('../../Site/TextBox/TextBoxEditor');
/**
* App Dashboard Edit
*
* @module AppDashboardEdit
*/
class AppDashboardEdit extends React.Component {

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
            && content.app.state.AppDashboardEdit
            && content.app.state.AppDashboardEdit.position) {
            position = content.app.state.AppDashboardEdit.position;
        }
        return position;
    }

    /**
    * Settings for: _header
    *
    * @function _header
    * @return string
    */
    _header(content, pageKey, moduleKey) {
        if (content.site.pages[pageKey]
            && content.site.pages[pageKey].modules[moduleKey]) {
            return content.site.pages[pageKey].modules[moduleKey].header;
        }
        else {
            return "Header";
        }
    }

    /**
    * Settings for: __editor
    *
    * @function __editor
    * @return string
    */
    __editor(content, pageKey, moduleKey) {
        if (content.site.pages[pageKey]
            && content.site.pages[pageKey].modules[moduleKey]) {
            let editor = content.site.pages[pageKey].modules[moduleKey].module + "Editor";
            return this[editor](content, pageKey, moduleKey);
        }
        else {
            return "Editor";
        }
    }

    /**
    * Image Editor
    *
    * @function ImageEditor
    * @return string
    */
    ImageEditor(content, pageKey, moduleKey) {
        return (
            <ImageEditor
                content={content}
                pageKey={pageKey}
                moduleKey={moduleKey}
            />
        );
    }

    /**
    * TextBox Editor
    *
    * @function TextBoxEditor
    * @return string
    */
    TextBoxEditor(content, pageKey, moduleKey) {
        return (
            <TextBoxEditor
                content={content}
                pageKey={pageKey}
                moduleKey={moduleKey}
            />
        );
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
        let pageKey = content.app.state.AppDashboardEdit.page;
        let moduleKey = content.app.state.AppDashboardEdit.module;
        let _header = this._header(content, pageKey, moduleKey);
        let __editor = this.__editor(content, pageKey, moduleKey);
        return (
            <AppDashboardContainer content={content} position={position}>
                <AppDashboardContainerNavigation>
                    <ChangeContentLink
                        changes={[
                            {key: "app.state.AppDashboardPage.position", value: "center"},
                            {key: "app.state.AppDashboardEdit.position", value: "right"}
                        ]}
                        style="navigation"
                        >
                        &#x2190;&nbsp;MODULES
                    </ChangeContentLink>
                </AppDashboardContainerNavigation>
                <AppDashboardContainerSection>
                    <ChangeContentInputText
                        changeKeys={["site.pages." + pageKey + ".modules." + moduleKey + ".header"]}
                        style="header"
                        value={_header}
                    />
                    <Spacer height={{sm: "2vh", md: "2vh", lg: "3vh"}} />
                    <AppDashboardContainerSectionHeader text="Device"/>
                    <AppDashboardDevices />
                    {__editor}
                </AppDashboardContainerSection>   
            </AppDashboardContainer>
        )
    }    
}
module.exports = Radium(AppDashboardEdit);