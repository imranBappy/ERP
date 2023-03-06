import React from 'react';
import ListHead from './ListHead';
import ListBody from './ListBody';

const List = (props) => {
    return (
        <div className="w-full light__component dark:dark__component ">
            <h4 className="title-h4">Star Students</h4>
            <div className="students__list w-full px-10 pb-10 overflow-x-auto" >
                <table className="table-auto student__table min-w-max w-full"  >
                    <ListHead head={props.head} />
                    <ListBody body={props.body} img={true} />
                </table>
            </div>
        </div>
    );
};

export default List;