const logger = ({dispatch}) => next => action => {
    console.log('logger', JSON.stringify({type: action.type, payload: action.payload}))
    return next(action);
};

export default logger;