#### [Quantum Use Case Analysis](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/usecases.md)

----------------------------


#### QC Use Cases

---------------
- **Clustering Market Data**	- A stock market network often referred to as a market graph is a model in which stocks are nodes and edges represent a relationship between the stocks. The availability of high throughput electronic exchanges offering real-time low latency data feeds resulted in an electronic trading environment where computational speed is a critical component. Market graphs can be built with high frequency market data (see for example A parallel workflow for real-time correlation and clustering of high-frequency stock market data). Naturally the ability to extract information from market graphs based on high frequency data depends on the ability to perform fast calculations but important information can be contained in the solutions of computationally difficult problems. In particular while the calculation of stocks correlations according to chosen similarity technical indicators is polynomial in the number of stocks finding the largest cluster or clique of stocks that exhibit highly correlated trading patterns is NP-hard. The max-clique problem is in the class of problems that can be tackled by QAOA and QADI.https://arxiv.org/pdf/1807.03890.pdf	
-------------------
-	**Credit Scoring Classification**	 - 	Credit scoring and classification is a significant problem in computational finance. U.S. household debt alone is estimated to be around $14 trillion (US FED 2016). According to the U.S. Federal Deposit Insurance Corporation 547 U.S. lending institutions have failed in the 15 years since 2001 with non-performing loans being a major cause even if according to the 2016 Credit Access Survey by the U.S. Federal Reserve Bank of New York approximately 40% of U.S. credit applications are rejected. Feature selection is used to reduce the number of variables input to a classifier in order to simplify the interpretation of the results of the classifier to provide flexibility and ease of integration into specialized applications and to avoid possible costs for unnecessary data which would only be introducing noise. Mathematically features selection consists in identifying a subset of 𝐾 influential and independent features in a larger initial set of 𝑁 features. The possible number of subsets of size 𝐾 grows exponentially with 𝑁. The feature selection problem can be expressed in terms of a quadratic optimisation and QAOA and QADI can therefore be employed and run on a quantum annealer https://arxiv.org/pdf/1807.03890.pdf	
-------------------
-	**Dynamic Portfolios**	- A central problem in finance is the optimal allocation of capital across a pool of assets. The discrete dynamic portfolio optimisation problem can be summarised as the problem of investing in a set of 𝑁 assets with an investment horizon divided into 𝑇 time steps. Given a forecast of future returns and the risk of each asset at each time step the problem consists in deciding how much to invest in each asset at each time step taking into account transaction costs. The continuous-variable version of the problem is easier but it is of limited use for assets that can only be traded in large lots. One approach to the discrete problem could be to compute the portfolio that maximizes the expected return subject to a level of risk at each time step. This would result in a series of “statically optimal” portfolios. However not only the single-period discrete portfolio optimization is NP-hard but the approach would not necessarily generate portfolios that are “globally optimal” as the overall risk-adjusted return can be greater than the combined risk-adjusted returns from the series of “statically optimal” portfolios. An optimal solution over 𝑇 can be found by expressing the problem as a quadratic optimization as in Solving the optimal trading trajectory problem using a quantum annealer reducing the problem once more to the methods of QAOA and QADI https://arxiv.org/pdf/1807.03890.pdf	
-------------------
-	Asset/Liability/Risk Management	Value at risk (VaR) a quantile of the loss distribution is a widely utilized metric used in by banking institutions implementing Basel III. Monte-Carlo simulations the VaR calculation tool of choice are thought to show advantage on quantum annealing machines https://www.nature.com/articles/s41534-019-0130-6	
-------------------
- **Cutting Stock** -	Cutting materials into a set of desired shapes while minimizing waste is an NP-Hard problem reducable to the knapsack problem. Large steel plate cutting factories are moving from producer-centric models to consumer-centric models where desired shapes and quantities frequently change. Formulated as a knapsack problem; we would like produce an optimal production design - production steps and related intermediate products. https://pdfs.semanticscholar.org/1417/64b5e86dc6c2647dfce48098794c79d5a38b.pdf?_ga=2.115996801.665139585.1560375598-183914737.1555621357	
-------------------
-	**Capital Budgeting** -	In order to fairly allocate costs and gains across a coalition of actors; when forecasting capital budgets; one commonly used method is the calculation of a Shapely Value. Graver Basis has been proved to be a high quality method of calculating Shapely Values; but its computational complexity scales exponentially with the size of the problem. We would like to use quantum computing to generate Graver bases; and use the resulting high quality Shapely values to collaborate on capital budgeting (e.g. multiple corporations sharing production lines). https://arxiv.org/pdf/1902.04215.pdf	
-------------------
-	**Convertible Bond Valuation** -	Learning of approximate rate credit and equity dynamics and applying NDP to find valuation and optimal exercise decisions https://arxiv.org/pdf/1904.05803.pdf	
-------------------
- **Infectious Disease Spread Control** -	There are multiple types of infectious diseases that are spread through different channels. Preventions of spreading disesases can be represented as a graph problem. Modeling this could decrease the likelihood of outbreaks. Using a quantum computer to optimize intervention checkpoints could help the general population in a crisis by expediting model calculation. With connecting dominating set we can identify the likelihood of transferrence between two individual because the CDS identifies the distance between two nodes. https://patentimages.storage.googleapis.com/e1/c5/a3/d6b140b0ecb77f/US20170286852A1.pdf	
-------------------
- **Distribution	Coloring** - Used to ensure that a shared resource isn't assigned to two simultaneous tasks. Real time coloring allows for real time distribution decisions https://www.researchgate.net/publication/330069797_Quantum_Algorithms_for_Colouring_of_Graphs	
-------------------
- **DNA Sequencing**	- DNA Sequencing involves multiple trials; with multiple positive sequences per segment being used to calculate the result. Using the graph-based maximum weighted co-k-plex relaxation method; which can be represented in QUBO form; we can prevent more false negative results and achieve faster/higher quality sequencing results. https://arxiv.org/abs/1601.06693	
-------------------
- **Drug Discovery**	- Graph Similarity/Clique - Both will have significant impacts on finding new drug formulations that bind and destroy viruses and cure ailments https://arxiv.org/abs/1601.06693	
-------------------
- **Electricity Trading** -	Electricity trading differs from commodity trading in that it occurs instantaneously. Several sub classes of this problem have been shown to be NP hard; when certain restrictions are applied. We would like to reformulate these problems as MaxFlow problems and optimize the flow of power through an electrical grid of producers and consumers. https://pdfs.semanticscholar.org/ed27/7c78e87282539d00540af5aff84aeede6cf8.pdf	
-------------------
- **Exam Timetabling**	- Scheduling resources to avoid double booking is an NP hard problem that can be formulated as a MaxCut combinatorial optimization problem. Global professional testing requires sites; proctors; admins and materials. We would like a tool to optimize the use of these limited resources; allowing tests to be administered efficiently and promptly. https://grove-docs.readthedocs.io/en/latest/qaoa.html	
-------------------
- **Facility Location** -	Placement of multiple facilities; with constraints on the locations of facilities; and more complex optimization criteria is an NP-hard graph problem which can be reduced to the set cover problem. https://arxiv.org/pdf/1302.5843.pdf	
-------------------
- **Optimal Feed Blending** -	Commercial feed blending is a complex process consisting of many potential raw ingredients and final products. The sheer number of daily orders and final products at a typical feed mill means that raw ingredients cannot be mixed to directly produce final products in an economical fashion. As a result; the intermediate production of pellets with prespecified nutritional content is a necessity that makes the feed blending problem highly nonlinear. We would like a fundamental tool for optimization problems requiring variable discretization such as commercial feed blending. https://www.researchgate.net/publication/4780970_Optimal_Feed_Mill_Blending	
-------------------
- **Fraud Detection** -	Two widely used algorithms in classical anomaly detection are the kernel principal component analysis and the one-class support vector machine. We would like to employ corresponding quantum algorithms to detect anomalies in quantum states. https://arxiv.org/abs/1710.07405	
-------------------
- **Gasoline Blending** -	Commercial gas blending; like feed blending; requires mixtures exactly suited to the needs of many different gasoline powered engines. The vast number of potential intermediate mixtures requires a non-linear optimization model. We would like a fundamental tool to provide an optimized gasoline blending plan. https://www.researchgate.net/publication/4780970_Optimal_Feed_Mill_Blending	
-------------------
- **Generator Commitment**	- Variance-Constrained Portfolio Optimization: Any portfolio optimization that constrains some type of variance whether portfolio risk tracking error or something else is a good candidate for LDw https://arxiv.org/abs/1509.05001	
-------------------
- **Inventory Management** -	Knapsack/General Optimization Variance-Constrained Portfolio Optimization: Any portfolio optimization that constrains some type of variance whether portfolio risk tracking error or something else is a good candidate for LD https://arxiv.org/abs/1509.05001	
-------------------
- **Machine Allocation**	- In automated warehouses; such as grocery picking/packing or hardware milling/assembly; we often have well into the thousands of robots being utilized. This problem can be formulated as a time-indexed quadratic unconstrained binary optimzation problem. D-Wave's Vesuvius (500Q) annealer was able to optimally schedule 6 jobs for 6 machines. We would like build a generalized robot scheduler with a backend that supports swapping in newer D-Wave machines such as the Pegasus (5000Q; 2020). https://arxiv.org/abs/1506.08479	
-------------------
- **Mortgage & Insurance Behavior Classification** -	Logistic regression is a key function at the heart of many risk prediction ML models. LR entails an iterative gradient descent method; and is quite time consuming when processing big data sets. The proposed method provides exponential speedup calculating gradient descent; while retaining the classical gradients at each iteration. We would like to empower data analysts by offsetting the significant cost of training LR models. https://arxiv.org/pdf/1906.03834.pdf	
-------------------
- **Patient Procedure Scheduling**	- Optimal scheduling can impact outcomes of time sensitive organ transplant procedures by expanding pools of eligible matches. Scheduling is an NP hard problem; that can be reformatted as a time-indexed quadratic unconstrained binary optimization problem. We would like a tool to provide real time scheduling decisions. https://arxiv.org/abs/1506.08479	
-------------------
- **Portfolio Optimization**	- Investment reallocation Risk Management Spectrum Analysis Managing a stock portfolio - Assuming you can place a Future Value Score and a current cost of the stock. Can use the knapsack approach to solve for the best stocks to incorporate into a portfolio for a given price General Optimization problem - To properly account for the fact that different stocks are related to each other https://arxiv.org/abs/1508.06182	
-------------------
- **Crane Operation Optimization**	- Optimization technologies are commonly applied in logistics scheduling. Recent studies of crane operations in port cargo bays show the number of handlings could be reduced by up to 30% significantly improving operating cost and inventory time to market. Crane scheduling can be formulated as a graph coloring problem. https://arxiv.org/abs/1506.08479	
-------------------
- Product Mix	Investment reallocation Risk Management Spectrum Analysis https://arxiv.org/abs/1508.06182	
-------------------
- **Protein Folding	Anomaly Detection Pattern Recognition Protein Folding General Dominating Set Problems Clique** - Model the positions in which two chemicals will bind to each other Graph Similarity - To determine how close a new molecule shape matches a known one. Can be used to design binding molecules used in the early detection of diseases https://arxiv.org/abs/1601.06693	
-------------------
- Purchasing	Investment reallocation Risk Management Spectrum Analysis Project Scheduling Material Cutting Optimization Cryptography Payload and Cargo Optimization Multiprocessing Knapsack - Profit value can be assigned to each item and you can determine what set of products to purchase. General Optimization - Minimizing cost based on sets of products that you buy. Would have to construct a general formula that defines this including weights https://arxiv.org/abs/1508.06182	
-------------------
- **Radiation Dose/Exposure Optimization**	- Optimization methods are critical to radiation therapy; where the consequences of over or under dosing are serious. Targeted beam radiation volume (time X intensity) can be formulated as an objective function and translated into a QUBO problem. We would like a tool that can take solve optimal radiation beamlet usage for all applicable cancers. https://www.ncbi.nlm.nih.gov/pubmed/25932613	
-------------------
- **Staffing Scheduling** -	Shift and staffing scheduling is a well researched task that is today handled by shift and staffing managers. The problem however is a bit more complex; if we would like to include fairness; priority or distribution parameters into a scheduling model the complexity grows exponentially in the number of sub parameters (time between shifts; different break lengths; long week vs short weeks; taxing vs simple jobs). We would like a generalizable model to encode these workplace priorities. https://arxiv.org/abs/1506.08479	
-------------------
- **Working Capital Management**	- A Fundamental Tool for Optimization Problems Requiring Variable Discretization Project Scheduling Material Cutting Optimization Cryptography Payload and Cargo Optimization Multiprocessing Variance-Constrained Portfolio Optimization: Any portfolio optimization that constrains some type of variance whether portfolio risk tracking error or something else is a good candidate for LD https://arxiv.org/abs/1509.05001	
-------------------
- **Virtual Screening** -	Virtual screening is the process in which small molecules are compared to find new drug candidates. This happens at the very beginning of the drug discovery process. This is important because it takes over 10yrs and costs over $2B to bring a new drug to market. Using quantum computers we can compare molecules using graph methods and get better matches. Additionally as quantum computers are able to take on more complex problems we can screen for drugs never searched before. Molecular comparison is also useful in other areas of chemistry.https://arxiv.org/abs/1902.00352	
-------------------
- **Advertising Scheduling / Ad Revenue Maximization**	- Social Networks (Kernel Detection) News Broadcasting Investment reallocation Risk Management Spectrum Analysis Project Scheduling Material Cutting Optimization Cryptography Payload and Cargo Optimization Multiprocessing Combination of Optimization for cost benefit and Coloring to ensure that you don't have two similar advertisements back to back Optimization/Knapsack - Choosing the best ads to display based on cost and profit https://www.aaai.org/ocs/index.php/SOCS/SOCS16/paper/viewFile/13958/13239	
-------------------
- **Cyber Attack Hunting**	- Network intrusion prevention systesm will identify when a breach offurs on a network. By comparing the topology of a network with traffic patterns pre and post breach; we can identify what an attacker has been doing on a network. The way we will compare the two actvitiy patterns is graph similarity. https://arxiv.org/abs/1601.06693	
-------------------
- **GSM Networks**	- Security deficiencies and bugs in Authentication of SIM cards in Global Systems for Mobile (GSM) have led us to present new protocols for these networks using the principles of quantum cryptography. We would like to apply these protocols to known high risk network hand offs in order to prevent attacks such as SIM logging. https://arxiv.org/pdf/1812.02081.pdf	
-------------------
- **Image Segmentation**	- Representing image pixel by pixel using classical information requires an enormous amount of computational resources. Hence; exploring methods to represent images in a different paradigm of information is important. In this work; we study the representation of images in Quantum Information. The main motivation for this pursuit is the ability of storing N bits of classical information in only log(2N) quantum bits (qubits). https://arxiv.org/abs/1812.11042	
-------------------
- **Data Processing** -	The self-organizing feature map (SOFM) is a NN approach focusing on dimensionality reduction. It has been shown to have applications in meteorology and oceanography; project prioritization and selection; seismic facies analysis for oil and gas exploration and structural failure analysis. SOFM can be formulated as quantum-assisted clustering analysis. Hybrid classical/quantum-assisted clustering algorithms are logarithmic in the size of the data; and appear to be more robust than classical counterparts as noise is added. We would like to model one of these use cases as a hybrid quantum-assisted cluster analysis problem. https://arxiv.org/pdf/1803.02886.pdf	
-------------------
- **Network Design	Clustering** - Determine where the largest loads are and what the characteristics are in real time https://arxiv.org/abs/1506.08479	
-------------------
- Data Processing	In the era of big data; gathering intelligence from graphs has necessitated the development of compression techniques. One of the most widely used methods is Huffman coding which guarantees constructing a tree in O(n^2) and then traversing it in O(n). Huffman coding inspired methods show up to 80% reduction in the space required to store the graphs as compared to using the adjacency matrix. We would like to offset the cost of huffman coding using quantum computing; specifically quantum-inspired Huffman coding. https://arxiv.org/abs/1302.5130	
-------------------
- **Satellite Operations** - Satellite communication relies on line of site to relay data around the globe; bypassing ground based infrastructure. This nework of satellites is constantly moving; with signal quality relying on contiuous optimal positioning. The network can be formulated as a graph coloring problem. We would like a tool to identify possible cultprits of signal degredation; allowing them to be repositioned. https://arxiv.org/abs/1506.08479

--------------------
-------------------




![qcu](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/verta/zmfa/qcu.png)

----------
![qc_roadmap](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc_roadmap.png)

--------
![gc_skills](https://github.com/gopala-kr/Quantum-Dots/blob/master/23-Future-of-ET/etres/zd/gc_skills.png)

-------------
![qc41](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc41.png)

--------
![qc%40scale](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc%40scale.png)

----------
![qc42](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc42.png)

-------------------
![qc_hw](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc_hw.png)

--------------
![q2b](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/q2b.png)

----------------------
-----------------
Quantum simulators will enable the quantum approach to computation to advance faster than pure quantum hardware and pure quantum algorithms are currently advancing
Simulate complex chemical bonds and predict the structures of new drugs, semiconductors, and efficient catalysts.
Solve materials science problems (e.g. next-gen materials)  

Quantum computers can be used to simulate other quantum systems, such as complex molecules, to predict the outcome of chemical processes. Simulating complex quantum phenomena could be one of the most important applications of quantum computing. 
A key envisioned use is simulating molecular properties. In the long run, this can lead to advances in materials improvement and drug discovery. In quantum chemistry, quantum simulators could be used to simulate protein folding (misfolded proteins can cause diseases like Alzheimer’s and Parkinson’s). 



Quantum chemistry attempts to understand the complicated bonds and reactions of molecules with the help of quantum mechanics. Many details of chemical processes cannot be simulated even with the largest and fastest supercomputers. By modeling these processes with the help of quantum computers, scientists expect a better understanding of chemical bonds and reactions to apply to drug discovery, materials science and medicine. 
Characteristics


Quantum computing has the potential to help design new materials and industrial processes by precisely predicting the behavior of molecules, or even discovering new molecules. This could lead to the design of more efficient electric car batteries, new drug discovery, better artificial fertilizer production, carbon capture for air pollution, among so many other things. Quantum algorithms are the tools that tell quantum computers what to do; Trotter-type algorithms, for example, are used for molecular simulation or comparison, however their susceptibility to noise means that these applications won’t be practical for many years. In the meantime, the performances of classical algorithms are being enhanced by creating new, quantum-inspired algorithms.



Quantum-inspired molecular comparison refers to the use of structural molecular comparison algorithms that can be implemented and run on conventional computers, whose design is inspired by concepts from quantum information processing. Molecular comparison is a crucial part of early-phase drug design and discovery that involves intensive computational methods to review molecule matches and predict the positive effects of a therapy or drug while reducing negative side effects. 
Characteristics

Quantum-inspired methods use parallelization and problem-reformulation in algorithms and hardware
Enhance classical computing using quantum-inspired algorithms (not fully-quantum).
Perform graph similarity; compare two or more graphs to detect common patterns (e.g. find shared traits in molecules).




Quantum-inspired algorithms will enable the quantum approach to computation to advance faster than pure quantum hardware and pure quantum algorithms are currently advancing.
Solve real life problems faster than classical algorithms. Potential to analyze larger-scale molecules more quickly and cost effectively.
Predict the positive effects of a therapy or drug while reducing negative side effects. 




Today, it takes pharmaceutical companies at least 10 years and often billions of dollars to discover a new drug and bring it to market. Improving the front end of the process with quantum computing has the potential to  dramatically cut costs and time to market, repurpose pre-approved drugs more easily for new applications, and empower computational chemists to make new discoveries faster that could lead to cures for a range of diseases. Furthermore, the quantum simulation of chemical processes could in the future help solve problems in chemistry and thus, for example, give new impulses for materials science, medicine, and industrial chemistry.


-------------------
R&D FOR DRUG DISCOVERY

IBM has partnered with 15 universities in Africa, and will use IBM Q to research drug discovery based on Africa’s genetic diversity that could lead to new treatments for diseases like HIV or TB.
 
https://techcrunch.com/2019/06/12/ibm-brings-its-quantum-computer-program-to-16-african-universities/

-----------------------------------
NEW MATERIALS DISCOVERY

One of the most promising uses of quantum computing is the simulation and discovery of the properties of new materials and active products (for chemistry and pharmacy), through the simulation of atomic interactions. Projects based around this notion are in progress at Dow Chemicals and at Airbus.


https://corporate.dow.com/en-us/news/press-releases/dow-and-1qbit-announce-collaboration-agreement-on-quantum-computing

-------------------------

DRUG DISCOVERY AT QU&CO

Qu&Co is a Dutch-based quantum consulting firm which offers quantum-computational chemistry services to accurately simulate electron-dynamics on a large scale, for the discovery of new drugs and new chemicals and materials.

https://quandco.com/

---------------------------

HIGH-PERFORMANCE BATTERIES AT VOLKSWAGEN

Volkswagen has two in-house data labs for quantum computing in San Francisco and Munich. Volkswagen has also partnered with Google to explore structures for new materials, especially high-performance batteries for electric vehicles.

https://www.volkswagenag.com/en/news/2017/11/quantum-computing.html

-----------------------------

BATTERY CELL RESEARCH AT DAIMLER

Daimler, in partnership with IBM, is investigating quantum chemistry calculations for new battery technology. Daimler is also working with Google to create new materials for quantum technology and the development of new battery cells. 

https://www.daimler.com/magazine/technology-innovation/quantum-computers-future-daimler-google-ibm-technology.html?r=blog

-----------------------------
SUSTAINABLE FERTILIZERS

Current artificial fertilizers are based on ammonia, made via the Haber process. They use high temperatures and pressures and are energy-intensive. Quantum computing could help scientists understand the Haber process at the molecular level, and start-up Rigetti points to its value in making fertilizers.


https://supplychainanalysis.igd.com/news/news-article/t/quantum-computers-a-supply-chain-quantum-leap/i/19846

-------------------------

R&D AT BIOGEN

As a leading biotech company, Biogen is seeking to advance the development of new drugs for neurological and neurodegenerative diseases. Biogen has teamed up with Accenture Labs and 1QBit, a quantum software startup, to speed up the discovery of new drugs.
 
-----------------

R&D AT AMGEN

Amgen Inc., a biopharmaceutical company, would be naturally interested in using quantum computers for molecular simulations. IBM has recently shown the potential of quantum-based computational chemistry with the record-breaking simulation of the BeH2 molecule (beryllium hydride).

https://edgy.app/11-companies-set-for-a-quantum-computing-leap


------------------------

ANALYSIS OF US ELECTORAL DATA

By testing historical election and polling data on quantum training models, QxBranch, a data analysis and quantum computing software firm based in Washington D.C, was able to generate 2016 election forecasts similar to other professional forecasters, but with final outcomes that gave the Trump campaign a higher likelihood of victory.  

https://www.qxbranch.com/potential-for-improved-2020-election-forecasts-with-quantum-computers/ 


------------------

REINFORCEMENT LEARNING TO ENGINEER NOVEL THERAPEUTICS

The biotech firm ProteinQure creates computational R&D tools to perform drug design in silico. They leverage quantum computing, molecular simulations and reinforcement learning to engineer novel therapeutics.


https://www.proteinqure.com/

--------------

RECRUIT’S QUANTUM MACHINE LEARNING FOR MARKETING AND ADVERTISING APPS

Japan’s subsidiary Recruit Communications is testing quantum computing for marketing and advertising applications, specifically to improve recommendation systems with machine learning methods.

https://www.ciodive.com/news/4-early-real-world-quantum-computing-applications/520675/

--------------

ANALYSIS OF US ELECTRICAL GRID DATA 

Researchers at Purdue University are working on a solution to problems that arise from the huge amount of data generated by the United States electrical grid. Sensors collect 3 petabytes of data every two seconds, meaning that data analysis on that scale is extremely challenging. A potential solution combines quantum algorithms with classical computing on small-scale quantum computers to speed up database accessibility.


https://www.bgp4.com/2018/10/16/annealing-quantum-computers-tackle-big-data-with-a-ml-quantum-boltzmann-machine/

--------------

REINFORCEMENT LEARNING FOR VW AUTONOMOUS CARS

Volkswagen is experimenting with QML to prove the value of reinforcement learning in Self Driving Cars, by taking feedback directly from the environment. However, reinforcement learning is a type of machine learning whose hunger for data is even greater than supervised learning and it is really difficult to get enough data for reinforcement learning algorithms.

https://www.businessmodelsinc.com/solving-real-world-problems-with-quantum-computing/


-----------

OPTIMIZATION OF UTILITIES NETWORK SUPPLY QUALITY 

 
The Dubai Electricity and Water Authority (DEWA) is experimenting around distribution and optimization of the water and electricity networks, partnering with Microsoft in quantum. 

https://news.microsoft.com/2018/06/28/microsoft-and-dewa-bringing-quantum-computing-to-dubai/

----------

QUANTUM NETWORKS

KPN has implemented end-to-end quantum key distribution (QKD) in its network between KPN datacenters in The Hague and Rotterdam, the Netherlands. It is collaborating with ID Quantique, a Swiss company specialized in quantum encryption.

https://www.quantaneo.com/%E2%80%8BKPN-and-QuTech-to-collaborate-on-quantum-internet_a122.html

-----------

China takes QKD seriously 

Most of China’s massive investment in quantum has gone toward quantum security itself, including the development of quantum key distribution (QKD). China looks to be all in on QKD networks. The country has already built a 1,263-mile link between Beijing and Shanghai to deliver quantum keys. And a successful QKD demonstration by the Chinese Micius satellite was reported across the 4,700 miles between Beijing and Vienna.

https://www.technologyreview.com/2019/12/12/131600/china-is-beating-the-us-when-it-comes-to-quantum-security/


---------

SECURE ONLINE BANKING AT ABN AMRO

Dutch bank ABN Amro studies how quantum computing technology can be used to secure online banking.
The banking giant is working with QuTech, which was jointly established by Delft University of Technology and the Netherlands Organisation for Applied Scientific Research, to prove that quantum key distribution can be used to secure data traffic.

https://www.computerweekly.com/news/252465850/Dutch-bank-and-universities-begin-defence-against-quantum-computings-dark-side


------------

BT WORKS TO SECURE ITS NETWORK

BT announced an ‘unhackable’ quantum-secured network in June 2018. The collaborative project was led by the Quantum Communications Hub, part of the UK National Quantum Technologies Programme. 
The quantum link itself is said to be virtually “unhackable” because it relies on the use of single particles of light (photons), to transmit data encryption “keys” across the fibre. Should this communication be intercepted, the sender will be able to tell that the link has been tampered with and the stolen photons cannot then be used as part of the key, rendering the data stream incomprehensible to the hacker.

https://www.computerweekly.com/news/252442910/BT-announces-unhackable-quantum-secured-network


------------

QUANTUM SAFE SYSTEM ON DEUTSCHE TELEKOM‘S TRIAL NETWORK

SK Telecom has applied its quantum safe system on Deutsche Telekom’s trial network and plans to expand deployment to parts of commercial networks this year.
The South Korean telco's quantum-safe system consists of quantum key distribution, quantum random number generator, and an operating system.

https://www.zdnet.com/article/sk-telecom-applies-quantum-key-to-deutsche-telekom-network/

---------------

KPN WORKS TO MAKE QUANTUM-SAFE INTERNET A REALITY

KPN will be providing the infrastructure and locations that QuTech, a collaboration between TU Delft and TNO, will use for research and development. A desired application of a quantum internet is to provide virtually unbreakable privacy and a foundation of secure communication, guaranteed by the fundamental laws of physics.


https://www.overons.kpn/en/news/2019/kpn-and-qutech-join-forces-to-make-quantum-internet-a-reality

---------------------------

PORTFOLIO OPTIMIZATION AND RISK ANALYSIS

Quantum computing can be applied for many financial problems, such as portfolio optimization, finding arbitrage opportunities, and perform credit scoring.

https://www.ibm.com/downloads/cas/MBZYGRKY


-----------------

PORTFOLIO OPTIMIZATION AT MORGAN STANLEY

Morgan Stanley articulated the bank’s hope of speeding up portfolio optimizations, such as Monte Carlo simulations, with the help of quantum computing.

https://www.americanbanker.com/news/why-banks-like-barclays-are-testing-quantum-computing


----------------

PORTFOLIO OPTIMIZATION IN BANKING

First movers are the Royal Bank of Scotland, Goldman Sachs, and Citigroup which have funded quantum computing startups directly. Barclays and JPMorgan Chase have been experimenting with IBM’s quantum computing technology and joined the IBM Q Network. 


https://digitaleweltmagazin.de/2019/01/28/starting-the-quantum-incubation-journey-with-business-experiments/

------------------

ASSET OPTIMIZATION AT NATWEST

NatWest is using Fujitsu quantum-inspired digital annealer technology to solve some of its most complex, challenging and time-consuming financial investment problems by optimizing its mix of high-quality liquid assets including bonds, cash and government securities.

https://www.fujitsu.com/fts/about/resources/news/press-releases/2018/emeai-20181002-fujitsu-drives-quantum-inspired-project-to.html

----------------------------

BBVA pursues quantum advantage for investment portfolio optimization

BBVA is examining various lines of research to determine how quantum technologies could represent an advantage over traditional tools in different financial use cases such as dynamic portfolio optimization, credit scoring process optimization and currency arbitrage optimization. The bank launched a strategy that involves forging alliances, strengthening its internal capacity around this technology, evaluating the available tools, and developing proof of concepts in collaboration with research centers, traditional businesses and startups alike. 


https://www.bbva.com/en/bbva-pursues-the-financial-sectors-quantum-advantage/

-------------------

TRAFFIC FLOW OPTIMIZATION IN VOLKSWAGEN

The Volkswagen Group is the world’s first automaker to publicly use quantum computers, further expanding its digital capabilities. The company is cooperating with quantum computing company D-Wave Systems on a research project for traffic flow optimization. The project involves publicly available data from Beijing taxis that were used to plot optimal routes.


----------------------------

ROUTE OPTIMIZATION AT FORD

Ford is currently working with NASA (National Aeronautics and Space Administration) in the U.S. to examine how quantum computing can improve its business. One idea being explored is routing diesel delivery vehicles in such a way as to reduce harmful pollutants by ensuring their drive cycles are operating within an optimal range. Another idea is improving productivity in its manufacturing plants.


https://europe.autonews.com/automakers/how-vw-bosch-ford-daimler-aim-gain-quantum-computing

----------------------------------

OPTIMIZING VALIDATION PROCEDURES AT LOCKHEED MARTIN

Lockheed Martin, the American global aerospace, defense, security and advanced technologies company, is researching quantum computing for the purpose of optimizing and shortening validation procedures from 8 months to 6 weeks using embedded software.

https://www.digitaltrends.com/computing/lockheed-martin-d-wave-quantum-annealer/

---------------------------------

ROUTE OPTIMIZATION AT AIRBUS

Airbus is already exploring the use of quantum computing in areas such as “route optimization and satellite imagery." Moreover, in January 2019 the aircraft giant announced a global competition to encourage developers to find ways quantum computing can be applied to “aircraft design”.

https://digitaleweltmagazin.de/2019/01/28/starting-the-quantum-incubation-journey-with-business-experiments/


-------------------------------------------------

FLEET OPTIMIZATION AT DENSO

Denso, the global automotive components manufacturer headquartered in Japan, is working on the optimization of the operations of a fleet of electrical delivery vehicles. Partnering with Toyota, the research uses vehicle location data from 130,000 commercial vehicles and cloud-based quantum systems to analyze the information and improve efficiency. 

https://singularityhub.com/2018/02/01/why-quantum-computers-will-be-an-amazing-tool-for-social-innovators/

----------------------

OPTIMIZATION OF UTILITIES NETWORK SUPPLY QUALITY 

 
The Dubai Electricity and Water Authority (DEWA) is experimenting around distribution and optimization of the water and electricity networks, partnering with Microsoft in quantum.


https://news.microsoft.com/2018/06/28/microsoft-and-dewa-bringing-quantum-computing-to-dubai/

---------------------------------------

DRUG DISCOVERY 

A quantum computer would be able to map out trillions of molecular combinations and quickly identify the ones that would most likely work, significantly cutting down the cost and the time of drug development


https://www.businessinsider.in/science/7-awesome-ways-quantum-computers-will-change-the-world/articleshow/47006938.cms

----------------

TRAFFIC OPTIMIZATION

The management and optimization of traffic (road, rail, air, etc.), the operation of vehicle fleets and the management of autonomous vehicles are promising fields where the inherent qualities of Quantum could well express their potential. Several companies are evaluating this around the optimization of filling of airline fleets in near real time and in a global way.

https://www.businessinsider.in/science/7-awesome-ways-quantum-computers-will-change-the-world/articleshow/47006938.cms

--------------------

OPTIMIZATION IN ENERGY EXPLORATION 

Quantum computing could be used to improve oil exploration. BP and ExxonMobil have projects ongoing on this topic. 

https://www.spglobal.com/marketintelligence/en/news-insights/trending/x4cbur85qkeeniymgckgag2

----------------------

GENOME SEQUENCING

Quantum computing could be used to accelerate the sequencing of DNA genes, disrupting the healthcare industry.


https://www.technologynetworks.com/informatics/news/the-power-of-quantum-computing-harnessed-for-dna-study-298183

-------------------------

CANCER TREATMENT 

Quantum computing could be used to the optimization of treatment in radiotherapy and better and faster detection of brain tumors, which could be done in seconds instead of hours or weeks. This could mean reduced exposure to X-rays by simulating and optimizing the movement of waves in the human body.


https://news.microsoft.com/innovation-stories/quantum-computing-mri-cancer-treatment/

---------------------

SPACE EXPLORATION 

NASA has partnered with Google to research quantum computational methods for exoplanet detection from analysis of telescopic observations, alongside analysis of optimization and planning problems.

https://www.nas.nasa.gov/projects/quantum.html

https://nas.nasa.gov/assets/pdf/Quantum_Computer_Fact_Sheet_Fall2015.pdf


-----------------------------
--------------------------

QUANTUM SAFE NETWORKING

QuantLR used Ultimately Secure Quantum Key Distribution (QKD) solutions to secure data communication at a lower cost. QuantLR successfully deployed a POC showing that QKD is ready for mass deployment at a cost reduction of 90% over all previously deployed solutions.

------------------------
QUANTUM KEY DISTRIBUTION

Battelle installed commercial Quantum Key Distribution (QKD) system in the US connecting its headquarters in Columbus, Ohio to production facility in Dublin, Ohio. The QKD hardware used was Cerberis model from ID Quantique. Combined with ID Quantique’s Centauris encryptor, this provides a 1Gbps link with Layer2 encryption. The link between facilities requires dedicated dark (unlit) fiber.



-------------------------

ENCRYPTION FOR ELECTRONIC VOTING

Estonia has deployed i-voting system that allows citizens to vote at their convenience. The system uses public key infrastructure for secure digital authentication and signing. The infrastructure also allows forwarding data by using an encrypting key pair: a public encryption key and a private decryption key.





---------------------------------


QUANTUM NETWORKS

KPN has implemented end-to-end quantum key distribution (QKD) in its network between KPN datacenters in The Hague and Rotterdam, the Netherlands. It is collaborating with ID Quantique, a Swiss company specialized in quantum encryption.

--------------

Secure mobile communications

Mitsubishi Electric has developed the world’s first “one-time pad software,” an advanced encryption technique for mobile phones to ensure that telephone conversations remain confidential. Additionally, the company is involved in implementing their technology in a project being conducted by the National Institute of Information and Communications Technology to test the viability of mobile communications over a quantum secure network.

-------------------------


Digital sign

Blackberry: Launched a solution which will allow software to be digitally signed using a scheme that will be hard to break with a quantum computer. The Solution is actually the product of a partnership between BlackBerry and Isara Corporation, a company whose mission is to build quantum-safe security solutions. BlackBerry is using Isara’s cryptographic libraries to help sign and protect code as security evolves.

--------------------------

Cryptographic algorithims

KPN: Dutch landline and mobile telecommunications company implemented end-to-end quantum key distribution (QKD) in its network between KPN datacenters in The Hague and Rotterdam. KPN is collaborating with ID Quantique, a Swiss company specialized in quantum encryption.

--------------------

Visibility and incident management

Swiss Canton of Geneva: Implemented for the first time IDQ’s hybrid encryption solution, using state of the art Layer 2 encryption combined with Quantum Key Distribution (QKD). The Cerberis solution secures a point-to-point Gigabit Ethernet link used to send ballot information for the federal and cantonal elections from the central ballot counting station to the Geneva government data center. 



-----------------------

- https://ksusentinel.com/2021/02/26/global-quantum-computing-market-keyplayers-1qb-information-technologies-inc-qc-ware-corp-google-inc-qxbranch-llc/
- https://www.prnewswire.com/news-releases/the-worldwide-quantum-computing-industry-is-expected-to-reach-1-7-billion-by-2026--301229132.html
- https://www.scientificamerican.com/article/googles-quantum-computer-achieves-chemistry-milestone/
- https://www.newscientist.com/article/2253089-google-performed-the-first-quantum-simulation-of-a-chemical-reaction/


---------
-----------------

![QC_mapping](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/QC_mapping.png)
------------
![QC_mapping](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/pov.png)

------------
![QC_mapping](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc21.png)
------------
![qc22](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc22.png)
----------------
![qc23](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc23.png)
-------------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc24.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc25.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc26.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc27.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc28.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc29.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc30.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc31.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc32.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc33.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc34.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc35.png)
---------------

![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc36.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc37.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc38.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc39.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc40.png)
---------------

![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc43.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc44.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc45.png)
---------------
![qc24](https://github.com/gopala-kr/Quantum-Dots/blob/master/M1-Quantum-UseCase-Analysis/qc/qc46.png)



-------------
-----------------
