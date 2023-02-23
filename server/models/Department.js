const departmentSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    code: {},
    hod: {
        type: ObjectId,
        ref: 'Auth'
    },
})