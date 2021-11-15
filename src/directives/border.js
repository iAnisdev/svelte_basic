export function border(node , isAdmin) {
    console.log(node )
    return{
        update(isAdmin){
            if(isAdmin === true){
                node.style.border = '5px solid #000'
            }else{
                node.style.border = 'none'
            }
            // console.log(isAdmin)
        },
        destroy(){

        }
    }
}