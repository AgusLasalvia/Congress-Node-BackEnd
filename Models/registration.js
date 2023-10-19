let mongoose = require('mongoose');
let schema = mongoose.Schema;

let registerSchema = new schema({
    email:String,
    firstName:String,
    lastName: String,
    gender: String,
    educationLevel: String,
    position: String,
    mainInstitution: String,
    institutionalAddress: String,
    country: String,
    region: String,
    city: String,
    zipCode: String,
    modality: String,
    firstTime: String,
    specialMealReqs: String,
    motherLanguage: String
    
});


let Register = mongoose.model("Register",registerSchema);

module.exports = Register;
