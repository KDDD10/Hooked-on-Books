import React from "react";
import { Row, Col } from "antd";
import "./SingleBook.css";
import BookImage from "../../assets/Images/profile-cover.jpg";
const SingleBook = () => {
  return (
    <div className="margin">
      <Row gutter={50}>
        <Col span={8}>
          <div className="book-image-container">
            <img
              src={BookImage}
              alt="Half of a Yellow Sun"
              className="book-image"
            />
          </div>
        </Col>
        <Col span={16}>
          <div className="book-description-container">
            <h1 className="book-title">Half of a Yellow Sun</h1>
            <div className="book-meta">
              <span className="book-genre">Fiction</span>
              <span className="book-author">Chimamanda Ngozi Adichie</span>
            </div>
            <p className="book-description">
              Ugwu, a boy from a poor village, works as a houseboy for a
              university professor. Olanna, a young woman, has abandoned her
              life of privilege in Lagos to live with her charismatic new lover,
              the professor. And Richard, a shy English writer, is in thrall to
              Olanna’s enigmatic twin sister. As the horrific Biafran War
              engulfs them, they are thrown together and pulled apart in ways
              they had never imagined.
            </p>
            <p className="book-description">
              Chimamanda Ngozi Adichie’s masterpiece, winner of the Orange Prize
              for Fiction, is a novel about Africa in a wider sense: about the
              end of colonialism, ethnic allegiances, class and race – and about
              the ways in which love can complicate all of these things.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SingleBook;
