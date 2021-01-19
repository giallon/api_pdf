class Node {
  constructor(n) {
    this.size = 0;
    this.id = n;
    this.chain = Promise.resolve();
    this.data = {};
  }

  push(callback) {
    this.chain = this.chain
      .then(async () => await callback(this.data))
      .catch(e => this.error && this.error(e))
      .then(() => this.size--);
    this.size++;
    return this.chain;
  }
}

class Cluster {
  constructor(n = 1) {
    console.log("Cluster launch with", n, "Nodes");
    this.nodes = Array.from({ length: n }, (_, i) => new Node(i));
  }

  on({ error }) {
    for (let i = 0; i < this.nodes.length; i++) {
      if (error) this.nodes[i].error = error;
    }
  }

  getAvailableNode() {
    return this.nodes.reduce((sum, cur) => cur.size < sum.size ? cur : sum);
  }

  push(callback) {
    const node = this.getAvailableNode();
    node.push(callback);
  }

  pushAll(callback) {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].push(callback);
    }
  }

  metrics() {
    return this.nodes.reduce((sum, cur) => (sum[cur.id] = cur.size, sum), {});
  }
}

module.exports = Cluster;
