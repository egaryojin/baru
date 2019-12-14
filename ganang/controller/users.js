const {user} = require('../models/index')

const get_user = function(request, response) {

    var count = 1 + 2
    var json_ery = {
      "employees":[
        {"firstName":"https://ecs7.tokopedia.net/img/cache/700/product-1/2019/12/6/7280841/7280841_188d437a-fb4d-4fa2-9eda-d5dc9c769c8c_700_700", "lastName": count},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
      ]
    }
    response.send(json_ery);
}

const create_user = async (request, response) => {
    var body = {
        name: "ganang21",
        age: "112"
    }

    try {
        let create = await user.create(body)
        console.log(create);
        response.send(create)
    } catch (error) {
        console.log(error);
    }
}

const delete_user = async (request, response) => {
    var id = 2
    var query = {
        where: {
            id: id
        }
    }
    try {
        let destroy = await user.destroy(query)
        console.log(destroy);
        response.send({
            msg: `sukses delete ${id}`,
            status: destroy
        })
    } catch (error) {
        console.log(error);
    }
}

var users = {
    get_user,
    create_user,
    delete_user
}
module.exports = users;