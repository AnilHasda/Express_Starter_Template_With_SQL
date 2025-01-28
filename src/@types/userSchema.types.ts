import {UserRole} from "../@types/userRole.type";
export interface UserSchema{
  first_name:string;
  last_name:string;
  email:string;
  password:string;
  profile?:string;
  refresh_token:string;
  role:userRole;
  otp?:string;
  otp_expires_at?:Date;
  is_verified:boolean;
}