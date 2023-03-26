import { Guid } from "guid-typescript";

export type Todo = {
  id: Guid;
  title : string
  done : boolean
  isFavorite : boolean
  deleted : boolean
  userId : Guid
}
