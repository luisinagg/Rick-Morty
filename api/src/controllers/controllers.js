const axios  = require("axios");
const { Episode, Character } = require ('../db');


//----funcion externa para tener los nombres de los episodios--
//-- en caso de usarla solo pongo el nombre de la func en el episode y le paso las url, q las guardo en una variable
async function auxNamesEpisodes(arr){
    let result=arr.map(async cur=>{
        let {data}= await axios.get(cur);
        return data.name;
    })
    let r = await Promise.all(result)
    console.log(r)
    return r;
};

const getCharacters = async ()=>{
    let db = await Character.findAll({
        include:{
            model: Episode,
            attribute:["name"],
            through:{
                attributes:[],
            }
        }
    })
    

    const characterDbLimp = db.map(cur => cur.dataValues);
       
    const limp = characterDbLimp.map(cur =>{
        
        return {
            id: cur.id,
            name: cur.name,
            species: cur.species,
            origin: cur.origin,
            image: cur.image,
            created: cur.created,
            episode: cur.episodes.length
        }
    
        
    })


    const {data} = await axios.get('https://rickandmortyapi.com/api/character');
    const formatCharacters = data.results;
    const characters = await Promise.all(
        formatCharacters.map ( async character =>{
        
        return {
            id: character.id,
            name: character.name,
            species: character.species,
            origin: character.origin.name,
            image: character.image,
            created: character.created,
            episode: character.episode.length
                
        }   
        
    })
  )

  const suma = limp.concat(characters)
    return suma
  
}


// GET /episodes:
//     - Debe devolver un listado con todos los episodios 
//     - En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
const getEpisodes = async () => {
    let Episodes = await Episode.findAll();
    
    if (Episodes.length !== 0){
    let format = Episodes.map(cur=> cur.dataValues)
    return format;

    }else{
    const apiUrlEp = await axios.get('https://rickandmortyapi.com/api/episode');
    const formatEpisodes = apiUrlEp.data.results.map (epi =>{
        return {
            name: epi.name
        }
    })
    
        formatEpisodes.forEach (async e => {await Episode.create(e)})
        return "todo ok"

    }
}

    
 

// POST /character:
//     - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de personaje 
//     - Crea un personaje en la BDD
const createCharacter = async ( name, species, origin, created, image, episode) =>{
    
    const newCharacter = await Character.create({
        
        name: name,
        species: species,
        origin: origin,
        created: created,
        image: image
    })
    await newCharacter.addEpisodes(episode)
    return {
        msg: "todo peola"
    }
}


//- [ ] GET /character/:id
 const getCharactersId = async (id)=>{

        if (id.length < 10){
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            const finalResponse = response.data
            let url = finalResponse.episode
            const idCharacter = {
                id: finalResponse.id,
                name: finalResponse.name,
                image: finalResponse.image,
                origin: finalResponse.origin,
                created: finalResponse.created,
                species: finalResponse.species,
               episode: await auxNamesEpisodes(url)
            }
                return idCharacter;
        } else {
        const response = await Character.findByPk(id,{
            include:{
                model: Episode,
                attribute:["name"]
            }
        })
        const limp = response.dataValues;
        limp.episodes = limp.episodes.map(cur => cur.name)
        return limp;
    }
    
 
}



module.exports ={
    createCharacter,
    getCharacters,
    getEpisodes,
    getCharactersId
}