/**
* EditBackgroundImage.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const Utils = require('../../../lib/Utils');

const EditContainer = require('../../lib/EditContainer/EditContainer');
const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');

/**
* Edit BackgroundImage
*
* @module EditBackgroundImage
*/
class EditBackgroundImage extends React.Component {

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
    * Settings for: _image
    *
    * @function _image
    * @return {object}
    */
    _image(content, pageKey, moduleKey) {
        let imageURL = content.site.pages[pageKey].modules[moduleKey].props.backgroundImage;
        return {
            style: {
                width: "calc(23.375vw - 2vh)",
                height: "calc(15.375vw)",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: Utils.buildBackgroundImage(imageURL)
            }
        }
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() { 
        let {content, header, pageKey, moduleKey, ...other} = this.props;
        let _image = this._image(content, pageKey, moduleKey);
        return (
            <EditContainer header={header} justifyContent="center">
                <ChangeContentLink
                    changes={[
                        {key: "app.state.AppDashboardEdit.position", value: "left"},
                        {key: "app.state.AppDashboardImages.position", value: "center"},
                        {key: "app.state.AppDashboardImages.page", value: pageKey},
                        {key: "app.state.AppDashboardImages.module", value: moduleKey}
                    ]}
                    style="image"
                >
                    <div style={_image.style}></div>
                </ChangeContentLink>
            </EditContainer>
        )
    }    
}
module.exports = Radium(EditBackgroundImage);