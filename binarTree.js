class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.rigth = null
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f


//DFS
const depthFirstValues = (root)=>{
    const stack = [root];
    const result = [];
    while(stack.length > 0){
        const currentValue = stack.pop();
        result.push(currentValue.value);
        if(currentValue.right) stack.push(currentValue.right)
        if(currentValue.left) stack.push(currentValue.left)
    }
    return result
}

console.log(depthFirstValues(a))



    //       a
    //      / \
    //     b   c
    //    / \ / \
    //   d  e    f