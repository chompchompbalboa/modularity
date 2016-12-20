/**
* EditText.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const Utils = require('../../../lib/Utils');

const ChangeContentInputTextArea = require('../../lib/ChangeContentInputTextArea/ChangeContentInputTextArea');
const EditContainer = require('../../lib/EditContainer/EditContainer');

/**
* Edit Text
*
* @module EditText
*/
class EditText extends React.Component {

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
        let changeKey = "site.pages." + pageKey + ".modules." + moduleKey + ".props.text";
        return (
            <EditContainer header={header} justifyContent="center">
                <ChangeContentInputTextArea
                    changeKeys={[changeKey]}
                    style="dashboard"
                    value={content.site.pages[pageKey].modules[moduleKey].props.text}
                />
            </EditContainer>
        )
    }    
}
module.exports = Radium(EditText);