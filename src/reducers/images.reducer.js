export default function (images = [], action) {
    if(action.type === 'updateImages') return action.images
    else return images
}