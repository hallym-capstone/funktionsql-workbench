import axios from "axios";

function MakeDB(setResult) {
    const database_name = document.getElementById("database_name");
    const Bearer="Bearer "
    axios({
        method: "POST",
        headers:{
            Authorization: Bearer+localStorage.getItem("ac-token")
        },
        url: process.env.REACT_APP_QUERY_DATABASES_MAKE,
        data: {
            "database_name": database_name.value
        }
    }).then((res) => {
        console.log(res); 
        
    }).catch(error => {
        console.log(error.response);
        if(error.response.status===401){
            setResult(`권한없는 계정입니다. 계정을 새로만들어주세요.`)
        }else{
            setResult(`접속불가상태`);
        }
    });
  }
  export default  MakeDB;