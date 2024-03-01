export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options); // fetch url and provide additional options
    const data = await response.json(); // extract data

    return data;
}