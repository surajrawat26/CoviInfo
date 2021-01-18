var totcaseInd, totrecInd, totdedInd, newcaseInd, newrecInd, newdedInd;
var totcase_wrld, totrec_wrld, totded_wrld, newcase_wrld, newrec_wrld, newded_wrld;
var totcaseUsa, totrecUsa, totdedUsa, newcaseUsa, newrecUsa, newdedUsa;


//for india

fetch('https://api.covid19api.com/total/country/india').then(function (response) {
	// The API call was successful!
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
	// This is the JSON from our response

	console.log(data);
  totcaseInd = data.slice(-1)[0].Confirmed;
  document.querySelector("#totalCon_ind").innerHTML= totcaseInd;
	newcaseInd = totcaseInd-data.slice(-2)[0].Confirmed;
	document.querySelector("#addCon_ind").innerHTML= "+"+newcaseInd;
  totrecInd = data.slice(-1)[0].Recovered;
  document.querySelector("#totalRec_ind").innerHTML = totrecInd;
	newrecInd = totrecInd-data.slice(-2)[0].Recovered;
	document.querySelector("#addRec_ind").innerHTML= "+"+newrecInd;
  totdedInd = data.slice(-1)[0].Deaths;
  document.querySelector("#totalDie_ind").innerHTML =totdedInd;
	newdedInd = totdedInd-data.slice(-2)[0].Deaths;
	document.querySelector("#addDie_ind").innerHTML= "+"+newdedInd;
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});


//for usa

fetch('https://api.covid19api.com/total/country/usa').then(function (response) {
	// The API call was successful!
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
	// This is the JSON from our response
	console.log(data.slice(-2)[0]);
	console.log(data.slice(-1)[0]);
  totcaseUsa = data.slice(-1)[0].Confirmed;
  document.querySelector("#totalCon_usa").innerHTML= totcaseUsa;
	newcaseUsa = totcaseUsa-data.slice(-2)[0].Confirmed;
	document.querySelector("#addCon_usa").innerHTML= "+"+newcaseUsa;
  totrecUsa = data.slice(-1)[0].Recovered;
  document.querySelector("#totalRec_usa").innerHTML = totrecUsa;
	newrecUsa = totrecUsa-data.slice(-2)[0].Recovered;
	document.querySelector("#addRec_usa").innerHTML= "+"+newrecUsa;
  totdedUsa = data.slice(-1)[0].Deaths;
  document.querySelector("#totalDie_usa").innerHTML =totdedUsa;
	newdedUsa = totdedUsa-data.slice(-2)[0].Deaths;
	document.querySelector("#addDie_usa").innerHTML= "+"+newdedUsa;
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});





//for the world

fetch('https://api.covid19api.com/summary').then(function (response) {
	// The API call was successful!
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
	// This is the JSON from our response
	console.log(data.Global);
  totcase_wrld = data.Global.TotalConfirmed;
  document.querySelector("#totalCon_wrld").innerHTML= totcase_wrld;
	newcase_wrld = data.Global.NewConfirmed;
  document.querySelector("#addCon_wrld").innerHTML= "+"+newcase_wrld;
  totrec_wrld = data.Global.TotalRecovered;
  document.querySelector("#totalRec_wrld").innerHTML = totrec_wrld;
	newrec_wrld = data.Global.NewRecovered;
  document.querySelector("#addRec_wrld").innerHTML = "+"+newrec_wrld;
  totded_wrld = data.Global.TotalDeaths;
  document.querySelector("#totalDie_wrld").innerHTML =totded_wrld;
	newded_wrld = data.Global.NewDeaths;
  document.querySelector("#addDie_wrld").innerHTML ="+"+newded_wrld;


}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
