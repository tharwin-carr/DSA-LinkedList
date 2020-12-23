class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        //Check for the item
        while (currNode.value !== item) {
            /*Return null if its the end of the list
            and the item is not on the list*/
            if (currNode.next === null) {
                return null
            }
            else {
                //Otherwise, keep looking
                currNode = currNode.next
            }
        }
        //Found it
        return currNode;
    }
    remove(item) {
        //If the list is empty
        if (!this.head) {
            return null;
        }
        //If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //Start at the head
        let currNode = this.head;
        //Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            //Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main() {
    let SLL = new LinkedList();

    SLL.insertFirst("apollo");
    SLL.insertFirst("boomer");
    SLL.insertFirst("helo");
    SLL.insertFirst("husker");
    SLL.insertFirst("buskler");
    SLL.insertFirst("tahuida");

    SLL.remove("buskler");
    SLL.remove("husker");

    SLL.insertBefore("Athena", "Boomer");
    return SLL;
}

    const SLL = Main();

    function display(list) {
        let output = "";
        let currNode = list.head;
        while (currNode !== null) {
          output += currNode.value;
          if (currNode.next !== null) {
            output += " -> ";
          }
          currNode = currNode.next;
        }
        return output;
      }
      console.log(display(SLL));
      module.exports = LinkedList