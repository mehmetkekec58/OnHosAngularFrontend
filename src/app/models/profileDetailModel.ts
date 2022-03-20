import { AboutModel } from "./aboutModel";
import { ProfilePhotoModel } from "./profilePhotoModel";

export interface ProfileDetailModel{
  userName:string;
  firstName:string;
  lastName:string;
  aboutMe:AboutModel;
  profilePhoto:ProfilePhotoModel;
}
