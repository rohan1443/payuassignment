var AppDispatcher = require('../dispatchers/AppDispatcher');
var appConstants = require('../constants/appConstants');

var commonActions = {
 
  saveData: function(data){
    AppDispatcher.handleAction({
      actionType: appConstants.SAVE_DATA, 
      data: data
    });
  },
  displayData: function(data){
  	console.log(data);
    AppDispatcher.handleAction({
      actionType: appConstants.DISPLAY_DATA, 
      data: data
    });
  },
  updateData:function(data){
    AppDispatcher.handleAction({
      actionType: appConstants.UPDATE_DATA, 
      data: data
    });
  }

};

module.exports = commonActions;