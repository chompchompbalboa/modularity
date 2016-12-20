/**
* EditFont.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const Utils = require('../../../lib/Utils');

const ChangeContentInputSelect = require('../../lib/ChangeContentInputSelect/ChangeContentInputSelect');
const ChangeContentInputText = require('../../lib/ChangeContentInputText/ChangeContentInputText');
const EditContainer = require('../../lib/EditContainer/EditContainer');
const EditNumber = require('../../lib/EditNumber/EditNumber');

/**
* Edit Font
*
* @module EditFont
*/
class EditFont extends React.Component {

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
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        let {content, header, pageKey, moduleKey, ...other} = this.props;
        let changeKey = "site.pages." + pageKey + ".modules." + moduleKey + ".props.";
        let active = Utils.getActiveDeviceInfo(content, pageKey, moduleKey, "fontSize");
        return (
            <EditContainer header="Font">
                <ChangeContentInputSelect
                    changeKeys={[changeKey + "fontFamily"]}
                    style="dashboard"
                    options={content.app.fonts}
                    value={content.site.pages[pageKey].modules[moduleKey].props.fontFamily}
                />
                <EditNumber
                    changeKeys={active.changeKeys}
                    value={active.value}
                />
            </EditContainer>
        )
    }    
}
module.exports = Radium(EditFont);