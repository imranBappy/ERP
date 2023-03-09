import List from './List';
import { studentListHead } from '../data/staudentList';

const AdmissionApply = (props) => {
    console.log(555, props.std);
    return (
        <div>
            <List head={studentListHead} body={props.std ? props.std : []} />
        </div>
    );
};

export default AdmissionApply;