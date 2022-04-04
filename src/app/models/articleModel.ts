export interface ArticleModel{
  id:number;
  userName:string;
  title:string;
  text:string;
  categoryId?:number;
  publishDate?:Date;
  editDate?:Date;
}
