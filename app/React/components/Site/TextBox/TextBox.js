/**
* TextBox.js
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
* Text Box
*
* @module TextBox
*/
class TextBox extends React.Component {

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
        let position = this.props.position;
        let fontFamily = this.props.fontFamily;
        let fontSize = this.props.fontSize;
        return {
            style: {
                all: {
                    position: "relative",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    verticalAlign: "top",
                    textAlign: "justify",
                    fontFamily: Utils.buildFontFamily(fontFamily)
                },
                mobile: {
                    top: Utils.buildTop(container, position.mobile),
                    left: Utils.buildLeft(container, position.mobile),
                    width: Utils.buildVW(container, width.mobile),
                    fontSize: Utils.buildFontSize(container, fontSize.mobile)
                },
                tablet: {
                    top: Utils.buildTop(container, position.tablet),
                    left: Utils.buildLeft(container, position.tablet),
                    width: Utils.buildVW(container, width.tablet),
                    fontSize: Utils.buildFontSize(container, fontSize.tablet)
                },
                desktop: {
                    top: Utils.buildTop(container, position.desktop),
                    left: Utils.buildLeft(container, position.desktop),
                    width: Utils.buildVW(container, width.desktop),
                    fontSize: Utils.buildFontSize(container, fontSize.desktop)
                }
            }
        }
    }

    /**
    * Settings for: _inner
    *
    * @function _inner
    * @return {object}
    */
    _inner(container) {
        return {
            style: {
                all: {
                },
                mobile: {
                    width: "90%",
                },
                tablet: {
                    width: "92.5%",
                },
                desktop: {
                    width: "95%",
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
        let _inner = this._inner(container);
        return (
            <div style={[_div.style[container.device], _div.style.all]}>
                <div style={[_inner.style[container.device], _inner.style.all]}>
                    {this.props.text}
                </div>
            </div>
        )
    }    
}
module.exports = Radium(TextBox);