/*
function Graph() {
  this.vertices = [];
  this.edges = [];
  this.numberOfEdges = 0;
}

Graph.prototype.addVertex = function(vertex) {
  this.vertices.push(vertex);
  this.edges[vertex] = [];
};
Graph.prototype.removeVertex = function(vertex) {
  var index = this.vertices.indexOf(vertex);
  if(~index) {
    this.vertices.splice(index, 1);
  }
  while(this.edges[vertex].length) {
    var adjacentVertex = this.edges[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
};
Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.edges[vertex1].push(vertex2);
  this.edges[vertex2].push(vertex1);
  this.numberOfEdges++;
};
Graph.prototype.removeEdge = function(vertex1, vertex2) {
  var index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
  var index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
  if(~index1) {
    this.edges[vertex1].splice(index1, 1);
    this.numberOfEdges--;
  }
  if(~index2) {
    this.edges[vertex2].splice(index2, 1);
  }
};

Graph.prototype.print = function() {
  console.log(this.vertices.map(function(vertex) {
    return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
  }, this).join(' | '));
};

var graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.print(); // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.print(); // 1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4
graph.removeEdge(1, 2);
graph.removeEdge(4, 5);
graph.removeEdge(10, 11);
graph.addEdge(1, 2);
graph.addEdge(4, 5);
graph.removeVertex(5);
*/

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
    var second = this.node_list.contains(end);
    if(first){
        var i = this.node_list.length;
        while (i--) {
            if (this.node_list[i].name === start) {
                this.node_list[i].addEdge(end);
                break;    
            }
        }
    }
    /*
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
*/
    if( (!first) || (!second) ){
        if( !first ){
            var node = new Node(start);
            node.addEdge(end);
            this.node_list.push(node);
        }
        if( !second ){
            var node = new Node(end);
            //node.addEdge(start);
            this.node_list.push(node);
        }
    } 
}

Graph.prototype.printNodes = function() { 
    for(var i = 0;i < this.node_list.length;i++){
        if(this.node_list[i].edge_list.length > 0){
          console.log(this.node_list[i].name + " -> " + this.node_list[i].edge_list);
        }
    }
}

var graph = new Graph();  
graph.addEdge("start","end");  
graph.addEdge("start","finish");  
graph.addEdge("here","there");  
graph.addEdge("up","down");  
graph.printNodes();  
