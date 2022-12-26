/* 
* another, easy but nonsenses way to understand thunk *

1. dispatch become 2 layer dispatch  

2. Before thunk dispatch({type:'INCREMENT',payload:data}) 

3. after thunk dispatch( async (dispatch,getState) => {
    const res = await fetch('http://localhost:5000/');
    const data = await res.json();

    if(data.length){
        dispatch({type:'INCREMENT', payload:data})
    }

}) 

4. for thunk middleware, inside dispatch() function: we get another dispatch and getState

5. for data load use dispatch() in useEffect hook

6. for data load use async:ex. dispatch( async (dispatch,getState)=>{}

*/