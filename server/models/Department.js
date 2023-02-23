const departmentSchema = new Schema({
    name: {},
    code: {},
    hod: {
        type: ObjectId,
        ref: 'Auth'
    },
})