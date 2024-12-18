import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID L5n_w_8__Hf9lYhYhZ0EpHX6J3STQ9O_bVgEZEy315E'
    },
    params: {
      query: 'cars'
    }
  });

  return response.data.results;
};

export default searchImages;
