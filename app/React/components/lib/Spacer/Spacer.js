/**
* Spacer.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

/**
* App DashboardDocked
*
* @module Spacer
*/
class Spacer extends React.Component {

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
    _div(height) {
        return {
            style: {
                width: "100%",
                height: height.sm,
                "@media (min-width: 48em) and (max-width: 64em)": {
                    height: height.md
                },
                "@media (min-width: 64em)": {
                    height: height.lg
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
        let {height, ...other} = this.props;
        let _div = this._div(height);
        return (
            <div style={_div.style}></div>
        )
    }    
}
module.exports = Radium(Spacer);