---
emoji: ๐
title: ์๋ฃ๊ตฌ์กฐ - ๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ
date: '2023-01-13 23:00:00'
author: onemorebottlee
tags: blog ์๋ฃ๊ตฌ์กฐ ๋ฆฌ์คํธ CS ์ฐ๊ฒฐ๋ฆฌ์คํธ
categories: CS ์๋ฃ๊ตฌ์กฐ
---

## **์ฐ๊ฒฐ ๋ฆฌ์คํธ Linked List**

<br/>
์ฐ๊ฒฐ ๋ฆฌ์คํธ๋ ์ฌ๋ฌ ๋ธ๋๋ค์ด ์์ฐจ์ ์ผ๋ก ์ฐ๊ฒฐ๋ ํํ๋ฅผ ๊ฐ๋ ์๋ฃ๊ตฌ์กฐ์ด๋ค.
<br/>
์ฒซ ๋ธ๋์ธ Head์ ๋ง์ง๋ง ๋ธ๋์ธ Tail ์ฌ์ด์์ ๊ฐ ๋ธ๋๋ ๋ฐ์ดํฐ์ ๋ค์ ๋ธ๋๋ฅผ ๊ฐ๋ฆฌํค๋ ํฌ์ธํฐ๋ก ๊ตฌ์ฑ๋์ด ์๋ค.
<br/>
์ข์ข ๋ฐฐ์ด๊ณผ ๋น๊ต๋๊ธฐ๋ ํ๋๋ฐ ๊ฐ ์๋ฃ ๊ตฌ์กฐ์ ํน์ง์ ๋ค์๊ณผ ๊ฐ๋ค.

<br/>

|      |                           ๋ฐฐ์ด                            |                   ์ฐ๊ฒฐ ๋ฆฌ์คํธ                    |
| :--: | :-------------------------------------------------------: | :----------------------------------------------: |
| ์ฅ์  |                  ์ธ๋ฑ์ค๋ฅผ ํตํ ๋น ๋ฅธ ์ ๊ทผ                  |                ์ฝ์๊ณผ ์ญ์ ๊ฐ ์ฉ์ด                |
| ๋จ์  |    ์ฝ์๊ณผ ์ญ์  <br/> ์ค๊ฐ ๋ฐ์ดํฐ ์ญ์ ์ ๊ณต๊ฐ ๋ญ๋น ๋ฐ์    |          ์์ ์ ๊ทผ์ด ๋ถ๊ฐ๋ฅํด ๋๋ฆฐ ํ์          |
| ์ฉ๋ | ๋น ๋ฅธ ์ ๊ทผ์ด ์๊ตฌ๋๊ณ ,<br/> ๋ฐ์ดํฐ์ ์ฝ์๊ณผ ์ญ์ ๊ฐ ์ ์ ๋ | ์ฝ์๊ณผ ์ญ์  ์ฐ์ฐ์ด ์๊ตฌ๋๊ณ ,<br/> ๊ฒ์์ด ์ ์ ๋ |
|      |                                                           |                                                  |

<br/>

## **๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ**

<br/>

![๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ](image1.png)

๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ๋ ๊ฐ ๋ธ๋๊ฐ ๋ค์ ๋ธ๋๋ฅผ ๊ฐ๋ฆฌํค๋ฉฐ ํ ๋ฐฉํฅ์ผ๋ก ์ฐ๊ฒฐ๋์ด ์๋ ์๋ฃ ๊ตฌ์กฐ์ด๋ค.

<br/>

![๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ_์ถ๊ฐ&์ญ์ ](image2.png)

์ฐ๊ฒฐ ๊ด๊ณ๋ฅผ ์ง์ํ๋ ๊ฒ์ ์ฃผ์ํ๋ฉด ๋ฐ์ดํฐ ์ถ๊ฐ์ ์ญ์ ๊ฐ ์ด๋ ต์ง ์๋ค.

<br/>

### **์ถ๊ฐ**

![๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ_์ถ๊ฐ1](image3.png)
![๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ_์ถ๊ฐ2](image4.png)

์๋ก์ด ๋ธ๋๋ฅผ ์์ฑํ๊ณ , ์ ๋ธ๋๊ฐ ๊ทธ ๋ค์ ๋ธ๋๋ฅผ ๊ฐ๋ฆฌํค๊ฒ ํ๋ค.  
์ ๋ธ๋์ ์ด์  ๋ธ๋๊ฐ ์ ๋ธ๋๋ฅผ ๊ฐ๋ฆฌํค๊ฒ ํ๋ค.

<br/>

### **์ญ์ **

![๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ_์ญ์ 1](image5.png)
![๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ_์ญ์ 2](image6.png)
![๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ_์ญ์ 3](image7.png)

์ญ์ ํ  ํ๊ฒ ๋ธ๋๋ฅผ ์ฐพ๋๋ค.  
ํ๊ฒ ๋ธ๋์ ์ด์  ๋ธ๋๊ฐ ํ๊ฒ ๋ธ๋๊ฐ ๊ฐ๋ฆฌํค๋ ๋ธ๋๋ฅผ ๊ฐ๋ฆฌํค๊ฒ ํ๋ค.  
ํ๊ฒ ๋ธ๋์ ํฌ์ธํฐ๊ฐ ์๋ฌด๊ฒ๋ ๊ฐ๋ฆฌํค์ง ์๊ฒ ํ๋ค.

<br/>

### **๊ตฌํ**

<details>
<summary>์ฝ๋ ๋ณด๊ธฐ</summary>

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(val, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
```

</details>

```toc

```
