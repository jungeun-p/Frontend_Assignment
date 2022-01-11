import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Day = ({
  today,
  viewDate,
  selectDate,
  setSelectDate,
  deleteSchedule,
}) => {
  const scheduleList = useSelector((state) => state.schedule);
  // 해의 첫번째 주
  const startWeek = viewDate.startOf("month").week();
  // 해의 마지막 주
  const endWeek =
    viewDate.endOf("month").week() === 1 ? 53 : viewDate.endOf("month").week();
  let calendar = [];
  for (let week = startWeek; week <= endWeek; week++) {
    calendar.push(
      <div className="oneWeek" key={week}>
        {Array(7)
          .fill(0)
          .map((n, i) => {
            // 이번 달 첫째날 부터 1일씩 더하기.
            let current = viewDate
              .startOf("week")
              .week(week)
              .add(n + i, "day"); // n+i만큼 하루를 더한다.
            // 12월달
            if (viewDate.format("MM") === 12) {
              current = viewDate
                .startOf("week")
                .week(week - 52)
                .add(n + i, "day");
            }
            // 선택한 날짜
            let isSelected =
              selectDate.format("YYYYMMDD") === current.format("YYYYMMDD")
                ? "selected"
                : "";
            // 오늘 날짜
            let isToday =
              today.format("YYYYMMDD") === current.format("YYYYMMDD")
                ? "today"
                : "";
            // 달이 다를 경우
            let isNone =
              current.format("MM") === viewDate.format("MM") ? "" : "none";
            // 주말
            let isWeekend =
              current.get("day") === 0 || current.get("day") === 6
                ? "weekend"
                : "";
            return (
              <div
                className={`date ${isWeekend}`}
                key={`${week}_${i}`}
                onClick={() => {
                  setSelectDate(current);
                  console.log(current.format("YYYYMMDD"));
                }}
              >
                <div className={`text ${isNone}`}>
                  <span className={`day ${isSelected} ${isToday}`}>
                    {current.format("D")}
                  </span>
                  <span>일</span>
                </div>
                {/* schedule 일정 */}
                {scheduleList.map((item) => (
                  <div
                    className="scheduleTitle"
                    key={item.date}
                    onClick={() => deleteSchedule(item.date)}
                  >
                    {current.format("YYYYMMDD") === item.date && item.title}
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    );
  }
  return <DayWrap>{calendar}</DayWrap>;
};

const DayWrap = styled.div`
  font-size: 17px;
  font-weight: 400;
  // 한 주
  .oneWeek {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .date {
    width: 100%;
    height: 150px;
    text-align: right;
    padding: 5px 10px;
    border-bottom: 1px #f3f3f3 solid;
    border-right: 1px #f3f3f3 solid;
    cursor: pointer;
    .text {
      height: 24px;
      .day {
        display: inline-block;
        border-radius: 50%;
        text-align: center;
        line-height: 25px;
      }
      .selected {
        width: 24px;
        height: 24px;
        background-color: black;
        color: white;
      }
      .today {
        width: 24px;
        height: 24px;
        background-color: tomato;
        color: white;
      }
    }
    .scheduleTitle {
      font-size: 12px;
      border-radius: 5px;
      background-color: skyblue;
      line-height: 20px;
      padding-right: 5px;
      vertical-align: middle;
      color: #ffffff;
      margin-top: 5px;
    }
    .none {
      color: lightgray;
    }
  }
  // 주말
  .weekend {
    background-color: #f3f3f3;
    color: gray;
  }
  // 일정 추가
  /* .schdule {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    .title {
      height: 15px;
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 2px solid lightgray;
      margin-right: 5px;
      background: none;
    }
    .button {
      font-size: 10px;
      border: none;
      width: 40%;
      border-radius: 4px;
    }
  } */
`;

// const AddEvent = ({ isSelected, onChange, schedule }) => {
//   return (
//     isSelected && (
//       <div className="schdule">
//         <input
//           className="title"
//           name="title"
//           value={schedule.title}
//           onChange={onChange}
//         />
//         <button className="button" type="button" onClick={() => {}}>
//           추가
//         </button>
//       </div>
//     )
//   );
// };

export default React.memo(Day);
