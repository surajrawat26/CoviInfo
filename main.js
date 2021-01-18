var totcaseInd, totrecInd, totdedInd;
var totcase_wrld, totrec_wrld, totded_wrld;
var totcaseUsa, totrecUsa, totdedUsa;


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
	console.log(data[0]);
  totcaseInd = data.slice(-1)[0].Confirmed;
  document.querySelector("#totalCon_ind").innerHTML= totcaseInd;
  totrecInd = data.slice(-1)[0].Recovered;
  document.querySelector("#totalRec_ind").innerHTML = totrecInd;
  totdedInd = data.slice(-1)[0].Deaths;
  document.querySelector("#totalDie_ind").innerHTML =totdedInd;
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
	console.log(data[0]);
  totcaseUsa = data.slice(-1)[0].Confirmed;
  document.querySelector("#totalCon_usa").innerHTML= totcaseUsa;
  totrecUsa = data.slice(-1)[0].Recovered;
  document.querySelector("#totalRec_usa").innerHTML = totrecUsa;
  totdedUsa = data.slice(-1)[0].Deaths;
  document.querySelector("#totalDie_usa").innerHTML =totdedUsa;
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
  totrec_wrld = data.Global.TotalRecovered;
  document.querySelector("#totalRec_wrld").innerHTML = totrec_wrld;
  totded_wrld = data.Global.TotalDeaths;
  document.querySelector("#totalDie_wrld").innerHTML =totded_wrld;

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
