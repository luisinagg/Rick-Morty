const { Router } = require("express");
const { getCharacters, getEpisodes, createCharacter, getCharactersId } = require("../controllers/controllers");
const { Character } = require("../db");


const router = Router();

// - [ ] GET /characters:
//     - Obtener el listado de personajes
//     - Debe devolver solo los datos necesarios para la ruta principal

router.get('/characters', async (req, res,) =>{
    try {
        res.json(await getCharacters());
    }catch (e){
        res.status(400).json ({error: e.message})
    }

})


router.get ('/episodes', async (req, res) =>{
    try{
        res.json(await getEpisodes())
    }catch (e){
        res.status(400).json ({error: e.message})
    }
})

router.post('/character', async (req, res)=>{
    const { name, species, origin, created, image, episode} = req.body
    
    try{
        res.json(await createCharacter(name, species, origin, created, image, episode ))
    } catch (e){
        res.status(400).json({error: e.message})
    }
})

router.get('/character/:id', async (req,res)=>{
    const {id} = req.params;
    try{
        res.json(await getCharactersId(id))
    }catch(e){
        res.status(400).json({error: e.message})
        console.log("holi")
    }
})

// Configurar los routers

module.exports = router;
