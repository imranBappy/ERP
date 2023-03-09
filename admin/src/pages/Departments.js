import { useEffect } from 'react';
import { departmentGetAction } from '../app/actions/departmentAction';
import { connect } from 'react-redux';
import DepartmentCard from '../components/DepartmentCard';
const Departments = (props) => {
    useEffect(() => {
        props.departmentGetAction();
    }, []);
    return (
        <div>
            {
                props.department.isLoading ? <h1>Loading...</h1> :
                    <>
                        <h1 className='page__title'>Welcome To Departments Page !</h1>
                        <DepartmentCard cards={props.department.data} />
                    </>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        department: state.department
    }
}
export default connect(mapStateToProps, { departmentGetAction })(Departments);