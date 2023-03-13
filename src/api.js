import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID sejHu0VljAXv-wgstnkaAKC41rEHG4-T38h3MXr9FDQ'
    },
    params: {
      query: term
    },
  })
  
  return response.data.results
}

export default searchImages

