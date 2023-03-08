const TeacherAddField = [
    {
        label: '',
        type: 'img',
        name: "url",
        placeholder: 'Upload Image'
    },
    {
        label: 'Teacher ID',
        type: 'text',
        name: "teacherId",
        placeholder: 'Teacher ID'
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
        label: 'Teacher Designation',
        type: 'text',
        name: "designation",
        placeholder: 'Designation'
    },
    {
        label: 'Teacher Email',
        type: 'email',
        name: "email",
        placeholder: 'Email'
    },
    {
        label: 'Teacher Phone',
        type: 'number',
        name: "phone",
        placeholder: 'Phone Number'
    },
    {
        label: 'CV',
        type: 'file',
        name: "cv",
        placeholder: 'Upload CV'
    }
]
module.exports = TeacherAddField;