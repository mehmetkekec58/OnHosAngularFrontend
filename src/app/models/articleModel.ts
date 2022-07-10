export interface ArticleModel{
  id:number;
  userName:string;
  title:string;
  text:string;
  imageUrl?:string;
  categoryId?:number;
  publishDate?:Date;
  editDate?:Date;
  file?:File;
}
