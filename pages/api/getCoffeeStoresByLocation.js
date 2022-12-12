//SERVERLESS FUNCTION

import { fetchCoffeeStores } from "../../lib/coffee-stores";

//Serverless Function para pegar da API as coffee stores pela localização do usuário;
const getCoffeeStoresByLocation = async (req,res) => {
  
  //Configure latLong and limit;
  try {
  const{ latLong, limit } = req.query;
  const response = await fetchCoffeeStores(latLong, limit);
  res.status(200);
  res.json(response);
  }catch(err){
    console.error("There is an error" , err)
    res.status(500);
    res.json({message: "Oh no! Something went wrong", err});
  }
}

export default getCoffeeStoresByLocation;