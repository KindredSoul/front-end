import axios from "axios";

export const FETCHING_SUCCESS = "FETCHING_SUCCESS";

export const SENDING_START = "SENDING_START";

export const SENDING_FAILURE = "SENDING_FAILURE";

export const SENDING_SUCCESS = "SENDING_SUCCESS";

export const FETCHING_START = "FETCHING_START";

export const FETCHING_FAILURE = "FETCHING_FAILURE";


var temptoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJlbWFpbCI6ImNvbGxldHRlMUB0ZXN0LmNvbSIsImlhdCI6MTU3MTc4Mzc2OCwiZXhwIjoxNTcxNzg3MzY4fQ.IeUhRvMpzslV0ofzH7EB1SHQrKuEVWnpQfJClHh4Z6g';

var config = {
    headers: {'Authentication': temptoken}
  
};



export const sendEvent = ({x, y, z }) => dispatch => {
    dispatch({ type: SENDING_START });
    axios
      .post("https://corporate-event-planner-webeu.herokuapp.com/", {
        x,
        y,
        z
      })
      .then(res => {
        
        dispatch({ type: SENDING_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: SENDING_FAILURE, payload: err });
      });
  };

export const getEvents = () => dispatch => {
  dispatch({ type: FETCHING_START });
  axios
    .get("https://corporate-event-planner-webeu.herokuapp.com/api/events",config)
    .then(res => {
      
      dispatch({ type: FETCHING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_FAILURE, payload: err.data.slip });
    });
};
