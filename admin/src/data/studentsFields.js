const studentsFields = [
    {
        label: "Profile Photo",
        placeHolder: "Profile Photo",
        type: "img",
        name: "url",
    },
    {
        label: "Full Name",
        placeHolder: "Full Name",
        type: "text",
        name: "name",
    },
    {
        label: "Email",
        placeHolder: "Email",
        type: "email",
        name: "email",
    },
    {
        label: "Phone",
        placeHolder: "Student's Phone Number",
        type: "Phone",
        name: "phone",
    },
    {
        label: "Father Name",
        placeHolder: "Father Name",
        type: "text",
        name: "fatherName",
    }, {
        label: "Mother Name",
        placeHolder: "Mother Name",
        type: "text",
        name: "motherName",
    },
    {
        label: "Guardian Phone",
        placeHolder: "Guardian Phone Number",
        type: "number",
        name: "guardianPhone",
    }, {
        label: "Guardian Email",
        placeHolder: "Guardian Email",
        type: "email",
        name: "guardianEmail",
    }, {
        label: "Guardial NID",
        placeHolder: "Guardia NID",
        type: "number",
        name: "guardianNID",
    }, {
        label: "Address",
        placeHolder: "Address",
        type: "text",
        name: "address",
    }, {
        label: "Department",
        type: 'select',
        name: "department",
        placeholder: 'Department',
        options: []
    }, {
        label: "Transcript",
        placeHolder: "Transcript",
        type: "file",
        name: "transcript",
    }

]


module.exports = studentsFields;