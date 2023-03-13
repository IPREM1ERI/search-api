import axios from "axios";

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    hearders: {
      Authorization: 'Client-ID sejHu0VljAXv-wgstnkaAKC41rEHG4-T38h3MXr9FDQ'
    },
    params: {
      query: 'cars'
    }
  })

  return response
}

export default searchImages

