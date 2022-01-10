import axios from "axios";

const SERVICE_KEY = `71FJMe%2BlAmxH%2Bq3UvkJwOp1L2Jje6JRyZjI4ZS6BmwBmonwDhB%2Fv2%2FlRspGYVx5xA4a7eVdjEFfpMy7T82ArFA%3D%3D`;

export const getHolidayDate = () => {
  return axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=2021&ServiceKey=${SERVICE_KEY}&_type=json&numOfRows=100`
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
