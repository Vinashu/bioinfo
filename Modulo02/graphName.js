Array.prototype.contains = (name) => {  
    let i = this.length;
    while (i--) {
        if (this[i].name === name) {
            return true;
        }
    }
    return false;
}

const Node = (name) => {  
    this.edge_list = [];
    this.name = name;
}

Node.prototype.addEdge = (end) => {  
    this.edge_list.push(end);
}

const Graph = () => {  
    this.node_list = [];
}

Graph.prototype.addEdge = (start, end) => {  
    const first = this.node_list.contains(start);
    const second = this.node_list.contains(end);
    if(first){
        //get start node
        var i = this.node_list.length;
        while (i--) {
            if (this.node_list[i].name === start) {
                this.node_list[i].addEdge(end);
                break;    
            }
        }
    }
    if(second){
        //get end node
        i = this.node_list.length;
        while (i--) {
            if (this.node_list[i].name === end) {
                this.node_list[i].addEdge(start);
                break;    
            }
        }
    }

    if( (!first) || (!second) ){
        if( !first ){
            const node = new Node(start);
            node.addEdge(end);
            this.node_list.push(node);
        }
        if( !second ){
            const node = new Node(end);
            node.addEdge(start);
            this.node_list.push(node);
        }
    } 
}

Graph.prototype.printNodes = () => {  
    for(var i = 0;i < this.node_list.length;i++){
        console.log(this.node_list[i].name +":");
        console.log(this.node_list[i].edge_list);
    }
}

const graph = new Graph();  
graph.addEdge("start","end");  
graph.addEdge("start","finish");  
graph.addEdge("here","there");  
graph.addEdge("up","down");  
graph.printNodes();  