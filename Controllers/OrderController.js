
// show all data
const index = async (req, res) => {
    console.log(req.body);
    return res.json(req.body)
}

// show order data

const show = async(req, res)=> {
    console.log(req.body)
    return res.json(req.body);
}

// Create Post

const create = async(req, res)=> {
    console.log(req.body);
    return res.json(req.body);
}

// update 

const update = async (req, res) => {
    console.log(req.body);
    return res.json(req.body)
}




module.exports = { index, create, show, update };