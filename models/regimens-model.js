const db = require("../db-config.js");

module.exports ={
    findByuserId,
    addregimen,
    updateRegimens,
    remove

};

function findByuserId(userId){
    return db("regimens as r")
    .where({userId})
    .join("exercises as e", "e.id", "r.exerciseId")
    .join("users as u", "u.id", "r.userId")
    .select("r.id as regimenID", "r.weight as regimenWeight", "*" )
     
}

function findById(id){
    return db("regimens").where({id})
     
}

function addregimen(regimens){
    return db("regimens").insert(regimens).returning("*")
}

async function updateRegimens(regimens, id){
    await db("regimens")
    .where({id})
    .update(regimens)
    return findById(id)
    
    
}

function remove(id){
    return db("regimens")
    .where({id})
    .del();
}