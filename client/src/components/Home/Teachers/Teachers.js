import React from "react";
import { Link } from "react-router-dom";
import Teacher from "./Teacher";
import "./Teachers.css";

const Teachers = () => {
  const cardItems = [
    {
      id: 1,
      name: "Edith Williams ",
      titlle: "Backen",
      img: "https://listingthemes.com/studypoint/v1.2/assets/images/teachers/teacher-4.jpg",
      des: "A fantastict, first rate teacher who has the ability to raise the performance......",
    },
    {
      id: 2,
      name: "Kaylin Moore",
      titlle: "IT & Software",
      img: "https://listingthemes.com/studypoint/v1.2/assets/images/teachers/teacher-3.jpg",
      des: "Contrary to popular belief, Lorem Ipsum is not simply random text......",
    },
    {
      id: 3,
      name: "Eric Morgan",
      titlle: "Teacher English",
      img: "https://listingthemes.com/studypoint/v1.2/assets/images/teachers/teacher-1.jpg",
      des: "Contrary to popular belief, Lorem Ipsum is not simply random text.....",
    },
    {
      id: 4,
      name: "John Brown",
      titlle: "Backend",
      img: "https://listingthemes.com/studypoint/v1.2/assets/images/teachers/teacher-2.jpg",
      des: "Contrary to popular belief, Lorem Ipsum is not simply random text......",
    },
  ];
  return (
    <div className="teacher_section">
      <div className="teacher_container max-w-[1500px] mx-auto">
        <div className="teacher_header">
          <h2 className="tech_hed">Our Teachers</h2>
          <h3 className="hed_pera">
            Find online courses and a wide range of related learning content.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-4 cards">
          {cardItems.map((card) => (
            <Teacher key={card.id} card={card}></Teacher>
          ))}
        </div>
        <div className="teacher_btn_con">
          <Link className="teacher_more text-center" to='/allTeacher'><button >View More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
