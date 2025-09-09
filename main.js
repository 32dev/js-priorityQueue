class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(value, priority) {
        this.item.push({ value, priority });
        this.item.sort((a, b) => a.priority - b.priority);
    }
    dequeue() {
        return this.item.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.item.length === 0;
    }
}

const pq = new PriorityQueue();
pq.enqueue("일반 고객", 5);
pq.enqueue("VIP 고객", 1);
pq.enqueue("단골 고객", 3);

console.log(pq.dequeue());
console.log(pq.dequeue());