import {AppDataSource} from "../data-source";
export const connection=async()=>{
  try{
    await AppDataSource.initialize();
    console.log("connected to database");
  }catch(error:any){
    console.log({error});
    throw new Error("failed to connect to database");
  }
}