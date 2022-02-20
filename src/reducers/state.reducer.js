export default function (state = 'none', action) {
    if(action.type === 'openModal') return 'flex'
    else if(action.type === 'closeModal') return 'none'
    else return state
}