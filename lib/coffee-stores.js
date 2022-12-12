import { createApi } from 'unsplash-js';

//Constante que armazena a chave daAPI do Unsplash;
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

//Constante que realiza a requisição para a API do FOURSQUARE
const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async () => {
  //Faz uma requisição de busca na APIdo UNSPLASH para buscar fotos de cafeterias randômicas para preencher os cards;
  const photos = await unsplashApi.search.getPhotos({
    query: 'coffee shop',
    perPage: 30,
  });
  const unsplashResults = photos.response?.results || [];
  return unsplashResults.map((result) => result.urls["small"]);
}

export const fetchCoffeeStores = async (latLong = "-32.03344935963646,-52.09834152226488", limit = 6) => {

  const photos = await getListOfCoffeeStorePhotos();

  //Autorizações de requisição para a API do Foursquare;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    }
  };

  //Requisição das coffee shops para a API do Foursquare;
  const response = await fetch(getUrlForCoffeeStores(latLong, "caf%C3%A9", limit), options);
  const data = await response.json();
  return data.results.map((result, idx) => {
    return {
      id: result.fsq_id,
      address: result.location.address ?? "",
      name: result.name,
      locality: result.location.locality,
      imgUrl: photos.length > 0 ? photos[idx] : null,
    };
  });
};