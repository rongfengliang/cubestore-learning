var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'demoapp'
});
 
connection.connect();
 
connection.query('select * from dev_pre_aggregations.oc_order_main_tyccmc1j_dfnarpsv_1g8ppb2', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();