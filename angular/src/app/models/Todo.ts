// ? makes the field optional
// will complain if we don't either make it optional or provide initial value
export class Todo {
  id?:number
  title?:string
  completed?:boolean
}