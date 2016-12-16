/**
* EditHeight.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardContainerSectionHeader = require('../../App/AppDashboardContainerSectionHeader/AppDashboardContainerSectionHeader');
const ChangeContentInputText = require('../../lib/ChangeContentInputText/ChangeContentInputText');
const EditNumber = require('../../lib/EditNumber/EditNumber');

/**
* Edit Height
*
* @module EditHeight
*/
class EditHeight extends React.Component {

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
            style: {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
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
        let {content, pageKey, moduleKey, ...other} = this.props;
        let _div = this._div();
        let changeKey = "site.pages." + pageKey + ".modules." + moduleKey + ".props";
        return (
            <div style={_div.style}>
                Height 
                <EditNumber
                    changeKeys={[changeKey + ".height"]}
                    value={content.site.pages[pageKey].modules[moduleKey].props.height}
                />
            </div>
        )
    }    
}
module.exports = Radium(EditHeight);