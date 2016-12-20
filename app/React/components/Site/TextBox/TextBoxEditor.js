/**
* TextBoxEditor.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardContainerSection = require('../../App/AppDashboardContainerSection/AppDashboardContainerSection');
const EditFont = require('../../lib/EditFont/EditFont');
const EditPosition = require('../../lib/EditPosition/EditPosition');
const EditText = require('../../lib/EditText/EditText');
const EditWidth = require('../../lib/EditWidth/EditWidth');

/**
* TextBox Editor
*
* @module TextBoxEditor
*/
class TextBoxEditor extends React.Component {

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
        let {content, pageKey, moduleKey, ...other} = this.props;
        return (
            <AppDashboardContainerSection> 
                <EditText
                    content={content}
                    header="Text"
                    pageKey={pageKey}
                    moduleKey={moduleKey}
                /> 
                <EditFont
                    content={content} 
                    pageKey={pageKey}
                    moduleKey={moduleKey}
                />
                <EditWidth
                    content={content} 
                    pageKey={pageKey}
                    moduleKey={moduleKey}
                /> 
                <EditPosition
                    content={content} 
                    pageKey={pageKey}
                    moduleKey={moduleKey}
                />
            </AppDashboardContainerSection>
        )
    }    
}
module.exports = Radium(TextBoxEditor);