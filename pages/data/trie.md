# Trie

## Introduction

A Trie (also known as a prefix tree) is a tree-based data structure that efficiently stores a collection of strings. It is particularly useful for fast retrieval of words or prefixes from a large set of strings. The name "trie" comes from the word "retrieval," highlighting its strength in retrieving data.

## Types of the Trie Structure

1. Standard Trie: In a standard trie, each node represents a single character, and edges represent the next character in the string. This type of trie provides a straightforward representation of the strings and their relationships.
   ![Standard Trie Diagram](/standard_trie_diagram.png)
2. Compressed Trie: Compressed tries optimize space usage by merging consecutive nodes with only one child into a single node. This compression technique reduces the overall number of nodes in the trie while maintaining the relationships between strings.
   ![Compressed Trie Diagram](/compressed_trie_diagram.png)

## Basic Operations

- Insertion: The insertion operation adds a word into the trie. Starting from the root, each character in the word is traversed, and if the corresponding child node doesn't exist, it is created. The process continues until the entire word is inserted, and a flag is set on the last node to mark it as a complete word.
- Search: The search operation determines if a given word exists in the trie. Starting from the root, each character in the word is traversed, and if at any point a required child node is missing, the search is unsuccessful. If the entire word is traversed, the search is successful if the last node is marked as a complete word.
- Deletion: The deletion operation removes a word from the trie. It involves recursively traversing the trie to find the nodes corresponding to the characters of the word to be deleted. Once the last character is encountered, the "is_word" flag on that node is set to False. If the node has no other children and is not marked as a complete word, it can be safely removed, and the process continues recursively.
- Prefix Search: The prefix search operation retrieves all words in the trie that start with a given prefix. It involves traversing the trie from the root until the prefix characters are exhausted. Then, the search collects all words starting from that node by traversing all the child nodes.

## Implementation

The Python implementation of the Trie data structure is as follows:

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_word = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_word

    def delete(self, word):
        def delete_helper(node, word, index):
            if index == len(word):
                node.is_word = False
                return len(node.children) == 0
            char = word[index]
            if char not in node.children:
                return False
            child_node = node.children[char]
            should_delete = delete_helper(child_node, word, index + 1)
            if should_delete:
                del node.children[char]
                return len(node.children) == 0
            return False

        delete_helper(self.root, word, 0)

    def search_prefix(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return []
            node = node.children[char]
        return self._collect_words(node, prefix)

    def _collect_words(self, node, prefix):
        words = []
        if node.is_word:
            words.append(prefix)
        for char, child_node in node.children.items():
            words.extend(self._collect_words(child_node, prefix + char))
        return words
```

## Usage

To use the Trie data structure and its operations in Python, you can follow these steps:

1. Create a new instance of the Trie class: `trie = Trie()`.
2. Insert words into the trie using the `insert(word)` method: `trie.insert("apple")`.
3. Search for a word using the `search(word)` method: `trie.search("apple")`.
4. Delete a word from the trie using the `delete(word)` method: `trie.delete("apple")`.
5. Search for all words with a given prefix using the `search_prefix(prefix)` method: `trie.search_prefix("ap")`.

```python
# Example Usage
trie = Trie()
trie.insert("apple")
trie.insert("application")
trie.insert("apricot")

print(trie.search("apple"))  # Output: True
print(trie.search("app"))    # Output: False
print(trie.search_prefix("ap"))  # Output: ['apple', 'application', 'apricot']
```

## Advantages

- Efficient Prefix Searching: Tries provide fast retrieval of all words that share a given prefix, making them ideal for applications like autocomplete or spell-checking. By traversing the trie based on the prefix, all relevant words can be obtained efficiently.
- Space-Efficient: Tries can store a large number of words using relatively less memory compared to other data structures like hash tables. The compression technique further reduces the space requirement by merging nodes.

## Disadvantages

- Space Consumption: Tries can use more memory than other data structures due to the need for additional nodes and edges. Each character in a string requires a separate node, which can result in increased space usage for large sets of words.
- Slower Insertion and Deletion: In some cases, insertion and deletion operations in tries can be slower compared to other data structures like hash tables or balanced search trees. This is because trie operations involve traversing the tree and potentially modifying multiple nodes.

## Time and Space Complexity

- Insertion: O(m), where m is the length of the word being inserted. Each character in the word requires traversing one level of the trie, resulting in a time complexity proportional to the length of the word.
- Search: O(m), where m is the length of the word being searched. Similar to insertion, search operations involve traversing the trie based on the characters in the word, resulting in a time complexity proportional to the length of the word.
- Deletion: O(m), where m is the length of the word being deleted. The deletion operation involves traversing the trie to find the nodes corresponding to the characters of the word, resulting in a time complexity proportional to the length of the word.
- Space Complexity: O(n \* m), where n is the number of words in the trie and m is the average length of the words. The space complexity accounts for the nodes and edges required to represent the words in the trie.

## Use Cases

- Autocomplete and Word Suggestion Systems: Tries are commonly used in applications that provide word suggestions based on user input, such as search engines or text editors. By efficiently retrieving all words with a given prefix, trie-based autocomplete systems can provide real-time suggestions.
- Spell-Checking and Correction: Tries are also utilized in spell-checking applications. By searching for words in the trie, misspelled words can be identified and suggestions can be provided based on the closest matches in the trie.
- IP Routing and Network Packet Forwarding: Tries find applications in computer networks, particularly in IP routing. Tries can be used to efficiently store and retrieve routing information for forwarding network packets based on their destination IP addresses.
- Data Compression Algorithms: Tries play a role in data compression algorithms like Huffman coding. By representing frequently occurring sequences of characters with shorter codes, tries can efficiently compress data.

## Comparison with Other Data Structures

- Trie vs. Hash Table: Tries are particularly useful when prefix-based searching is required. They excel at retrieving all words with a given prefix. In contrast, hash tables provide efficient direct key-value lookups but may not be as suitable for prefix-based searching.
- Trie vs. Balanced Search Tree: Tries are often more space-efficient than balanced search trees like AVL or Red-Black trees. However, tries may have slower average case performance for certain operations due to the overhead of traversing the tree.

## Summary

In summary, the Trie data structure is a tree-based data structure used for efficient storage and retrieval of strings. It provides fast prefix searching, making it suitable for applications such as autocomplete, spell-checking, IP routing, and data compression. While tries have advantages in terms of prefix searching and space efficiency, they may require more memory and have slower insertion/deletion compared to other data structures like hash tables or balanced search trees.
