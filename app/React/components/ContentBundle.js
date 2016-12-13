/**
* ContentBundle.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*/

import {StyleRoot} from 'radium';
var React = require('react');
var Radium = require('radium');

var contentStore = require('../stores/contentStore');
var contentActions = require('../actions/contentActions');

var App = require('./App/App');
var Site = require('./Site/Site');

/**
* The bundler for our react components.
*
* @module ContentBundle
*/
var ContentBundle = React.createClass({

    /**
    * @function getInitialState
    */
    getInitialState: function() {
        return {
            content: null
        };
    },

    /**
    * @function componentDidMount
    */
    componentDidMount: function() {
        //window.history.replaceState({content: this.state.content}, "", window.location.pathname);
        //window.addEventListener('popstate', (e) => contentActions.replaceContent(e.state.content));
        contentStore.addChangeListener(this._onChange); 
        contentActions.fetchContent("INITIAL_CONTENT");
    },

    /**
    * @function componentWillMount
    */
    componentWillUnmount: function() {
        //window.removeEventListener('popstate', (e) => contentActions.replaceContent(e.state.content));
        contentStore.removeChangeListener(this._onChange);
    },

    /**
    * @function _onChange
    */
    _onChange: function() {
      this.setState({
            content: contentStore.getContent()
      });
    },

    /**
    * @function render
    */
    render: function() {
        if(this.state.content !== null) {
            return (
                <StyleRoot>
                    <App content={this.state.content} />
                    <Site content={this.state.content} />
                </StyleRoot>
            ) 
        }
        else {
            return (
                <StyleRoot>
                    <section></section>
                </StyleRoot>
            ) 
        } 
    }    
});
module.exports = Radium(ContentBundle);