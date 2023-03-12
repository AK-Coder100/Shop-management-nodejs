const mongoose = require('mongoose');

const dbConnect = async() => {
    try {
        const j = await mongoose.connect('mongodb+srv://Ak-Coder:ak%40mongo@shop-manage.oesif7r.mongodb.net/shop-manage')
        console.log('DB conected')
    } catch (error) {
        console.log("============== DB connect Error =====================")
        console.log(error)
        console.log("******************** END ***************************")
    }
    }

dbConnect()