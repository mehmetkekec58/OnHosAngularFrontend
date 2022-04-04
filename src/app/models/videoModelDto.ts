export interface VideoDtoModel{
  id:number;
  userName:string;
  title?:string;
  text?:string;
  videoUrl:string;
  tags?:string[];
  categoryId:number;
  date:Date;
  kapakFoto?:string;
}
