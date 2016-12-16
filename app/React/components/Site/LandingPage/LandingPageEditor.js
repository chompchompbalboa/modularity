/**
* Tile1Editor.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardContainerSection = require('../../App/AppDashboardContainerSection/AppDashboardContainerSection');
const ChangeContentInputText = require('../../lib/ChangeContentInputText/ChangeContentInputText');
const EditBackgroundColor = require('../../lib/EditBackgroundColor/EditBackgroundColor');
const EditHeight = require('../../lib/EditHeight/EditHeight');
const EditWidth = require('../../lib/EditWidth/EditWidth');
const Spacer = require('../../lib/Spacer/Spacer');

/**
* Tile 1 Editor
*
* @module Tile1Editor
*/
class Tile1Editor extends React.Component {

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
    * @return {object}
    */
    _div() {
        return {
            style: {}
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {content, pageKey, moduleKey, ...other} = this.props;
        let _div = this._div();
        return (
            <div style={_div.style}>
                <AppDashboardContainerSection>
                    <ChangeContentInputText
                        changeKeys={["site.pages." + pageKey + ".modules." + moduleKey + ".header"]}
                        style="header"
                        value={content.site.pages[pageKey].modules[moduleKey].header}
                    />
                </AppDashboardContainerSection>
                <Spacer height={{sm: "2vh", md: "2vh", lg: "3vh"}} />
                <EditHeight
                    content={content} 
                    pageKey={pageKey}
                    moduleKey={moduleKey}
                />  
                <EditWidth
                    content={content} 
                    pageKey={pageKey}
                    moduleKey={moduleKey}
                /> 
                <EditBackgroundColor
                    content={content} 
                    pageKey={pageKey}
                    moduleKey={moduleKey}
                /> 
            </div>
        )
    }    
}
module.exports = Radium(Tile1Editor);