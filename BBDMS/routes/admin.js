var mysql = require("./mysql");



function addOplus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select opove from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{
			if(Results.length > 0){
				var dbBlood= Results[0].opove;
				Blood = +dbBlood + +Blood;
				var StringQuery= "update blood set opove="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
				}
			
			else{
				res.send("Error");
			}
		}
	},StringQuery);
};



function minusOplus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select opove from blood where bank_id=1";

	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{
				if(Results.length > 0){
					var dbBlood= Results[0].opove;
					Blood = +dbBlood - +Blood;
					var StringQuery= "update blood set opove="+Blood+" where bank_id=1";
					mysql.fetchData( function(error, Results){
					if(error){
						throw error;
					}
					else{
						if(Results.affectedRows > 0){
							
							res.send({"edit":"success"});
										}
						else{
							res.send({"edit":"not_success"});
						}
					}
				},StringQuery);
							}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);
};


function addOminus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select oneve from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].oneve;
				Blood = +dbBlood + +Blood;
				var StringQuery= "update blood set oneve="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);
};


function minusOminus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select oneve from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].oneve;
				Blood = +dbBlood - +Blood;
				var StringQuery= "update blood set oneve="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);};


function addAplus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select apove from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].apove;
				Blood = +dbBlood + +Blood;
				var StringQuery= "update blood set apove="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);
	};


function minusAplus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select apove from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].apove;
				Blood = +dbBlood - +Blood;
				var StringQuery= "update blood set apove="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);

};


function addAminus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select aneve from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].aneve;
				Blood = +dbBlood + +Blood;
				var StringQuery= "update blood set aneve="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);

};


function minusAminus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select aneve from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].aneve;
				Blood = +dbBlood - +Blood;
				var StringQuery= "update blood set aneve="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);

};


function addBplus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select bpove from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].bpove
				Blood = +dbBlood + +Blood;
				var StringQuery= "update blood set bpove="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);

};


function minusBplus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select bpove from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].bpove;
				Blood = +dbBlood - +Blood;
				var StringQuery= "update blood set bpove="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);

};


function addBminus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select bneve from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].bneve;
				Blood = +dbBlood + +Blood;
				var StringQuery= "update blood set bneve="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);

};


function minusBminus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select bneve from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].bneve;
				Blood = +dbBlood - +Blood;
				var StringQuery= "update blood set bneve="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);

};


function addABplus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select abpove from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].abpove;
				Blood = +dbBlood + +Blood;
				var StringQuery= "update blood set abpove="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);

};


function minusABplus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select abpove from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].abpove;
				Blood = +dbBlood - +Blood;
				var StringQuery= "update blood set abpove="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);
};


function addABminus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select abneve from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].abneve;
				Blood = +dbBlood + +Blood;
				var StringQuery= "update blood set abneve="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);

};



function minusABminus(req, res){
	var Blood = req.param("Blood");
	var bank_id = 1; // req.session.email;
	var StringQuery= "select abneve from blood where bank_id=1";
	
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{

			if(Results.length > 0){
				var dbBlood= Results[0].abneve;
				Blood = +dbBlood - +Blood;
				var StringQuery= "update blood set abneve="+Blood+" where bank_id=1";
				mysql.fetchData( function(error, Results){
				if(error){
					throw error;
				}
				else{
					if(Results.affectedRows > 0){
						
						res.send({"edit":"success"});
									}
					else{
						res.send({"edit":"not_success"});
					}
				}
			},StringQuery);
						}
			else{
				res.send("Error!!");
			}
		}
	},StringQuery);
};



function getBankInfo(req, res){
	//var bankID = req.session.bank_id;
	var StringQuery="select * from blood_bank  where bank_id=1";
	mysql.fetchData( function(error, Results){
		if(error){
			throw error;
		}
		else{
			if(Results.length>0){
				
				res.send(Results);
							}
			else{
				res.send({"User":"Not Found"});
			}
		}
	},StringQuery);
	
};



exports.addOplus=addOplus;
exports.minusOplus=minusOplus;
exports.addOminus=addOminus;
exports.minusOminus=minusOminus;
exports.addAplus=addAplus;
exports.minusAplus=minusAplus;
exports.addAminus=addAminus;
exports.minusAminus=minusAminus;
exports.addBplus=addBplus;
exports.minusBplus=minusBplus;
exports.addBminus=addBminus;
exports.minusBminus=minusBminus;
exports.addABplus=addABplus;
exports.minusABplus=minusABplus;
exports.addABminus=addABminus;
exports.minusABminus=minusABminus;
exports.getBankInfo=getBankInfo;