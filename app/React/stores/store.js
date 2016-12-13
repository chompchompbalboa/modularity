/**
* store.js
* @copyright simplespot.co, 2016-Present. All Rights Reserved.
* @author Rocky Eastman Jr. <eastmanrjr@gmail.com>
*/

/**
* This module implements shared functionality between the stores
*
* @module store
*/
var store = {

    /**
    * Change any nested content within the store object. This creates a copy of 
    * the current store and manipulates that rather than acting directly on an
    * object I generally try and consider immutable
    * 
    * @function changeContent
    * @param {object} changes - The changes to be made within the store object
    * @return {object}
    */
    changeContent: function(changes, content){
        var newStore = jQuery.extend(true, {}, content);
        for(var change in changes) {
          newStore = this._changeStoreCopy(newStore, changes[change]);
        }
        return newStore;
    }, 

    /**
    * Make the desired change to a copy of the store object
    * 
    * @function _changeStoreCopy
    * @param {object} currentStoreCopy - A copy of the current store
    * @param {object} change - A key:value pair identifying the desired change
    * @return {object}
    */
    _changeStoreCopy: function(currentStoreCopy, change) {
        // Access parameters
        var currentStoreKey = change.key;
        var StoreValue = change.value;
        // Initialize variables
        var newStore = {};
        var currentKey = currentStoreKey.split('.').shift();
        var lastKey = currentStoreKey.split('.').pop();
        var splitKey = currentStoreKey.split('.');
        splitKey.shift();
        var nextKey = splitKey.join('.');
        var nextStoreCopy = currentStoreCopy[currentKey];
        // If we have hit the last level of nesting, we just need to set the value
        if(splitKey.unshift(nextKey) == 1) {
            // Add the value to the current version of our store copy
            currentStoreCopy[currentStoreKey] = StoreValue;
            // Set the new store
            newStore = currentStoreCopy;
        }
        // If not, we need to set all the values for that current level and recurse
        // the current key back through this function
        else {
          // Since we need to rebuild the entire store outside of what we are
          // changing, we need to know the keys for the current level of nesting 
          var currentLevelKeys = Object.keys(currentStoreCopy);
          var currentLevelKeysLength = currentLevelKeys.length;
          // For each of those keys
          for (var i = 0; i < currentLevelKeysLength; i++) {
            // If it matches the key we are currently trying to change
            if(currentLevelKeys[i] == currentKey) {
              // Initialize parameters
              var parameters = {};
              // Set parameters
              parameters.key = nextKey;
              parameters.value = StoreValue;
              // Recurse
              newStore[currentKey] = this._changeStoreCopy(nextStoreCopy, parameters);
            }
            // If not
            else {
              // Set that key to it's current value
              newStore[currentLevelKeys[i]] = currentStoreCopy[currentLevelKeys[i]];
            }
          }
        }
        // Return the new store
        return newStore;   
    }
};
module.exports = store;