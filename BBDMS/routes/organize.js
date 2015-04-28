var mysql = require("./mysql");
var ejs = require("ejs");

exports.getViewEvents = function(req, res){
	console.log("inside get events");
	res.render('ViewEvents');
};




function organizeEvent(req, res){
	 //var eventName = req.param("eventName");
	 var date = req.param("date");
	  var eventAddress =req.param("eventAddress");
	  var city =req.param("city");
	  var state =req.param("state");
	  var contact =req.param("contact");
	  var description =req.param("description");
	  
	var StringQuery= "insert into events (event_name, date, address, city, state, contact, description) values(/'"+eventName+"/', /'"+date+"/',/'"+eventAddress+"/', /'"+city+"/', /'"+state+"/', /'"+contact+"/', /'"+description+"/'  )";
	mysql.fetchData( function(error, results){
		if(error){
			throw error;
		}
		else{
			if(response.affectedRows > 0){
				
				response.send(results);
			}
			else
				{
				response.send("Error occured !!");
				
				}
		}
	},StringQuery);
};

exports.getOrganizePage = function(req, res){
	var StringQuery = "select * from blood_bank where bank_id= 1";
	mysql.fetchData( function(error, Results){
	if(error){
		throw error;
	}
	else{
		if(Results.length>0){
			res.send(Results);
						}
		else{
			res.send("Error !!");
		}
	}
},StringQuery);

};




exports.getViewEvents = function(req, res){
	var StringQuery = "select * from blood_bank where bank_id= 1";
	mysql.fetchData( function(error, Results){
	if(error){
		throw error;
	}
	else{
		if(Results.length>0){
			res.send(Results);
						}
		else{
			res.send("Error !!");
		}
	}
},StringQuery);

};


function OrganizeEventspage(req,res)
{
	ejs.renderFile('./views/OrganizeEvent.ejs',function(err, result) {
        // render on success
        if (!err) {

            res.end(result);
        }
        // render or error
        else {
        	
        	res.end('An error occurred');
            console.log(err);
        }
    });
};

function getEventspage(req,res)
{
	ejs.renderFile('./views/ViewEvents.ejs',function(err, result) {
        // render on success
        if (!err) {

            res.end(result);
        }
        // render or error
        else {
        	
        	res.end('An error occurred');
            console.log(err);
        }
    });
};



exports.organizeEvent=organizeEvent;
exports.OrganizeEventspage=OrganizeEventspage;
exports.getEventspage=getEventspage;
