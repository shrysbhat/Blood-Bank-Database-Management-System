var mysql = require("./mysql");
var ejs = require("ejs");
var crypto = require('crypto');
var hash = function (pass, salt) {
        var h = crypto.createHash('sha512');
        h.update(pass);
        h.update(salt);
        return h.digest('base64');
    };


function signUp(req, res){
	
	var bankName= req.param("bankName");
	var AdminName = req.param("AdminName");
	var AdminSurname = req.param("AdminSurname");
	var email = req.param("email");
	var password = req.param("password");
	var Address = req.param("Address");
	var zipcode = req.param("zipcode");
	var city = req.param("city");
	var state = req.param("state");
	var phone = req.param("phone");
	var encpassword = hash(password, email);
	var StringQuery = "insert into blood_bank (bank_name, admin_name, admin_surname,password, email, address, pin, city, state, contact) values( \'"+bankName+"\',\'"+AdminName+"\',\'"+AdminSurname+"\',\'"+encpassword+"\',\'"+email+"\',\'"+Address+"\',\'"+zipcode+"\',\'"+city+"\',\'"+state+"\',"+phone+")";
	console.log("query1"+StringQuery);
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{
			if(Results.affectedRows >0){
		var StringQuery = "select bank_id from blood_bank where email=\'"+email+"\'";
		console.log("query2"+StringQuery);
		mysql.fetchData( function(error, Results){
					if(error){
						throw error;
					}
					else{
						if(Results.length >0){
							var bankId = Results[0].bank_id;
							var StringQuery = "insert into blood (bank_id) values ("+bankId+")";
							console.log("query3"+StringQuery);
							mysql.fetchData( function(error, Results){
								if(error){
									throw error;
								}
								else{
									if(Results.affectedRows >0){
										
										res.send({"signup":"success"});
													}
									else{
										res.send("Error !!");
									}
								}
							},StringQuery);	
										}
						else{
							res.send("Error !!");
						}
					}
				},StringQuery);	
							}
			else{
				res.send("Error !!");
			}
		}
	},StringQuery);	

};


function Signedup(req,res)
{
	ejs.renderFile('./views/adminHome.ejs',function(err, result) {
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


function signIn(req, res){
	
	 var password = req.param("password");
	  var userName =req.param("userName");
	  var newHash = hash(password, userName);
	  console.log("password"+password);
	  console.log("new hash"+newHash);
	var StringQuery= "select email, password, bank_id from blood_bank where email =\'"+userName+"\'";
	mysql.fetchData( function(error, results){
		if(error){
			throw error;
		}
		else{
			console.log("results.pwd"+results[0].password);
			if(results[0].password == newHash){
				console.log("results.pwd"+results[0].password);
				req.session.bank_id= results[0].bank_id;
				res.send({"user":"valid"});
			}
			else{
				res.send({"user":"invalid"});
			}
		}
	},StringQuery);
};




exports.signUp=signUp;
exports.Signedup=Signedup;
exports.signIn=signIn;