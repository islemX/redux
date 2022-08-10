const initialState = {tasks:[]};
const reducer = (state=initialState, {type,payload}) =>{
 switch (type) {
     case "add" : return({tasks:[{id:Math.random(), name : payload , isDone:false},...state.tasks]})       
     case "delete" : return({tasks:[...state.tasks].filter(task=>task.id !== payload)});
     case "update" : return({tasks:[...state.tasks].map(task=>task.id===payload.id ?{...task,name:payload.newname}: task )})
     case "finished" : return({tasks:[...state.tasks].map(task=>task.id===payload ? {...task,isDone :!task.isDone} : task )});
     default:
         return (state)
 };
}
export default reducer ;