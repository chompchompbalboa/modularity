/**
* Image.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const Utils = require('../../../lib/Utils');

/**
* Image
*
* @module Image
*/
class Image extends React.Component {

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
    _div(container) {
        let width = this.props.width;
        let height = this.props.height;
        let position = this.props.position;
        return {
            style: {
                all: {
                    position: "relative",
                    display: "inline-flex",
                    verticalAlign: "top",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundImage: Utils.buildBackgroundImage(this.props.backgroundImage)
                },
                mobile: {
                    top: Utils.buildTop(container, position.mobile),
                    left: Utils.buildLeft(container, position.mobile),
                    width: Utils.buildVW(container, width.mobile),
                    height: Utils.buildVH(container, height.mobile),
                },
                tablet: {
                    top: Utils.buildTop(container, position.tablet),
                    left: Utils.buildLeft(container, position.tablet),
                    width: Utils.buildVW(container, width.tablet),
                    height: Utils.buildVH(container, height.tablet),
                },
                desktop: {
                    top: Utils.buildTop(container, position.desktop),
                    left: Utils.buildLeft(container, position.desktop),
                    width: Utils.buildVW(container, width.desktop),
                    height: Utils.buildVH(container, height.desktop),
                }
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
        let {container, ...other} = this.props;
        let _div = this._div(container);
        return (
            <div style={[_div.style[container.device], _div.style.all]}>
            </div>
        )
    }    
}
module.exports = Radium(Image);