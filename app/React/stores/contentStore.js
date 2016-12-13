/**
* contentStore.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*
* @requires ContentDispatcher
* @requires objectAssign
* @requires EventEmitter
* @requires store
*/
var ContentDispatcher = require('../dispatcher/ContentDispatcher');
var objectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var store = require('./store');

/**
* Set the initial store value
* 
* @type {object}
*/
var _store = {
    content: {}
};

/**
* Set the constant identifying change events
* 
* @constant
* @type {string}
*/
var CHANGE_EVENT = 'change';

/**
* Determine the active bundle
* 
* @return {string}
*/
var activeBundle = function() {
    switch(window.location.hostname) {
        case "simplespot.local":
        case "simplespot.com":
            return "app"
        break;
        default:
            return "site"
    }

};

/**
* Change any nested content within the store object
* 
* @function changeContent
* @param {object} changes - The changes to be made within the store object
*/
var changeContent = function(changes){
    _store.content = store.changeContent(changes, _store.content);
};

/**
* Update the store by replacing it in its entireity
* 
* @function replaceContent
* @param {object} content - The new store
*/
var replaceContent = function(content) {
    _store.content = content;
};

/**
* Set the methods that track changes to the store and emit events to the
* the registered listeners
*/
var contentStore = objectAssign({}, EventEmitter.prototype, {

    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },

    getContent: function(){
        return _store.content;
    }

});

/**
* Register the store with the dispatcher
*/
contentStore.dispatchToken = ContentDispatcher.register(function(payload){

    var action = payload.action;

    switch(action.actionType){
        case "CHANGE_CONTENT":
            changeContent(action.data);
            contentStore.emit(CHANGE_EVENT);
        break;
        case "CHANGE_CONTENT_NOHISTORY":
            changeContentNoHistory(action.data);
            contentStore.emit(CHANGE_EVENT);
        break;
        case "REPLACE_CONTENT":
            replaceContent(action.data);
            contentStore.emit(CHANGE_EVENT);
        break;
        default:
            return true;
    }
});
module.exports = contentStore;