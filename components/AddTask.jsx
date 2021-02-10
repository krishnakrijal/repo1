import {useState} from 'react';
const AddTask =({addTask})=>{
    const[data,setData] =useState({});
    const onChange = (e)=>{
    const  {name,value} = e.target;
    setData((preVal)=>{
        return{ ...preVal,
            [name]:value }
    });
    }

    const onSubmit = e =>{
        e.preventDefault();
        addTask(data);
        setData({text:'',day:'',reminder:false})

    }
    return(
        <form className='add-forn' onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Task</label>
                <input type='text'
                 placeholder='Enter Your Task Here'
                 value name='text' 
                 value={data.text}
                 onChange={onChange}/>
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text'
                 placeholder='Enter Your Day and Time Here'
                name='day' 
                value={data.day}
                onChange={onChange}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' 
                name='reminder'
                value={data.reminder} 
                onChange={onChange}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>

        </form>
    );

}

export default AddTask;