//LL(linked list)
class Node{
constructor(element){
this.element=element
this.next=null
}
}
//this.next is null because the last will point to null and it will be the last element but since linked list is
//is a dynamic ds , so we can add more element and more element without worrying about continuos memory
//allocation 
class List{
//constructor
constructor(){
    this.head=null
    this.size=0
}
//method
//# custom data structure
add(element){
var node=new Node(element)   

if(this.head==null){
//if head is n
this.head=node
}
else{
    var node=new Node(element)
    
    let current=this.head
    if(i=0){
    // 0 means your linked list is empty 
    this.head=node    
    }
    while(current.next){
  // if linked list is not empty next will exist there
  current=current.next      
    }
   //after coming out of this loop , current will point to null
   current.next=node
   this.size++
   // next basically points either to null or a node , right. it never points to an element. node he hai jo hai
  // contructor ki node hamesha null ko point karegi lekin linked list mai ya toh vo kisi dusre node ko point
  //karegi ya null ko.  
}
}
insert(i,element){
// insert a node at a specific index
if(i<0||i>this.size){
console.log("please enter a valid index")
}else{
    // iterate over the linked list till you reached to you index
var it=0
var prev=0
var current=this.head
// we will start with head

if(i=00){this.head=node}
else{while(it<i){
it++
prev=current
current=current.next
}
node.next=current
prev.next=node
// it is always next which points to next node
}
}
}
remove(i){
if(i<0||i>this.size){
    console.log("Please Enter a valid index")
}else{
    // 1st case is that your LL is empty 
    if(this.head==null){
console.log("LL is already empty")
    }else{
    // if it is not empty then we are going to remove some element from there.
    var node=new Node()
    let current=this.head
    var it=0
    while(it<=i-2){
        it++
        current=current.next
    }
    current=current.next.next    
    
    }
// just kill one of the next pointer and your element will be removed 
}



}
// remove element from a linked list . now we i am familiar with working with linked list
}



// let LL=new List()
// LL.add(12)
// LL.add(24)
// console.log(LL)