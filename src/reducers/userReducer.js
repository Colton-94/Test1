export default (state={token:'',err:''} , action)=>{
   // console.log('user',action.payload);
    switch (action.type){
        case  'SIGN_UP':
            return {...state, token:action.payload};
        case 'SIGN_IN':
            return {...state, token:action.payload,err:''};
        case 'ERR':
            return {err:action.payload};
        default :
            return state;

    }
};