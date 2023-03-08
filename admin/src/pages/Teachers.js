import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { teacherGetAction } from '../app/actions/teacherAction';
import TeachersList from '../components/TeachersList';
const Teachers = (props) => {
    useEffect(() => {
        props.teacherGetAction(1);
        console.log(77, props.teacher);
    }, [])
    return (
        <div>
            <h1 className='page__title'>Welcome To Teachers Page !</h1>

            <TeachersList data={props.teacher.data} />
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        teacher: state.teacher
    }
}
export default connect(mapStateToProps, { teacherGetAction })(Teachers);