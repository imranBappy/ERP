// total tution free , payment history, attendance, marks, fees, etc


const studentSchema = new Schema({
    phone: {

    },
    group: {
        enum: ['A', 'B', 'C']
    },
    fatherName: {},
    motherName: {},
    guardianEmail: {},
    guardianPhone: {},
    guardianNID: {},
    address: {},
    passingYear: {},
    transcript: {},
    studentId: {},
    boardRoll: {},
    registrationNumber: {},
    admissionYear: {},
    currnetSemester: {},
    result: {},
    attendance: {},
    department: {
        type: ObjectId,
        ref: 'Department'
    },
    payment: {},
    application: {},
})
