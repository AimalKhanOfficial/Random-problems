//LC "Medium" Problem - https://leetcode.com/problems/add-two-numbers/


//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let splitAndJoin = (variable, splitChar) => [variable].toString().split(splitChar).reverse().join('');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = parseInt(splitAndJoin(l1, ',')) + parseInt(splitAndJoin(l2, ','));
    result = splitAndJoin(result, '');
    let head = new ListNode(result[0], null);
    let curr = head;
    for (let i = 1; i < result.length; i++)
    {
        //get to the next undefined node reference
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = new ListNode(result[i], null);
    }
    
    return head;
};

console.log('>> l1 = [2,4,3], l2 = [5,6,4]', addTwoNumbers([2,4,3], [5,6,4]));
console.log('>> l1 = [0], l2 = [0]', addTwoNumbers([0], [0]));
console.log('>> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]', addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));