import {EventEmitter} from 'events'
const CHANGE_EVENT = 'CHANGE'

export default class AppEventEmitter extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT)
  }
  addChangeListener(callback) {
    // the view will supply the callback. This line says "we are listening to your change event, and here is what I want to do when that event happens"
    this.on(CHANGE_EVENT, callback)
  }
  removeChangeListener(callback) {
    // the view will supply the callback. This line says "we are listening to your change event, and here is what I want to do when that event happens"
    this.removeListener(CHANGE_EVENT, callback)
  }
}
