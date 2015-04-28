var mysql = require('mysql');


var p_stack = [];
var queueforwaiting = [];
var poolMaxsize = 1000; 
var starts = 0;

for(var i = 0; i < poolMaxsize; i++){
	var conn = getConnection();
	p_stack.push(conn);
}

function getConnection(){
	var connection = mysql.createConnection({
		host     : 'localhost',
	    user     : 'root',
	    password : '',
	    database : 'bbdbms'
	});
	return connection;
}

function getConnectionFromPool(){
	var conn = p_stack.pop();
	return conn;
}

function releaseConnection(conn){
	p_stack.push(conn);
}

function fetchData(callback,myquery){
	
	var connection = getConnectionFromPool();	
		
		conn.query(myquery, function(error, Results){
			
			if(error){
				
				console.log("We are in putUser error!!");
				throw error;
			}
			else
				{
				
				callback(error, Results );
				
				}
	
	});
	}

exports.fetchData=fetchData;