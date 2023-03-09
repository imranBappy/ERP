import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import TeacherAddField from '../data/teacherAddField';
import { useForm } from 'react-hook-form';
import SubmitBtn from '../components/SubmitBtn';
import { connect } from 'react-redux'
import { admissionPostAction } from '../app/actions/admissionAction'
import { useNavigate } from "react-router-dom";
import studentsFields from '../data/studentsFields';
import { departmentGetAction } from '../app/actions/departmentAction';


const AddStudent2 = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);
    let navigate = useNavigate();
    console.log(props.department);
    useEffect(() => {
        props.departmentGetAction()
        const subscription = watch((value, { name, type }) => {
            if (name === 'url') {
                setFile(URL.createObjectURL(value.url[0]));
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const formData = new FormData()
    const onSubmit = ({ url, cv, ...rest }) => {
        const data = { ...rest, url: url[0], transcript: url[0] }
        Object.keys(data).forEach(key => {
            formData.append(key, data[key])
        });
        console.log(data);
        props.admissionPostAction(formData)

        return navigate("/students");
    };
    const options = [];
    props.department.data.forEach((item) => {
        options.push({ value: item._id, data: item.name })
    });
    studentsFields[10].options = options;

    return (
        <div className='light__component dark:dark__component p-5 max-w-5xl m-auto'>
            <h1 className='page__title'>Add Students</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    studentsFields.map((input, i) => {
                        return (
                            <Input
                                file={file}
                                errors={errors} register={register}
                                key={i}
                                {...input}
                            />
                        )
                    })
                }
                <SubmitBtn value="Add Student" />
            </form>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        department: state.department
    }
}

export default connect(mapStateToProps, { admissionPostAction, departmentGetAction })(AddStudent2);
