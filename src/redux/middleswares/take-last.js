let lastAction = null;
let timeoutHandler;

//if action has meta.takeLast we will take that time and fire the event only after the time passes. We reset the time if new event comes.
//used for events that are fired one after another but only the last one is important: e.g typing text
const middleware = () => next => action => {
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