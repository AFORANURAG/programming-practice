class LinkedListNode{
    constructor(data){
    this.next=null;
    this.val=data;
    this.flag=false
    }
    }
class LinkedList{
constructor(){
    this.head=null;
    this.length=0
}
insertAtHead(data){
let node=new LinkedListNode(data)  
node.flag=true;
node.next=this.head
this.head=node
this.length++
return this.head


}insertAtTail(data){
let node=new LinkedListNode(data)
node.flag=true
if(this.head==null){
this.head=node
this.length++
return this.head
}else{
let current=this.head;
while(current.next!==null){
    current=current.next
}
this.length++
current.next=node
return this.head
}


}
deletenode(position){
// so this will delete the node at a particular position    
//assuming 0 based indexing in the linked list
if(this.head==null){
return "Your LinkedList is Empty"
}
if(position==0&&this.head!==null){
this.head=this.head.next
this.length--
return this.head

}else{
let current=this.head 
let i=1
while(i<position-1){
current=current.next
i++

}  
let temp=current.next.next
this.length--
current.next.next=null
current.next=temp
return this.head
}

}
deleteAtMiddle(data){
if(this.head==null){
    return "Linked List is Empty"
}
else{
let fast=this.head;
let slow=null;
let current=this.head
while(fast!==null&&fast.next!==null){
//undefined.next!==null isko hatane kai liye fast!==null, and compiler ----from left to right
slow=current
current=current.next
fast=fast.next.next

}
slow.next=current.next
this.length--
return this.head
}

}


//implementing stacks and queues with linked list 
}
let MyLinkedList=new LinkedList()
MyLinkedList.insertAtHead(5)
MyLinkedList.insertAtHead(4)
MyLinkedList.insertAtHead(3)
MyLinkedList.insertAtHead(2)
MyLinkedList.insertAtHead(1)
MyLinkedList.insertAtTail(6)
// MyLinkedList.deletenode(4)
MyLinkedList.deleteAtMiddle()

console.log(MyLinkedList)

