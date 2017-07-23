/**
 * Created by asee2278 on 7/23/17.
 */
'use strict';
module.exports = function(app){
  app.datasources.mysql.automigrate('Product')


//  app.datasources.mysql.automigrate('Product',err => {
//    if(err) throw err;
//  console.log('Models Synced');
//  })
//}
