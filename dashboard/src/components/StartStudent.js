import React from "react";
import "../styles/StartStudent.css";
import ListHead from "./ListHead";
import startStudentHead from "../data/startSudentHead";
import ListBody from "./ListBody";
import startStudentsBody from "../data/startStudentsBody";
const StartStudent = () => {
    return (
        <>
            <div className="start__students w-full bg-white mt-10 rounded-md ">
                <h4 className="title-h4">Star Students</h4>
                <div className="students__list w-full px-10 pb-10 overflow-x-auto" >
                    <table className=" table-auto student__table min-w-max w-full" style={{ minWidth: "750px" }}>
                        <ListHead head={ startStudentHead} />
                        <ListBody body = {startStudentsBody} />
                    </table>
                </div>
            </div>
        </>
    );
};

export default StartStudent;
