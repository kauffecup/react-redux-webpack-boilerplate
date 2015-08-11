import {EventEmitter} from 'events';
import assign         from 'object-assign';

var CHANGE_EVENT = 'change';

/**
 * A base class store that all other stores will inherit from
 */
var _Store = assign({}, EventEmitter.prototype, {
  /** ... emit a change event! */
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /** @param {function} callback */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /** @param {function} callback */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

module.exports = _Store;
