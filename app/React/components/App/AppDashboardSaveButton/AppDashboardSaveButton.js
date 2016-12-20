/**
* AppDashboardSaveButton.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires React
* @requires Radium
*/
const React = require('react');
const Radium = require('radium');

const contentActions = require('../../../actions/contentActions');

const ContentActionLink = require('../../lib/ContentActionLink/ContentActionLink');
/**
* App Dashboard Save Button
*
* @module AppDashboardSaveButton
*/
class AppDashboardSaveButton extends React.Component {

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
    * Reset the save button
    *
    * @function status
    * @return string
    */
    resetButton() {
        let changes = [
            {key: "app.state.save", value: "ready"}
        ];
        contentActions.changeContent(changes);
    }

    /**
    * Settings for: status
    *
    * @function status
    * @return string
    */
    status(state) {
        let status = {
            text: "SAVE SITE",
            style: "save"
        };
        switch(state) {
            case "saving":
                status.text = "SAVING...";
                status.style = "saving";
            break;
            case "success":
                status.text = "SAVED!";
                status.style = "save-success";
                window.setTimeout(this.resetButton, 1000);
            break;
            case "failed":
                status.text = "SAVE FAILED - PLEASE TRY AGAIN";
                status.style = "save-fail";
                window.setTimeout(this.resetButton, 3500);
            break;
        }
        return status
    }

    /**
    * Render the component
    *
    * @function render
    * @return {string}
    */
    render() {
        var {content, ...other} = this.props;
        let status = this.status(content.app.state.save);
        return (
            <ContentActionLink
                action="saveSite"
                content={content}
                info={{
                }}
                style={status.style}
            >
                {status.text}
            </ContentActionLink>
        )
    }    
}
module.exports = Radium(AppDashboardSaveButton);