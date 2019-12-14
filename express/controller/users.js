const {user} = require('../models/index')
    
const get_user = function(request, response) {

    var count = 2 + 5
    var jeson = {
        "employees":[
        { "firstName":"https://2.bp.blogspot.com/-x3TpSydwjqQ/T2Id6JzchHI/AAAAAAAAADk/c_MeEiSrQbM/s1600/DSC01280.JPG", "lastName":count },
        { "firstName":"Anna", "lastName":"Smith" },
        { "firstName":"Peter", "lastName":"Jones" }
    ]
}
response.send(jeson);
}

const create_user = async (request, response) => {
    var body = {
       name : "eryaaa",
       age : "999"
    }
    
  try {
        let create = await user.create(body)
        console.log(create);
        response.send(create)
    }   
    catch (error) {
        console.log(error);
    }

}

const delete_user = async (request, response) => {
    var id = 1
    var query = {
        where: {
            id: id
         }
    }
    try {
        let destroy = await user.destroy(query)
        console.log(destroy);
        response.send({
            msg: "sukses delete $(id)",
            status: destroy
        })
    }
    catch (error) {
            console.log(error);
    }
}

module.exports = {
    get_user,
    create_user,
    delete_user
}