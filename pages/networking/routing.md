# Routing

## Introduction Routing

Routing is a fundamental concept in computer networks that involves the process of forwarding data packets from a source device to a destination device across multiple networks. It enables communication and data transfer between devices that are not directly connected.

### Components of Routing

1. **Routers**: Routers are network devices that facilitate the routing process. They operate at the network layer (Layer 3) of the OSI model and connect different networks together.

2. **IP Addresses**: IP addresses are unique numerical identifiers assigned to devices on a network. They consist of two parts: the network portion and the host portion.

### Routing Tables

Routers maintain routing tables, which are collections of network destinations and their associated next-hop information. A routing table contains entries that specify the network addresses and the outgoing interfaces or next-hop routers to reach those networks.

### Routing Protocols

Routing protocols are sets of rules and algorithms used by routers to exchange information about network reachability and determine the best paths for forwarding packets.

### Forwarding Decision

When a router receives an incoming packet, it examines the destination IP address and matches it against entries in its routing table. Based on the longest prefix match, the router determines the best route to forward the packet.

### Default Routes

A default route, or default gateway, is a special entry in a routing table used when no specific matching route is found for a destination. It serves as a catch-all route, allowing packets to be sent to a default gateway router that can handle forwarding beyond the local network.

### Routing Metrics

Routing metrics are parameters used to evaluate the quality or cost of a route. Metrics can include factors such as hop count, bandwidth, delay, load, or administrative preference.

### Routing Algorithms

Different routing algorithms are employed by routing protocols to calculate optimal paths. Distance vector algorithms, such as RIP, calculate routes based on the number of network hops. Link-state algorithms, like OSPF, build a complete map of the network and determine shortest paths using metrics.

Routing plays a critical role in enabling efficient and reliable communication across networks. By intelligently forwarding packets, routers ensure that data reaches its intended destination by choosing the best paths based on network topology, reachability, and routing metrics.

## Routing Tables

Routing tables are a critical component of routing in computer networks. They are used by routers to determine the best path for forwarding data packets from a source device to a destination device. A routing table consists of a collection of entries that contain information about network destinations and their associated next-hop information.

### Structure of a Routing Table Entry

Each entry in a routing table contains the following key information:

1. **Destination Network**: This field specifies the network address or range of network addresses for which the routing entry is valid. It identifies the destination networks to which packets can be forwarded.

2. **Next-Hop Router**: This field specifies the IP address or interface of the next-hop router to which packets should be sent for reaching the destination network. If the destination network is directly connected, the next-hop router may be the destination device itself.

3. **Interface**: This field identifies the outgoing network interface through which packets should be sent to reach the next-hop router or the destination network. The router examines the destination IP address of the packet and forwards it out through the appropriate interface.

4. **Metric**: This field represents the routing metric associated with the specific route. The metric is a value or a set of values that indicate the desirability or cost of using a particular route. Routing protocols use metrics to calculate the best path to a destination.

### Populating the Routing Table

There are two main ways to populate a routing table:

1. **Static Routes**: Static routes are manually configured by network administrators. They involve explicitly defining the destination network, next-hop router, and outgoing interface in the routing table. Static routes are typically used for small networks or for specific routing requirements.

2. **Dynamic Routes**: Dynamic routes are automatically learned and updated through the use of routing protocols. Routing protocols enable routers to exchange information about network reachability and automatically update their routing tables based on the learned routes. Dynamic routing allows for scalability and adaptability in large and complex networks.

### Route Selection and Longest Prefix Match

When a router receives an incoming packet, it looks up the destination IP address in its routing table. The router selects the best route for forwarding the packet based on a process called **longest prefix match**. The router matches the destination IP address against the network addresses in the routing table and selects the entry with the longest matching prefix.

For example, if the router receives a packet with a destination IP address of 192.168.1.100, it compares this address with the entries in the routing table. If there are multiple entries that match the destination IP address, the router selects the one with the longest prefix match (most specific entry).

### Default Routes

A default route, also known as the default gateway, is a special entry in the routing table that is used when there is no specific matching route for a destination network. The default route acts as a catch-all route and allows packets to be sent to a default gateway router.

The default route entry typically has a destination network of 0.0.0.0/0 (IPv4) or ::/0 (IPv6) and specifies the next-hop router or outgoing interface to use for all packets that do not match any other entries in the routing table.

### Routing Table Updates

Routing table updates occur when routers exchange routing information with each other through routing protocols. The routing protocols distribute updates that contain information about network reachability and metrics. Routers use these updates to adjust and maintain their routing tables, ensuring that they have up-to-date and accurate information about the network topology.

Regular updates and periodic exchanges of routing information allow routers to adapt to changes in the network, such as link failures, network additions, or changes in routing metrics. This dynamic nature of routing table updates ensures efficient and reliable packet forwarding in the network.

Routing tables are a crucial component of routing in computer networks. They provide routers with the necessary information to make informed decisions about the best paths for forwarding packets. By maintaining accurate and up-to-date routing tables, routers ensure efficient and reliable communication across networks.

## Routing Protocols

Routing protocols are sets of rules and algorithms that enable routers to exchange information about network reachability and determine the best paths for forwarding data packets. These protocols play a vital role in dynamically updating routing tables and ensuring efficient packet routing in computer networks.

### Purpose of Routing Protocols

The primary objectives of routing protocols are as follows:

1. **Network Discovery**: Routing protocols help routers discover and learn about the networks that are directly connected to neighboring routers. By exchanging routing information, routers build a comprehensive view of the network topology.

2. **Route Exchange**: Routing protocols facilitate the exchange of routing information among routers. They share details about network addresses, metrics, and other parameters necessary for routers to make informed routing decisions.

3. **Route Calculation**: Routing protocols employ various algorithms to calculate the best paths for forwarding packets. These algorithms consider factors such as network topology, link costs, and routing metrics to determine optimal routes.

4. **Route Maintenance**: Routing protocols continuously monitor the network to adapt to changes in network conditions. They dynamically update routing tables and respond to events like link failures, network additions, or changes in routing metrics.

### Types of Routing Protocols

There are several types of routing protocols, each suited for different network environments and requirements:

1. **Interior Gateway Protocols (IGPs)**: IGPs are used within an autonomous system (AS), which is a collection of networks under a single administrative control. Common IGPs include Routing Information Protocol (RIP), Open Shortest Path First (OSPF), and Intermediate System to Intermediate System (IS-IS). IGPs focus on routing within a single AS and are suitable for small to medium-sized networks.

2. **Exterior Gateway Protocols (EGPs)**: EGPs, such as the Border Gateway Protocol (BGP), are used for routing between different autonomous systems. BGP is the primary protocol used for routing on the internet. EGPs handle the exchange of routing information between different ASes and enable communication between networks belonging to separate administrative domains.

3. **Distance Vector Protocols**: Distance vector protocols, such as RIP, determine the best path to a destination based on the number of hops (routers) between networks. Routers periodically exchange their routing tables with neighboring routers, updating each other about network reachability. Distance vector protocols have simplicity but are prone to slow convergence and routing loops.

4. **Link-State Protocols**: Link-state protocols, such as OSPF and IS-IS, build a complete map of the network by exchanging information about the state of links and routers. Each router constructs a detailed view of the network topology and calculates the shortest path to each destination using algorithms like Dijkstra's algorithm. Link-state protocols offer faster convergence and more efficient use of network resources.

5. **Hybrid Protocols**: Hybrid protocols, like Enhanced Interior Gateway Routing Protocol (EIGRP), combine aspects of both distance vector and link-state protocols. They offer the flexibility and fast convergence of link-state protocols while reducing the computational and memory requirements.

### Routing Protocol Operation

Routing protocols operate through a series of steps:

1. **Neighbor Discovery**: Routers identify neighboring routers connected directly to their interfaces. This process involves exchanging hello messages to establish and maintain neighbor relationships.

2. **Routing Information Exchange**: Routers exchange routing updates, sharing information about network reachability and associated metrics. The updates contain details such as network addresses, next-hop routers, and metric values.

3. **Route Calculation**: Routers use the received routing information and apply the routing protocol's specific algorithm to calculate the best routes to destination networks. The algorithm considers factors like network topology, metrics, and policies to determine optimal paths.

4. **Route Advertisement**: Routers advertise their calculated routes to neighboring routers, sharing the information with the broader network. This dissemination ensures that all routers have consistent and up-to-date routing tables.

5. **Route Selection**: Each router evaluates the received routing updates, compares metrics, and selects the best routes for forwarding packets. The router updates its routing table accordingly.

6. **Route Maintenance**: Routers continually monitor the network, exchanging routing updates and detecting changes. If a link or network becomes unavailable or a better route is discovered, routers update their routing tables to reflect the changes.

### Administrative Distance

Administrative distance (AD) is a value assigned to routing protocols to determine the preference or trustworthiness of routes when multiple routing protocols provide routes to the same destination. Lower AD values indicate higher preference. If multiple routing protocols offer routes to a destination, the routing protocol with the lowest AD is chosen.

## Distance Vector Routing

Distance vector routing is a type of routing algorithm used in computer networks. It operates by measuring the distance or cost associated with reaching destination networks and selects the best path based on the number of hops (routers) between networks. Distance vector routing protocols exchange routing updates with neighboring routers to determine the optimal routes.

### Key Characteristics

Here are some key characteristics of distance vector routing:

1. **Hop Count**: Distance vector algorithms consider the number of hops (routers) between networks as the primary metric for determining the best path. The algorithm aims to minimize the hop count when selecting routes.

2. **Routing Table**: Each router maintains a routing table that contains entries for known networks, along with the next-hop router and associated hop count. The routing table is periodically updated based on received routing updates from neighboring routers.

3. **Routing Updates**: Routers exchange routing updates with neighboring routers to share information about the networks they know and the associated hop counts. These updates contain the network addresses, hop counts, and next-hop router information.

4. **Periodic Updates**: Distance vector protocols typically send periodic updates at regular intervals, regardless of whether there have been changes in the network topology. This helps routers keep their routing tables up-to-date, but it can result in slower convergence in the presence of network changes.

5. **Neighbor Exchange**: Routers send routing updates to their directly connected neighbors. Neighboring routers compare the received updates with their own routing tables and make decisions based on the updated information.

6. **Routing Loops**: Distance vector routing algorithms are susceptible to routing loops. A routing loop occurs when packets continuously circulate between routers without reaching their destination. Techniques such as split horizon and poison reverse are used to mitigate routing loops in distance vector protocols.

### Example: Routing Information Protocol (RIP)

The Routing Information Protocol (RIP) is an example of a distance vector routing protocol. It uses hop count as the metric and exchanges routing updates at regular intervals. Here's an overview of how RIP operates:

1. **Initial Configuration**: Each router is initially configured with its directly connected networks and assigns a hop count of 0 to them.

2. **Routing Updates**: Routers periodically send updates to their neighboring routers. These updates contain information about the networks they know, their hop counts, and the next-hop routers.

3. **Metric Calculation**: Upon receiving an update, a router adds one hop to the advertised hop count and compares it with its own routing table entry for the network. If the received hop count is lower, the router updates its routing table with the new hop count and the next-hop router information.

4. **Split Horizon**: To prevent routing loops, routers using RIP implement a technique called split horizon. Split horizon prevents a router from advertising routes back to the same interface from which they were learned. This helps avoid loops and improves routing stability.

5. **Triggered Updates**: When a router detects a change in the network, such as a link failure, it generates a triggered update to inform its neighbors immediately. This allows routers to quickly adjust their routing tables in response to changes.

6. **Count to Infinity Problem**: Distance vector routing algorithms, including RIP, can suffer from the count to infinity problem. This occurs when a router receives an update indicating a lower hop count for a network, leading to inaccurate information and routing loops. Techniques like split horizon with poison reverse are used to address this problem.

### Advantages and Disadvantages

Distance vector routing algorithms have several advantages and disadvantages:

**Advantages**:

- Simplicity: Distance vector routing protocols are relatively simple to understand and implement.
- Low computational overhead: The calculations in distance vector algorithms are less computationally intensive compared to other routing algorithms.
- Bandwidth efficiency: Periodic updates in distance vector protocols can be efficient in terms of bandwidth utilization when network changes are infrequent.

**Disadvantages**:

- Slow convergence: Distance vector protocols can experience slow convergence when network changes occur. The periodic nature of updates means it takes time for routers to learn about changes and update their routing tables.
- Inefficient path selection: Distance vector routing algorithms may not always select the optimal path based on factors other than hop count, such as link bandwidth or congestion.
- Scalability limitations: Distance vector protocols may not scale well in large networks due to the need to exchange complete routing tables with neighbors.

## Link-State Routing

Link-state routing is a type of routing algorithm used in computer networks. It operates by creating a detailed map of the network's topology and calculates the shortest path to each destination using algorithms like Dijkstra's algorithm. Link-state routing protocols exchange information about the state of links and routers to build an accurate view of the network.

### Key Characteristics

Here are some key characteristics of link-state routing:

1. **Link-State Database**: Each router in a link-state routing protocol maintains a database known as the link-state database. The link-state database contains information about the state of links and routers in the network, including their addresses, metrics, and other relevant details.

2. **Link-State Advertisement**: Routers share information about their directly connected links and routers with other routers in the network. This information is disseminated through link-state advertisements (LSAs) or similar messages.

3. **Topology Map**: Routers collect LSAs from neighboring routers to construct a comprehensive map of the network's topology. The topology map includes details about routers, links, and their associated metrics. It provides a clear view of the network's structure and connectivity.

4. **Dijkstra's Algorithm**: Link-state routing protocols use Dijkstra's algorithm or similar shortest path algorithms to calculate the best paths to destination networks. These algorithms consider the topology map and associated metrics to determine optimal routes.

5. **Shortest Path Calculation**: Each router runs the shortest path algorithm independently to calculate the shortest path to every other network in the network topology. This ensures that routers have consistent and up-to-date information about the best paths.

6. **Routing Table Generation**: Based on the shortest path calculations, routers generate their routing tables, which contain the next-hop router and associated metric for each destination network. The routing tables are used for forwarding packets towards their destinations.

### Example: Open Shortest Path First (OSPF)

Open Shortest Path First (OSPF) is an example of a link-state routing protocol widely used in computer networks. Here's an overview of how OSPF operates:

1. **Neighbor Discovery**: OSPF routers establish neighbor relationships with other OSPF routers in the network by exchanging hello packets. This helps routers identify their directly connected neighbors and ensure connectivity.

2. **Link-State Advertisements (LSAs)**: OSPF routers generate LSAs containing information about their directly connected links and routers. The LSAs include details such as router IDs, network addresses, link metrics, and other relevant parameters.

3. **Flooding LSAs**: Routers flood their LSAs to all other routers in the network, ensuring that every router receives the LSA updates. Flooding helps propagate information about the network's topology to all routers.

4. **Building the Topology Map**: Routers collect LSAs from neighboring routers and construct a topology map that represents the network's structure and connectivity. The topology map provides the basis for calculating the shortest paths.

5. **Shortest Path Calculation**: Using Dijkstra's algorithm, each router independently calculates the shortest path to each destination network based on the topology map and link metrics. This results in the determination of the best paths for packet forwarding.

6. **Routing Table Generation**: Routers generate their routing tables based on the calculated shortest paths. The routing tables contain entries with destination networks, next-hop routers, and associated metrics. These tables are used for making forwarding decisions.

### Advantages and Disadvantages

Link-state routing algorithms have several advantages and disadvantages:

**Advantages**:

- Faster convergence: Link-state routing protocols converge more quickly compared to distance vector protocols. Changes in the network are rapidly detected and propagated through the LSAs, leading to faster updates and adaptation.
- Optimal path selection: Link-state algorithms calculate the shortest paths based on metrics, resulting in optimal path selection. Factors like link bandwidth, delay, or load can be considered in path calculations.
- Scalability: Link-state protocols are designed to scale well in large networks. By exchanging only incremental updates, they reduce the bandwidth and processing requirements compared to distance vector protocols.

**Disadvantages**:

- More complex implementation: Link-state routing algorithms are more complex to implement compared to distance vector protocols. They require routers to maintain link-state databases and perform calculations using algorithms like Dijkstra's algorithm.
- Higher computational overhead: The calculations involved in link-state algorithms are more computationally intensive compared to distance vector algorithms. The routers need to process and analyze the link-state database to calculate optimal paths.
- Increased memory usage: Link-state protocols require routers to maintain a link-state database that contains detailed information about the network's topology. This can result in increased memory usage compared to distance vector protocols.

## Autonomous Systems (AS) and BGP

Autonomous Systems (AS) and Border Gateway Protocol (BGP) are integral components of the internet's routing infrastructure. They play a vital role in facilitating interconnection between different networks, enabling efficient and scalable routing on a global scale.

### Autonomous Systems (AS)

An Autonomous System (AS) refers to a collection of interconnected networks that are under the control of a single administrative entity. An AS can be an Internet Service Provider (ISP), a company, an organization, or any network operator that manages a group of interconnected networks.

ASes are assigned unique identifiers called Autonomous System Numbers (ASNs), which are used to identify and differentiate them on the internet. ASes are classified into two main types:

1. **Transit AS**: A transit AS is an AS that provides network connectivity to other ASes, allowing them to reach networks outside of their own AS. Transit ASes act as intermediaries, forwarding traffic between different ASes.

2. **Stub AS**: A stub AS is an AS that does not provide transit services to other ASes. It connects to one or more transit ASes to gain access to networks outside of its own AS. Stub ASes primarily focus on routing traffic within their own AS.

ASes are interconnected through physical links and exchange routing information to enable efficient routing across the internet. This interconnection is facilitated by the Border Gateway Protocol (BGP).

### Border Gateway Protocol (BGP)

Border Gateway Protocol (BGP) is the primary routing protocol used for interconnecting ASes and exchanging routing information between them. BGP allows ASes to advertise their network reachability information to other ASes and make informed decisions about how to route traffic across the internet.

Here are some key characteristics of BGP:

1. **Path Vector Protocol**: BGP is a path vector protocol, which means it not only considers the reachability of networks but also the path attributes associated with the advertised routes. Path attributes include factors like AS path, next-hop information, and route preferences.

2. **BGP Peering**: BGP establishes peering relationships between routers in different ASes. These routers exchange BGP updates to share information about the networks they know and the paths to reach them. BGP peers can be either neighboring routers within the same AS (internal BGP or iBGP) or routers in different ASes (external BGP or eBGP).

3. **Path Selection**: BGP uses a set of configurable rules and policies to select the best paths for routing. The selection process considers factors like path length, AS path, next-hop reachability, and various path attributes. BGP allows network administrators to influence path selection based on their specific requirements.

4. **Route Advertisement**: BGP routers advertise their network reachability information to their BGP peers by exchanging BGP update messages. These messages contain information about the network prefixes, associated path attributes, and reachability information. BGP updates are exchanged between neighboring routers to propagate the routing information throughout the internet.

5. **BGP Route Filtering and Policies**: BGP provides extensive flexibility for network administrators to control the advertisement and acceptance of routes. Administrators can apply filters and policies to modify, filter, or influence the routes exchanged via BGP, ensuring efficient and controlled routing.

6. **Internet Routing Backbone**: BGP forms the core routing infrastructure of the internet. Large-scale networks, including ISPs and major organizations, use BGP to exchange routing information and enable global connectivity.

BGP is designed to handle the complex task of interconnecting ASes and ensuring efficient and reliable routing across the internet. It enables routing policies to be enforced, facilitates traffic engineering, and provides scalability for the ever-expanding internet.

## Routing Metrics and Metrics-Based Routing

Routing metrics are parameters or values used by routing algorithms to determine the best path for forwarding network traffic. These metrics measure different aspects of a network link or path and influence the decision-making process of routers in selecting optimal routes. Metrics-based routing refers to the practice of using these metrics to make routing decisions.

### Common Routing Metrics

Here are some commonly used routing metrics:

1. **Hop Count**: The hop count metric indicates the number of routers or network segments (hops) that need to be traversed to reach a destination. The lower the hop count, the shorter the path, and usually, the better the route.

2. **Bandwidth**: Bandwidth represents the capacity or available data transmission rate of a network link. Higher bandwidth links are typically preferred for routing traffic as they can handle more data.

3. **Delay**: Delay measures the time it takes for a packet to travel from the source to the destination. Lower delay links are preferred for real-time applications or when low latency is critical.

4. **Reliability**: Reliability reflects the stability and dependability of a network link. More reliable links, which are less prone to errors or failures, are preferred for routing.

5. **Load**: Load refers to the amount of traffic or utilization on a network link. Less congested or underutilized links are preferred to avoid bottlenecks and ensure efficient data transmission.

6. **Cost**: Cost is an abstract metric that represents the expense or resource utilization associated with using a particular network path. It can factor in various considerations such as financial cost, link quality, or administrative preference.

These metrics can be used individually or in combination to determine the best routes based on specific requirements and network conditions.

### Metrics-Based Routing

Metrics-based routing involves selecting routes based on the values of routing metrics. Routers evaluate the available paths using these metrics and choose the one that meets the desired criteria. This approach allows network administrators to define routing policies based on specific objectives and network characteristics.

For example, if low latency is a priority, routers can be configured to choose paths with the lowest delay metric. If bandwidth is crucial, routers can prefer routes with higher bandwidth capacities. Alternatively, a combination of metrics can be used, assigning weights or priorities to each metric to reflect their relative importance.

Metrics-based routing can be static or dynamic. In static routing, administrators manually configure the routing metrics for specific routes. In dynamic routing, routing protocols exchange information about metrics with neighboring routers to dynamically adapt to changes in the network, such as link failures or fluctuations in metric values.

Dynamic routing protocols, like OSPF or BGP, often support metrics-based routing by allowing administrators to specify the importance of different metrics and influencing route selection based on their preferences.
