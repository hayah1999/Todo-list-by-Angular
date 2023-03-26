import { Guid } from "guid-typescript";

export type User = {
  id: Guid
  email : string
  username : string
  password : string
  quote : string
}
