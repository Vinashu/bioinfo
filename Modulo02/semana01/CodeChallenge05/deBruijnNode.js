process.stdin.on('data', function (chunk) {
    var reads = chunk.toString().split("\n");
    process.stdout.write(deBruijn(reads));
});

var Node = function(name) {  
    this.edge_list = [];
    this.name = name;
}

Node.prototype.addEdge = function(end) {  
    this.edge_list.push(end);
}

var Graph = function() {  
    this.node_list = [];
}

Array.prototype.contains = function(name) {  
    var i = this.length;
    while (i--) {
        if (this[i].name === name) {
            return true;
        }
    }
    return false;
}

Graph.prototype.addEdge = function(start, end) {  
    var first = this.node_list.contains(start);
    if(first){
        var i = this.node_list.length;
        while (i--) {
            if (this.node_list[i].name === start) {
                this.node_list[i].addEdge(end);
                break;    
            }
        }
    } else {
        var node = new Node(start);
        node.addEdge(end);
        this.node_list.push(node);
    }
    var second = this.node_list.contains(end);       
    if( !second ){
        var node = new Node(end);
        this.node_list.push(node);
    } 
}

Graph.prototype.printNodes = function() { 
    var graph = [];
    for(var i = 0;i < this.node_list.length;i++){
        if(this.node_list[i].edge_list.length > 0){
            this.node_list[i].edge_list.sort();
            graph.push(this.node_list[i].name + " -> " + this.node_list[i].edge_list);
        }
    }
    graph.sort();    
    return graph.join("\n");
}

function deBruijn(reads){
    var graph = new Graph();  
    reads.forEach(function(read){
        graph.addEdge(prefix(read) ,sufix(read));  
    });
    return graph.printNodes();  
}

function prefix(text){   
    return text.substr(0, text.length - 1);
}

function sufix(text){
    return text.substr(1, text.length - 1);
}