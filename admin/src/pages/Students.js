import React, { useEffect } from 'react';
import AdmissionApply from '../components/AdmissionList';
import { connect } from 'react-redux'
import { studentGetAction } from '../app/actions/studentAction.js';
import StudentsList from '../components/StudentsList';
const Students = (props) => {
    useEffect(() => {
        props.studentGetAction()
    }, [])
    console.log(9999, props.student);
    return (
        <div>
            {
                props.student.isLoading ? <h1>Loading...</h1> :
                    <>
                        <h1 className='page__title'>Students</h1>
                        <StudentsList body={props.student.data} />
                    </>
            }

        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        student: state.student
    }
}
export default connect(mapStateToProps, { studentGetAction })(Students);