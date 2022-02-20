export default function (actual = 0, action) {
    if(action.type === 'updateActual') return action.actual
    else if(action.type === 'prevImage') return action.actual
    else if(action.type === 'lastImage') return action.actual
    else if(action.type === 'firstImage') return action.actual
    else if(action.type === 'nextImage') return action.actual
    else return actual
}