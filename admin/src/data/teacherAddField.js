const TeacherAddField = [
    {
        label: '',
        type: 'img',
        name: "url",
        placeholder: 'Upload Image'
    },
    {
        label: 'Name',
        type: 'text',
        name: "name",
        placeholder: 'Full Name'
    },
    {
        label: 'Gender',
        type: 'select',
        name: "gender",
        placeholder: 'Gender',
        options: ['Male', 'Female', 'Other']
    },
    {
        label: 'NID',
        type: 'text',
        name: "NID",
        placeholder: 'NID'
    },
    {
        label: 'Teacher Designation',
        type: 'text',
        name: "designation",
        placeholder: 'Designation'
    },
    {
        label: 'Email',
        type: 'email',
        name: "email",
        placeholder: 'Email'
    },
    {
        label: 'Phone',
        type: 'number',
        name: "phone",
        placeholder: 'Phone Number'
    },
    {
        label: 'Salary',
        type: 'number',
        name: "salary",
        placeholder: 'Salary'
    },
    {
        label: 'CV',
        type: 'file',
        name: "cv",
        placeholder: 'Upload CV'
    }
]
module.exports = TeacherAddField;