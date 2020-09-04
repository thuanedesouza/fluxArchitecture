import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


function addCourseAction(title){
    return {type: 'ADD_COURSE', title }
}

export default function CourseList() {
  
    //how many courses I will return
    const qty = 5  ;
    
    // If I need to refresh courses just if the qty changes
    const courses = useSelector(
        state => state.data.slice(0, qty),[qty]
     // this is how I can actually observe this variable   
       //it looks like useEffects
        );


    const dispatch = useDispatch();

   function addCourse (){
        dispatch(addCourseAction('GraphQL'));
    }

    return (
        <>
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
            <button type = "button" onClick = {addCourse}>
                Add course
            </button>
        </>
    )
}
