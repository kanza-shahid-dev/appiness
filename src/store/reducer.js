import * as ActionTypes from './actionTypes' 

const initialState={
    user:{
    },
    MorningReminder:{
    },
    NightReminder:{
    },
};

export const reducer=(state=initialState,action)=>{
    switch(action.type)
    { 
        case ActionTypes.Add_USER:
            return { ...state,
                user:{...state.user, user:action.payload.user},
            };
        case ActionTypes.Add_Morning_Reminder:
            console.log("---:",action.payload.MorningReminder)
            return { ...state,
                user:{...state.MorningReminder, MorningReminder:action.payload.MorningReminder},
            };
        case ActionTypes.Add_Night_Reminder:
                return { ...state,
                    user:{...state.NightReminder, NightReminder:action.payload.NightReminder},
                };
        default:
            return state;
    }

};