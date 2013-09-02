function (doc) {
	if(doc._id.substr(0, 7) === "member:"){
		emit(doc._id.substr(9), {
			"fname": doc.name,
			"lname": doc.burn,
			"email": doc.type,
			"notes": doc.length
			
		});
	}
}