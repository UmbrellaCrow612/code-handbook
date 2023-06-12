# Basics of Databases

## What is a Database?

A **database** is a structured collection of data that is organized and stored in a way that enables efficient retrieval, updating, and management of the data. It acts as a central repository for storing and organizing information.

## Key Terminology

To understand databases, it's important to be familiar with the following key terms:

- **Tables**: Tables are the fundamental structure of a database. They represent entities or objects and consist of rows (also known as records) and columns (also known as fields). Each row in a table represents a single record, while each column represents a specific attribute or piece of information.

- **Records**: Records, also referred to as rows, are individual entries within a table. They contain data related to a particular entity or object. For example, in a table of customers, each row represents a specific customer and holds information like their name, address, and contact details.

- **Fields**: Fields, also known as columns, represent specific attributes or data elements within a table. They define the type of data that can be stored and provide a structure for the information. Examples of fields in a customer table could include "Name," "Address," and "Phone Number."

- **Relationships**: Relationships define the connections between tables in a database. They represent how different tables are related to each other based on shared data. Common types of relationships include one-to-one, one-to-many, and many-to-many. These relationships ensure data integrity and enable efficient data retrieval.

## Relational Databases

Relational databases are the most common type of database. They organize data into tables and establish relationships between them. Here are some key aspects of relational databases:

- **Primary Keys**: A primary key is a unique identifier for each record in a table. It ensures that each record can be uniquely identified and helps maintain data integrity.

- **Foreign Keys**: Foreign keys are columns in a table that establish relationships with the primary key of another table. They enable linking records across tables and maintaining data consistency.

- **Normalization**: Normalization is a process that helps eliminate data redundancy and improve data integrity. It involves dividing data into multiple tables, ensuring each table represents a single entity or concept, and establishing relationships between them.

## Non-Relational Databases (NoSQL)

While relational databases are popular, there are also non-relational databases, often referred to as NoSQL databases. These databases differ from traditional relational databases in the following ways:

- **Flexible Schema**: NoSQL databases offer flexible schemas, allowing for the storage of unstructured or semi-structured data. This flexibility makes NoSQL databases suitable for handling large and dynamic datasets.

- **Scalability**: NoSQL databases are designed to handle massive amounts of data and can scale horizontally across multiple servers. They provide high-performance and distributed computing capabilities.

- **Types of NoSQL Databases**: There are different types of NoSQL databases, including document databases (e.g., MongoDB), key-value stores (e.g., Redis), columnar databases (e.g., Cassandra), and graph databases (e.g., Neo4j). Each type has its own strengths and use cases.

This covers the basics of databases, including key terminology, relational databases, and non-relational (NoSQL) databases. Understanding these fundamentals is crucial for further exploration and mastery of database concepts and technologies.
