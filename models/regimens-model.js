const db = require("../db-config.js");

module.exports ={
    findByuserId,
    addregimen,
    updateRegimens,
    remove

};

function findByuserId(userId){
    return db("regimens").where({userId})
     
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