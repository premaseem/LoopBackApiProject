/**
 * Created by asee2278 on 7/23/17.
 */
'use strict';
module.exports = function(app){
  app.datasources.mongodb.autoupdate(["Product",["Category"],["Account"],["Company"]]);
}


