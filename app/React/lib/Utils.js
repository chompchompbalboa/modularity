/**
* Utils.js
* @copyright thisismodularity.com, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*/

/**
* Utils
*
* A collection of utility functions for our app
*
* @module Utils
*/
var Utils = {

    /**
    * Build RGBA
    *
    * From an object of {r: #, g: #, b: #, a: #}, build a string "rgba(#, #, #, #)"
    *
    * @requires {object} color
    */
    buildRGBA(color) {
        return "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
    }   
}
module.exports = Utils;