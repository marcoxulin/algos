class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const zipperLists = (head1, head2) => {
//   let p1 = head1.next;
//   let p2 = head2;
//   let tail = head1;
//   let counter = 0;
//   while(p1 !== null && p2 !== null){
//     if(counter % 2 === 0){
//       tail.next = p2; 
//       p2 = p2.next;
//     } else {
//       tail.next = p1;
//       p1 = p1.next;
      
//     }
//       counter++;
//       tail = tail.next;
//   }
//   if(p2 !== null) tail.next = p2;
//   if(p1 !== null) tail.next = p1;
//   return head1;
// };

const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
};

module.exports = {
  zipperLists,
};


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
//iterate till one of the pointers is null
//

// a -> b -> c
// |  / |
// x -> y -> z