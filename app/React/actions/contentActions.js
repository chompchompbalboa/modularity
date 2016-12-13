/**
* contentActions.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires ContentDispatcher
*/

var ContentDispatcher = require('../dispatcher/ContentDispatcher');

/**
* Define the actions that shape the content
*
* @module contentActions
*/
var contentActions = {

    /**
    * Change nested content within the store
    * 
    * @function changeContent
    * @param {object} changes - The desired changes
    */
    changeContent: function(changes){
        ContentDispatcher.handleAction({
            actionType: "CHANGE_CONTENT",
            data: changes
        });
    },

    /**
    * Change nested content within the store, without pushing the change to 
    * the window history
    * 
    * @function changeContent
    * @param {object} changes - The desired changes
    */
    changeContentNoHistory: function(changes){
        ContentDispatcher.handleAction({
            actionType: "CHANGE_CONTENT_NOHISTORY",
            data: changes
        });
    },

    /**
    * Fetch content from the server
    * 
    * @function fetchContent
    */
    fetchContent: function(request, data){
        this._ajax(request, data);
    },

    /**
    * Send a request to the server via AJAX
    * 
    * @function _ajax
    * @param {string} request
    */
    _ajax: function(request, data) {
        $.ajax({
            method: "POST",
            url: "/api",
            headers: {
                'X-CSRF-TOKEN': this._token()
            },
            data: {
                data: this._data(data),
                request: request
            },
            dataType: 'json',
            cache: false,
            success: function(response) {
                ContentDispatcher.handleAction({
                    actionType: "CHANGE_CONTENT",
                    data: response
                });
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(status, err.toString());
            }.bind(this)
        });
    },

    /**
    * Get information about the current url
    * 
    * @function _currentURL
    * @return {string}
    */
    _currentURL: function() {
        var currentURL = {
            domain: window.location.hostname,
            path: window.location.pathname
        };
        return JSON.stringify(currentURL);
    },

    /**
    * Build the data object for an AJAX request
    * 
    * @function _data
    * @return {string}
    */
    _data: function(data) {
        if (typeof data === "undefined") {
            data = {};
        }
        data.url = this._currentURL();
        return JSON.stringify(data);
    },

    /**
    * Get the current XSRF token
    * 
    * @function _token
    * @return {string}
    */
    _token: function() {
        var token = $('meta[name="_token"]').attr('content');
        return token;
    }
};
module.exports = contentActions;