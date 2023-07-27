import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase"
import Api from "./Api";

// Queries ao banco de dados

export async function query1(){
    let data = JSON.stringify(await Api.get("/query1").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    return data;
}

export async function query2(){
    let data = JSON.stringify(await Api.get("/query2").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    return data;
}

export async function query3(){
    let data = JSON.stringify(await Api.get("/query3").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    return data;
} 

export async function query4(){
    let data = JSON.stringify(await Api.get("/query4").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    return data;
}

export async function query5(){
    let data = JSON.stringify(await Api.get("/query5").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    return data;
}

export async function query6(){
    let data = JSON.stringify(await Api.get("/query6").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    return data;
}

export async function query7(){
    let data = JSON.stringify(await Api.get("/query7").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    return data;
}

export async function query8(){
    let data = JSON.stringify(await Api.get("/query8").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    return data;
}

export async function query9(){
    let data = JSON.stringify(await Api.get("/query9").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    return data;
}

export async function query10(){
    let data = JSON.stringify(await Api.get("/query10").then((result) => {
        console.log(result)
        return result.data.rows
    }));
    return data;
}

// Login do google com popup

export async function googlePopup() {
    const provider = new GoogleAuthProvider()
    let result = await signInWithPopup(auth, provider)
    return result;
}