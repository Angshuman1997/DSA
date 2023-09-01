// Huffman coding is a popular data compression algorithm used to compress data efficiently. Here's a JavaScript implementation of Huffman coding:

class Node {
  constructor(char, freq) {
    this.left = null;
    this.right = null;
    this.char = char;
    this.freq = freq;
  }
}

function buildHuffmanTree(data) {
  const frequencyMap = new Map();

  // Calculate character frequencies
  for (const char of data) {
    if (frequencyMap.has(char)) {
      frequencyMap.set(char, frequencyMap.get(char) + 1);
    } else {
      frequencyMap.set(char, 1);
    }
  }

  // Create nodes for each character and its frequency
  const nodes = [];
  for (const [char, freq] of frequencyMap) {
    nodes.push(new Node(char, freq));
  }

  // Build the Huffman tree
  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);

    const left = nodes.shift();
    const right = nodes.shift();

    const newNode = new Node(null, left.freq + right.freq);
    newNode.left = left;
    newNode.right = right;

    nodes.push(newNode);
  }

  return nodes[0];
}

function buildHuffmanCodes(node, prefix = "") {
  const huffmanCodes = new Map();

  if (node) {
    if (node.char !== null) {
      huffmanCodes.set(node.char, prefix);
    }

    const leftPrefix = prefix + "0";
    const rightPrefix = prefix + "1";

    const leftCodes = buildHuffmanCodes(node.left, leftPrefix);
    const rightCodes = buildHuffmanCodes(node.right, rightPrefix);

    for (const [char, code] of leftCodes) {
      huffmanCodes.set(char, code);
    }

    for (const [char, code] of rightCodes) {
      huffmanCodes.set(char, code);
    }
  }

  return huffmanCodes;
}

function huffmanEncode(data) {
  const root = buildHuffmanTree(data);
  const huffmanCodes = buildHuffmanCodes(root);

  let encodedData = "";
  for (const char of data) {
    encodedData += huffmanCodes.get(char);
  }

  return encodedData;
}

function huffmanDecode(encodedData, root) {
  let decodedData = "";
  let currentNode = root;

  for (const bit of encodedData) {
    if (bit === "0") {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }

    if (currentNode.char !== null) {
      decodedData += currentNode.char;
      currentNode = root;
    }
  }

  return decodedData;
}

const data = "this is an example for huffman encoding";
const encodedData = huffmanEncode(data);
console.log("Encoded data:", encodedData);

const root = buildHuffmanTree(data);
const decodedData = huffmanDecode(encodedData, root);
console.log("Decoded data:", decodedData);

//   In this code:

//   We define a Node class to represent nodes in the Huffman tree.
//   The buildHuffmanTree function calculates character frequencies and builds the Huffman tree.
//   The buildHuffmanCodes function assigns Huffman codes to characters in the tree.
//   The huffmanEncode function encodes the input data using Huffman codes.
//   The huffmanDecode function decodes the encoded data using the Huffman tree.
//   Finally, we demonstrate encoding and decoding a sample string.
//   Make sure to have a good understanding of how Huffman coding works before using or modifying this code for your specific use case.
