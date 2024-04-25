import { useEffect, useState } from 'react';

const useApi = () => {
	const [data, setData] = useState([]);
	const [url, setUrl] = useState('http://localhost:8000/countries');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);

			try {
				let response = await fetch(url);
				if (response.ok) {
					let results = await response.json();
					setData(results);
				} else {
					throw new Error(`Bad response: ${response.status}`);
				}
			} catch (error) {
				setIsError(true);
				console.error('custom-hooks: Could not fetch data:', error);
			}
			setIsLoading(false);
		};

		fetchData();
	}, [url]);

	return [{ data, isLoading, isError }, setUrl];
};

export { useApi };
