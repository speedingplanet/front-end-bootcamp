let url = 'http://localhost:8000/countries';

async function getData() {
	try {
		let response = await fetch(url);
		if (response.ok) {
			let results = await response.json();
			return results;
		} else {
			throw new Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.error('async-await: Could not fetch data:', error);
	}
}

async function getDataWithCallback(callback) {
	try {
		let results = await getData();
		callback(results);
	} catch (error) {
		console.error('async-await: Could not fetch data:', error);
	}
}

let dao = {
	getData,
	getDataWithCallback,
};

export { dao };
