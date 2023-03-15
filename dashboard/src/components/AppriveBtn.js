import { useNavigate, useParams } from 'react-router-dom';
import { admissionAprovePutAction } from '../app/actions/admissionAction';
import { connect } from 'react-redux'
const AppriveBtn = (props) => {
    let { stdId } = useParams();
    let navigate = useNavigate();

    const handleAprove = () => {
        var num = Number(prompt("Enter Tution Fee: "));
        if (num) {
            props.admissionAprovePutAction({ _id: stdId, tutionFee: num });
        }
        return navigate("/students");
    }
    return (
        <div className="">
            <button onClick={handleAprove} type="submit" className="bg-sky-600 p-3 mt-3 text-white-900 rounded-md" >APPROVE</button>
        </div>
    );
};

export default connect(null, { admissionAprovePutAction })(AppriveBtn);