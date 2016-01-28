var AppDispatcher = require('../dispatchers/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var CommonActions = require('../actions/CommonActions');

var flag = true;
var data1 = {
        'fullname' : "",
        'email' : "",
        'headline' : "",
        'skills' : "",
        'blog' : ""
      };
var CHANGE_EVENT = 'change';

var mainstore = objectAssign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    setFlag : function(){
      if(flag == false)
        flag = true;
      else{
        flag = false
      }
    },
    getFlag : function(){ 
      return flag;
    },
    setData:function(data){
      data1 = data;     
    },
    getData : function(){
      console.log("in");
      console.log(data1);
      return  data1;
    },
    updateData:function(data){
      if(data!=undefined)
        data1 = data;
    }
  });


AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    
    case appConstants.SAVE_DATA:
      mainstore.setFlag();
      mainstore.setData(action.data);
      mainstore.emit(CHANGE_EVENT);
      break;
      case appConstants.DISPLAY_DATA:
      mainstore.setFlag();
      mainstore.emit(CHANGE_EVENT);
      break;
       case appConstants.UPDATE_DATA:
      mainstore.updateData();
      mainstore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = mainstore;