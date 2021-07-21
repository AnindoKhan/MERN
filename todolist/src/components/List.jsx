import React from 'react';
function List(props){
    const {list, setList}=props;
    function deleteHandler(index){
        const myList = [...list];
        myList.splice(index,1);
        setList(myList);
    }
    function slash(index){
        let myTask = list[index];
        myTask.isComplete = true;
        let myList= [...list];
        myList[index]=myTask;
        setList(myList);
    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Complete</th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((task, index)=>
                    <tr key={index}>
                        {task.isComplete ? <td style={{textDecorationLine:'line-through'}}>{task.item}</td>:<td>{task.item}</td>}
                        <td><button onClick={() => slash(index)}> Check </button></td>
                        <td> <button onClick={()=> deleteHandler(index)}> Delete </button></td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default List;