/**
 * #141. Linked List "Tortoise and Hare" Algorithm
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const LinkedListNode = require('../dataStructures/LinkedList/LinkedListNode');
const LinkedList = require('../dataStructures/LinkedList/LinkedList');

/**
 * IMPLEMENT hasCycle
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;  
        if (slow == fast) return true; 
    }

    return false;
};



const basicCycleList = new LinkedList();

basicCycleList.append(3);
basicCycleList.append(2);
basicCycleList.append(0);
basicCycleList.append(-4);




console.log(JSON.stringify(basicCycleList.head.next.next.next.next));



const output = { 
    "head": { 
        "value": { 
            "value": 3, 
            "next": null 
        }, 
        "next": { 
            "value": { 
                "value": 2, 
                "next": null 
            }, 
            "next": { 
                "value": { 
                    "value": 0, 
                    "next": null 
                }, 
                "next": { 
                    "value": { 
                        "value": -4, 
                        "next": null 
                    }, 
                    "next": null 
                } 
            } 
        } 
    }, 
    "tail": { 
        "value": { 
            "value": -4, 
            "next": null 
        }, 
        "next": null 
    }, 
    "compare": { } 
};