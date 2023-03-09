import { useEffect } from 'react';
import Card from '../components/Card';
import departmentCard from '../data/departmentCard';
import { departmentGetAction } from '../app/actions/departmentAction';
import { connect } from 'react-redux';
const Departments = (props) => {
    console.log(77, props.department);
    useEffect(() => {
        props.departmentGetAction();
    }, []);
    return (
        <div>
            {
                props.department.isLoading ? <h1>Loading...</h1> :
                    <>
                        <h1 className='page__title'>Welcome To Departments Page !</h1>
                        <Card cards={props.department.data} />
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