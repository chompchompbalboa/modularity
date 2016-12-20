/**
* AppDashboardOverviewNavigation.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const ChangeContentLink = require('../../lib/ChangeContentLink/ChangeContentLink');
/**
* App Dashboard OverviewNavigation
*
* @module AppDashboardOverviewNavigation
*/
class AppDashboardOverviewNavigation extends React.Component {

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
    * @return string
    */
    _div() {
        return {
            style: {
                margin: "1.5vh 0 0 0",
                width: "93vw",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between",
                alignItems: "center",
                "@media (min-width: 64em)": {
                    width: "23.375vw"
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
        var {content, ...other} = this.props;
        let _div = this._div();
        return (
            <div style={_div.style}>
                <ChangeContentLink
                    changes={[
                        {key: "app.state.AppDashboardNavigation.position", value: "center"},
                        {key: "app.state.AppDashboardOverview.position", value: "left"}
                    ]}
                    style="dashboard"
                    >
                    Edit
                </ChangeContentLink>
            </div>
        )
    }    
}
module.exports = Radium(AppDashboardOverviewNavigation);