//API que utiliza o AIRTABLE para captar dados de uma página renderizada no servidor e servir as páginas dinâmicas que forem renderizadas no lado do cliente;

import { getMinifiedRecords, table, findRecordByFilter } from "../../lib/airtable";

//Essa função busca o dado no DB pela chave ID, se ele já constar no DB então os dados não são guardados, se não houver os dados são salvos como uma nova entrada;
const createCoffeeStore = async (req, res) => {

  if(req.method === "POST"){

    const { id, name, locality, address, imgUrl, voting} = req.body;

    try{
      if(id){
        //find a record
        const records = await findRecordByFilter(id);

        if(records.length !== 0){
          res.json(records);
        }else{
          //create a record
          if(name){
            const createRecords = await table.create([
              {
                fields: {
                  id,
                  name,
                  address,
                  locality,
                  voting,
                  imgUrl
                }
              }
            ])
    
            const records = getMinifiedRecords(createRecords);
            res.json(records);
          }else{
            res.status(400)
            res.json({message: "Id or Name is missing"});
          }
        }
      }else{
        res.status(400)
        res.json({message: "Id is missing"});
      }
      
    }catch(err) {
      console.log("Error creating or finding a store", err);
      res.status(500);
      res.json({message: "Error creating or finding a store", err});
    }
  }
}

export default createCoffeeStore;