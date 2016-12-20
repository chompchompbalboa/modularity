/**
* ImageEditor.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardContainerSection = require('../../App/AppDashboardContainerSection/AppDashboardContainerSection');
const EditImage = require('../../lib/EditImage/EditImage');
const EditHeight = require('../../lib/EditHeight/EditHeight');
const EditPosition = require('../../lib/EditPosition/EditPosition');
const EditWidth = require('../../lib/EditWidth/EditWidth');

/**
* Image Editor
*
* @module ImageEditor
*/
class ImageEditor extends React.Component {

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
                <EditImage
                    content={content}
                    header="Image"
                    pageKey={pageKey}
                    moduleKey={moduleKey}
                />
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
                <EditPosition
                    content={content} 
                    pageKey={pageKey}
                    moduleKey={moduleKey}
                />
            </AppDashboardContainerSection>
        )
    }    
}
module.exports = Radium(ImageEditor);