/**
* EditContainer.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const AppDashboardContainerSectionHeader = require('../../App/AppDashboardContainerSectionHeader/AppDashboardContainerSectionHeader');

/**
* Edit Container
*
* @module EditContainer
*/
class EditContainer extends React.Component {

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
        justifyContent: "space-between"
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
                marginTop: "2vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }
        }
    }

    /**
    * Settings for: _container
    *
    * @function _container
    * @return {object}
    */
    _container(justifyContent) {
        return {
            style: {
                backgroundColor: "rgba(25,25,25,0.7)",
                borderRadius: "10px",
                padding: "1vh",
                margin: "1vh 0 0 0",
                width: "calc(100% - 1vh)",
                fontSize: "0.85em",
                display: "flex",
                justifyContent: justifyContent,
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
        let {children, header, justifyContent, ...other} = this.props;
        let _div = this._div();
        let _container = this._container(justifyContent);
        return (
            <div style={_div.style}>
                <AppDashboardContainerSectionHeader text={header}/>
                <div style={_container.style}>
                    {children}
                </div>
            </div>
        )
    }    
}
module.exports = Radium(EditContainer);