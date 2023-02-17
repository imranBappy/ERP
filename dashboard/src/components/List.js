import React from 'react';
import ListHead from './ListHead';
import ListBody from './ListBody';

const List = (props) => {
    return (
        <div className="w-full bg-white mt-10 rounded-md ">
            <h4 className="title-h4">Star Students</h4>
            <div className="students__list w-full px-10 pb-10 overflow-x-auto" >
                <table className=" table-auto student__table min-w-max w-full" style={{ minWidth: "750px" }}>
                    <ListHead head={props.head} />
                    <ListBody body={props.body} img={true} />
                </table>
            </div>
        </div>
    );
};

export default List;