const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
	method: 'GET',
	headers: {
		// 'X-RapidAPI-Key': '74effe98camsh38382f4f7663d25p144a76jsn3f5df8050ae8',
        'X-RapidAPI-Key': '2ba5ca3313msh07af1dac2f9a7e6p1ecef7jsn9c71aa8a34a5',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchFromAPI = async (url) => {
    try {
        const response = await fetch(`${BASE_URL}/${url}`, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error("error", error);
    }
}

export default fetchFromAPI
