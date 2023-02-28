import List from './List';
import { studentListHead } from '../data/staudentList';

const AdmissionApply = (props) => {
    return (
        <div>
            <List head={studentListHead} body={props.std} />
        </div>
    );
};

export default AdmissionApply;