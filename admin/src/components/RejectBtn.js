import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { admissionRejectPutAction } from '../app/actions/admissionAction';
import { connect } from 'react-redux';

const RejectBtn = (props) => {
    let { stdId } = useParams();
    let navigate = useNavigate();
    const resectHandler = () => {
        props.admissionRejectPutAction(stdId, props.data);
        return navigate("/admission");
    }
    return (
        <div className="">
            <button onClick={resectHandler} type="submit" className="bg-error p-3 mt-3 mb-8 text-white-900 rounded-md" >REJECTED</button>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        data: state.admission.data,
    }
}
export default connect(mapStateToProps, { admissionRejectPutAction })(RejectBtn);
