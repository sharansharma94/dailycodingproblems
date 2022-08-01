class Quack {
  constructor(left = [], right = []) {
    this.left = left;
    this.right = right;
    this.buffer = [];
  }

  print() {
    console.log(this.left, this.right);
  }

  push(newItem) {
    this.left.push(newItem);
  }

  pop() {
    if (
      this.left.length <= 0 &&
      this.right.length <= 0
    ) {
      console.log("Quack is already Empty");
      return;
    }
    if (this.left.length === 0)
      this.balance(this.right, this.left);
    this.left.pop();
  }

  pull() {
    if (
      this.left.length <= 0 &&
      this.right.length <= 0
    ) {
      console.log("Quack is already Empty");
      return;
    }
    if (this.right.length === 0)
      this.balance(this.left, this.right);
    this.right.pop();
  }

  balance(from, to) {
    const length = from.length;
    const halfPoint = Math.floor(length / 2);
    for (let i = 0; i < halfPoint; i++) {
      this.buffer.push(from.pop());
    }

    while (from.length > 0) {
      to.push(from.pop());
    }

    while (this.buffer.length > 0) {
      from.push(this.buffer.pop());
    }
  }
}

const quack = new Quack();

quack.push(1);
quack.push(2);
quack.push(3);

quack.print();
quack.balance(quack.right, quack.left);

quack.print();
quack.pull();
quack.pop();
quack.pop();
quack.pull();

quack.print();
