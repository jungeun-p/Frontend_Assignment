import React from "react";
import styled from "styled-components";

const AddEvent = ({ day, onChange, addSchedule }) => {
  return (
    <AddEventWrap>
      <div className="title">이벤트 추가</div>
      <InputData name="date" value={day.date} onChange={onChange} />
      <InputData
        placeholder="일정 제목"
        name="title"
        value={day.title}
        onChange={onChange}
      />
      <Button onClick={addSchedule}>추가</Button>
    </AddEventWrap>
  );
};

const AddEventWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 300px;
  font-size: 24px;
  background-color: #e3e3e3;
  padding: 15px;
  border-radius: 10px;
  .title {
    color: gray;
    font-size: 16px;
    font-weight: 500;
  }
`;
const InputData = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  background-color: #f8f8f8;
  width: 100%;
  margin: 5px 0;
  padding: 5px 0;
  border-radius: 5px;
`;
const Button = styled.button`
  width: 100%;
  margin: 5px 0;
  padding: 5px 5px;
  border: none;
  border-radius: 4px;
  color: gray;
  font-weight: 500;
`;

export default AddEvent;
