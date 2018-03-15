let lastAction = null;
let timeoutHandler;

const middleware = () => next => action => {
    //take last action from a time interval. Reset the interval if new action comes
    const time = action.meta && action.meta.takeLast;
    if (!time) {
        return next(action);
    }

    lastAction = action;
    clearTimeout(timeoutHandler);
    timeoutHandler = setTimeout(
        () => {
            next(lastAction);
        },
        time
    );
};

export default middleware;