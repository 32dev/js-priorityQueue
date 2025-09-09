class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(value, priority) {
        this.items.push({ value, priority });
        this.items.sort((a, b) => a.priority - b.priority);
    }
    dequeue() {
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

const pq = new PriorityQueue();
pq.enqueue("일반 고객", 5);
pq.enqueue("VIP 고객", 1);
pq.enqueue("단골 고객", 3);

console.log(pq.dequeue());
console.log(pq.dequeue());