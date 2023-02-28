import React, { useEffect } from 'react';
import AdmissionApply from '../components/AdmissionList';
import { connect } from 'react-redux';
import { admissionGetAction } from '../app/actions/admissionAction';
const Admission = (props) => {
    useEffect(() => {
        props.admissionGetAction({ data: props.admission.data, page: 1 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            {
                props.admission.isLoading ? <h1>Loading...</h1> : <AdmissionApply std={props.admission.data} />
            }
        </div>
    );
};
const stateToProps = (state) => {
    return {
        admission: state.admission
    }
};
export default connect(stateToProps, { admissionGetAction })(Admission);