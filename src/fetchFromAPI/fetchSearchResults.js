const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74effe98camsh38382f4f7663d25p144a76jsn3f5df8050ae8',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchFromAPI = async (url) => {
    try {
        const URL = `${BASE_URL}/search?q=${url}&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date`
        const response = await fetch(URL, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error("error", error);
    }
}

export default fetchFromAPI
