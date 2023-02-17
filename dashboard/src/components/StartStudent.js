import React from "react";
import "../styles/StartStudent.css";
const StartStudent = () => {
    return (
        <>
            <div className="start__students w-full bg-white mt-10 rounded-md ">
                <h4 className="title-h4">Star Students</h4>
                <div className="students__list w-full px-10 pb-10 overflow-x-auto" >
                    <table className=" table-auto student__table min-w-max w-full" style={{ minWidth: "750px" }}>
                        <thead className="bg-sky-800 rounded-md  text-white h-10">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Marks</th>
                                <th>Percentage</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody className=" student__table__body">
                            <tr>
                                <td>1</td>
                                <td>Imran Hossen</td>
                                <td>1185</td>
                                <td>99.9%</td>
                                <td>2023</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Imran Hossen</td>
                                <td>1185</td>
                                <td>99.9%</td>
                                <td>2023</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Imran Hossen</td>
                                <td>1185</td>
                                <td>99.9%</td>
                                <td>2023</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Imran Hossen</td>
                                <td>1185</td>
                                <td>99.9%</td>
                                <td>2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default StartStudent;
