import {Entity,Column} from "typeorm";
import {UserRole} from "../@types/userRole.type";
import {CommonEntity} from "./common.entity";
@Entity("users")
export class User extends CommonEntity{
  
  @Column({
      type:"varchar",
      length:30
  })
  first_name:string;
  
  @Column({
    type:"varchar",
    length:30
  })
  last_name:string;
  
  @Column({
    type:"varchar",
    length:30,
    unique:true
  })
  email:string;
  
  @Column({
    type:"varchar",
    length:255
  })
  password:string;
  
  @Column({
    type:"varchar",
    length:255,
    nullable:true
  })
  profile?:string;
  
  @Column({
    type:"enum",
    enum:UserRole,
    default:UserRole.USER
  })
  role:UserRole;
  
   @Column({
    type:"varchar",
    length:255
   })
  refresh_token:string;
  
  @Column({
    type:"varchar",
    length:6
  })
  otp:string;
  
  @Column({
    type:"timestamp"
  })
  otp_expires_at:Date;
  
  @Column({
    type:"boolean",
    default:false
  })
  
  is_verified:boolean;
  
}