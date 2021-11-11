export function focus(node , timeout = 0){
    setTimeout(() => {
        node.focus()
    }, timeout);
    return {
        destory(){
            node.destory()
        }
    }
}