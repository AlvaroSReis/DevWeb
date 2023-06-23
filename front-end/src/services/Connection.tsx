import Api from "./Api";

export async function query1(){
    let data: string;
    //await Api.get("/query1").then((result) =>
    //console.log(result.data.rows))
    data = JSON.stringify(await Api.get("/query1").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    console.log(data)
    //return data;
}

export async function query3(){
    let data: string;
    //await Api.get("/query1").then((result) =>
    //console.log(result.data.rows))
    data = JSON.stringify(await Api.get("/query3").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    console.log(data)
    //return data;
}