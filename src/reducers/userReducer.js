export default (state = [], action)=>{
    console.log('user',action.payload);
    switch (action.type){
        case  'SIGN_UP':
            return [...state, action.payload];
        default :
            return state;

    }


};