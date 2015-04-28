var mysql = require("./mysql");
var ejs = require("ejs");


function getBloodInfo(req, res){
	var blood = req.param("Blood");
	console.log("blood"+ blood);
	var city = req.param("cityName");
	if (blood == 'A +ve')
	{	
	var StringQuery = "select bank_name, address, city, state, contact, apove from blood, blood_bank where city=\'"+city+"\' and blood.bank_id=blood_bank.bank_id";
	}
	
	else if (blood == 'A -ve')
	{	
	var StringQuery = "select bank_name, address, city, state, contact, aneve from blood, blood_bank where city=\'"+city+"\' and blood.bank_id=blood_bank.bank_id";
	}
	
	else if (blood == 'B +ve')
	{	
	var StringQuery = "select bank_name, address, city, state, contact, bpove from blood, blood_bank where city=\'"+city+"\' and blood.bank_id=blood_bank.bank_id";
	}
	
	if (blood == 'B -ve')
	{	
	var StringQuery = "select bank_name, address, city, state, contact, bneve from blood, blood_bank where city=\'"+city+"\' and blood.bank_id=blood_bank.bank_id";
	}
	
	if (blood == 'AB +ve')
	{	
	var StringQuery = "select bank_name, address, city, state, contact, abpove from blood, blood_bank where city=\'"+city+"\' and blood.bank_id=blood_bank.bank_id";
	}
	
	if (blood == 'AB -ve')
	{	
	var StringQuery = "select bank_name, address, city, state, contact, abneve from blood, blood_bank where city=\'"+city+"\' and blood.bank_id=blood_bank.bank_id";
	}
	
	if (blood == 'O +ve')
	{	
	var StringQuery = "select bank_name, address, city, state, contact, opove from blood, blood_bank where city=\'"+city+"\' and blood.bank_id=blood_bank.bank_id";
	}
	
	else
	{	
	var StringQuery = "select bank_name, address, city, state, contact, oneve from blood, blood_bank where city=\'"+city+"\' and blood.bank_id=blood_bank.bank_id";
	}
	
	console.log(StringQuery);
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{
			if(Results.length>0){
				console.log(Results);
				res.send(Results);
							}
			else{
				res.send("Error !!");
			}
		}
	},StringQuery);
	
};

exports.getSignup = function(req, res){
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

function successSignup(req,res)
{
	ejs.renderFile('./views/SignUp.ejs',function(err, result) {
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

exports.getSignin = function(req, res){
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

function successLoginPage(req,res)
{
	ejs.renderFile('./views/Login.ejs',function(err, result) {
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





exports.getBloodInfo=getBloodInfo;
exports.successSignup=successSignup;
exports.successLoginPage=successLoginPage;