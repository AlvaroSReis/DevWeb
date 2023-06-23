import Api from "./Api";

export async function query1(){
    //let data: string;
    await Api.get("/query1").then((result) =>
    console.log(result))
    //data = JSON.stringify(Api.get("/query1"));
    //console.log(data)
    //return data;
}
