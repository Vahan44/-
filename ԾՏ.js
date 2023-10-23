
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  getHead() {
    let current = this.head;
    return current
  }

}

const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(3);
myList.append(2);
myList.append(1);

let head = myList.getHead()



console.log(isPolindron(head))

function isPolindron(head) {
  var current = head
  let x = (next, cur, increase) => {
    if (next === undefined) return true
    return increase ? next == cur + 1 : next == cur - 1
  }


  let increase = true
  while (current) {
    if (increase && current?.next?.data == current.data || x(current?.next?.data, current.data, false)) {
      increase = false
    }

    else if (!x(current?.next?.data, current.data, increase)) {
      return false
    }

    current = current.next
  }

  return true
};





function convertToTitle(columnNumber) {
  var result = ""
  while(columnNumber > 0){
      columnNumber--
      result = String.fromCharCode((columnNumber % 26) + 65) + result
      columnNumber = Math.floor(columnNumber / 26)
      
  }
  return result
}

console.log(convertToTitle(300))








function romanToInt(input) {
  const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

let result = 0;

for (let i = 0; i < input.length; i++) {
    const cur = roman[input[i]];
    const next = roman[input[i + 1]];

    if (cur < next) {
        result += next - cur;
        i++;
    } else {
        result += cur;
    }
}

return result;
};

console.log(romanToInt('XVI'))
