-------------


 ##### [Contents](#contents)

 - [Quantum Information Theory](#quantum-information-theory)
 - [Quantum Gates and Circuits](#quantum-gates-and-circuits)
 - [Qubits Generation Methods](#qubits-generation-methods)
 - [Quantum Algorithms](#quantum-algorithms)
 - [Building Blocks - Architecture Of Quantum Computer](#building-blocks---architecture-of-quantum-computer)
 - [Quantum Langauges and Software Infrastructure](#quantum-langauges-and-software-infrastructure)
 - [Quantum Computers in the Cloud](#quantum-computers-in-the-cloud)
 - [Industrial Quantum Applications](#industrial-quantum-applications)
 - [Quantum Internet](#quantum-internet)
 - [Build a Quantum Application](#build-a-quantum-application)


---------------------
#### Quantum Information Theory

[Back to top](#contents)

- [Quantum information](https://en.wikipedia.org/wiki/Quantum_information), Wiki.
- [Quantum Information Theory](https://arxiv.org/pdf/quant-ph/0011036.pdf), 2000.
- [Quantum Information Theory and The Foundations of QuantumMechanics](https://arxiv.org/pdf/quant-ph/0412063.pdf), 2004.
- [Introduction to quantum information theory and outline of two applications to physics](https://arxiv.org/pdf/1507.00957.pdf), 2015.
- [From Classical to Quantum Shannon Theory](https://arxiv.org/pdf/1106.1445.pdf), 2019.
--------------

      Unlike classical digital states (which are discrete), a qubit is continuous-valued, describable by a direction on the Bloch sphere. Despite being continuously valued in this way, a qubit is the smallest possible unit of quantum information, and despite the qubit state being continuously-valued, it is impossible to measure the value precisely. 
      
      Five famous theorems describe the limits on manipulation of quantum information.

      - no-teleportation theorem: which states that a qubit cannot be (wholly) converted into classical bits; that is, it cannot "read".
      - no-cloning theorem: which prevents an arbitrary qubit from being copied.
      - no-deleting theorem: which prevents an arbitrary qubit from being deleted.
      - no-broadcast theorem: Although a single qubit can be transported from place to place (e.g. via quantum teleportation), it cannot be delivered to multiple recipients.
      - no-hiding theorem: which demonstrates the conservation of quantum information.
      
      These theorems prove that quantum information within the universe is conserved.They open up possibilities in quantum information processing.
      
      The state of a qubit contains all of its information. This state is frequently expressed as a vector on the Bloch sphere. This state can be changed by applying linear transformations or quantum gates to them. These unitary transformations are described as rotations on the Bloch Sphere. While classical gates correspond to the familiar operations of Boolean logic, quantum gates are physical unitary operators.
      
      In some cases quantum algorithms can be used to perform computations faster than in any known classical algorithm. The most famous example of this is Shor's algorithm that can factor numbers in polynomial time, compared to the best classical algorithms that take sub-exponential time. As factorization is an important part of the safety of RSA encryption, Shor's algorithm sparked the new field of post-quantum cryptography that tries to find encryption schemes that remain safe even when quantum computers are in play.Other examples of algorithms that demonstrate quantum supremacy include Grover's search algorithm, where the quantum algorithm gives a quadratic speed-up over the best possible classical algorithm. The complexity class of problems efficiently solvable by a quantum computer is known as BQP.
      
      In the field of quantum information theory, the quantum systems studied are abstracted away from any real world counterpart. A qubit might for instance physically be a photon in a linear optical quantum computer, an ion in a trapped ion quantum computer, or it might be a large collection of atoms as in a superconducting quantum computer. Regardless of the physical implementation, the limits and features of qubits implied by quantum information theory hold as all these systems are all mathematically described by the same apparatus of density matrices over the complex numbers.

- [A Brief History of Quantum Mechanics](https://www.youtube.com/watch?v=5hVmeOCJjOU)
- [Quantum Computation](https://www.youtube.com/playlist?list=PL74Rel4IAsETUwZS_Se_P-fSEyEVQwni7) | [Daniel Lidar](https://www.youtube.com/watch?v=OGJ-Ahtvm48)
- [A Beginner’s Guide to Quantum Computing](https://www.youtube.com/watch?v=S52rxZG-zi0&list=PLlH_yhB9BkZ6kgNpbdKE2V9-Cc_Gw1vXY)
- [Hilbert space](https://en.wikipedia.org/wiki/Hilbert_space) | [Hilbert Spaces](https://www.youtube.com/watch?v=7zx3MT9FgT0) | [Sean Carroll: Hilbert Space and Infinity](https://www.youtube.com/watch?v=9GV4QmQWJGU)
- [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere) | [BLOCH SPHERE](https://www.youtube.com/watch?v=vUVkS1XZVCc) | [1 SPIN AS A QUBIT](https://www.youtube.com/watch?v=3tOwiFOqAq0) | [What is Spin? ](https://www.youtube.com/watch?v=cd2Ua9dKEl8)
- [Building the Bits and Qubits](https://www.youtube.com/watch?v=F8U1d2Hqark)
- [Schrödinger's Cat](https://www.youtube.com/watch?v=UjaAxUO6-Uw) | [Introduction to Superposition](https://www.youtube.com/watch?v=lZ3bPUKo5zc)
- [How to Teleport Schrödinger's Cat](https://www.youtube.com/watch?v=DxQK1WDYI_k)
- [Quantum Entanglement](https://www.youtube.com/watch?v=5_0o2fJhtSc) | [Susskind Lectures Quantum Entanglement](https://www.youtube.com/playlist?list=PLF1A950040024A1ED)
- [Quantum Tunneling](https://www.youtube.com/watch?v=RF7dDt3tVmI) | [Quantum Tunneling](https://www.youtube.com/watch?v=WPZLRtyvEqo)
- [Double Slit - Interference](https://www.youtube.com/watch?v=A9tKncAdlHQ)
- [Quantum Fields: The Real Building Blocks of the Universe](https://www.youtube.com/watch?v=zNVQfWC_evg)

-----------

#### Quantum Gates and Circuits

[Back to top](#contents)

--------------
![ibm-q-gate](https://xerocrypt.github.io/articles/images/ibm-q-gates.png)
-----------
![Quantum Circuits](https://miro.medium.com/max/860/1*T5LXn431CWFZdO4kpUOzug.png)
-------------
![teleportation-labeled](https://qiskit.org/textbook/ch-algorithms/images/teleportation-labeled.png)
------------

- [Pauli matrices](https://en.wikipedia.org/wiki/Pauli_matrices) | [Pauli matrices.](https://www.youtube.com/watch?v=qA3mnT8NagE) | [PAULI SPIN MATRICES](https://www.youtube.com/watch?v=eFF0AsL5_uM) | [Pauli Matrices](https://www.youtube.com/watch?v=qDaoV5S9oTE)
- [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate) | [how Quantum Computers work](https://www.youtube.com/watch?v=ZoT82NDpcvQ) | [Quantum Computing for Computer Scientists](https://www.youtube.com/watch?v=F_Riqjdh2oM) :star: | [Quantum Gates](https://www.youtube.com/playlist?list=PLiBc8QzsS0Pn_Fby5X06F4dLvesmtPIxo)
- [Introduction to Quantum Computing](https://www.youtube.com/playlist?list=PLIxlJjN2V90w3KBWpELOE7jNQMICxoRwc)
- [Understanding of Quantum Circuits](https://www.youtube.com/watch?v=d3nH6Ne5pSg&list=PL8T0x-NC57bippwYOmJohg0KWLLxRqfzy&index=12) | [Quantum Circuits](https://www.youtube.com/playlist?list=PL1Se2xIuNxEpfWEmjoYicvaT787RfEZAn)
- [Quantum-Circuit Design for Efficiently Simulating Many-Body Quantum Dynamics](https://www.youtube.com/watch?v=j7ZdF8rjFUY)
- [Demystifying Quantum Gates](https://towardsdatascience.com/demystifying-quantum-gates-one-qubit-at-a-time-54404ed80640)

-----------
#### [Qubits Generation Methods](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/Qubits.md)

[Back to top](#contents)
 
[A Qubit in the Making](https://www.youtube.com/watch?v=2pB87H3_F_c) | [How To Make a Quantum Bit](https://www.youtube.com/watch?v=zNzzGgr2mhk) | [Universal quantum computation](https://www.youtube.com/watch?v=F2okky5vD8k) | [NISQ and Quantum Error Correction](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/q-error.md)

----------------
- [Adiabatic Model - Annealer](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/a-qc.md)
- Gate Model
  - [Superconducting Qubits](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/s-qc.md)
  - [Trapped Ions](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/ti-qc.md)
  - [Silicon Quntum Dots](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/qd.qc.md)
  - [Topological](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/topology-qc.md)
  - [Daimond Vacancies](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/dv.md)
  - [Photonic](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/p-qc.md)
  - [Nuclear Magnetic Resonance(NMR)](https://www.youtube.com/watch?v=ppXcQIi5I20)

------------
#### [Quantum Algorithms](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/q-algo.md)

[Back to top](#contents)

- [Quantum Algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm), wiki.
- [Quantum Algorithm Implementations for Beginners](https://arxiv.org/pdf/1804.03719.pdf), 2020. :star:
---------------
- []()
--------------
![1949121.fig.007](https://static-01.hindawi.com/articles/ijrc/volume-2019/1949121/figures/1949121.fig.007.svgz)
---------------
![Quantum Algorithm Implementations for Beginners](https://pbs.twimg.com/media/Dai9G7YVMAAXEGF.jpg)
--------
![Scott_AAronson_Quantum_And_Classical_Uncertainty](http://s3.amazonaws.com/sf-web-assets-prod/wp-content/uploads/2018/05/29144646/Scott_AAronson_Quantum_And_Classical_Uncertainty.svg)
[Source](https://www.simonsfoundation.org/report2017/stories/scott-aaronson-quantum-and-classical-uncertainty/)

--------
![QuantumComplexityMap_560rev](https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/06/QuantumComplexityMap_560rev.jpg)

------------
---------------
#### [Building Blocks - Architecture Of Quantum Computer](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/qm.md)

[Back to top](#contents)

----------
- [D-Wave Lab Tour Part 1 (of 3) - The Infrastructure of the D-Wave Quantum Computer](https://www.youtube.com/watch?v=zDotDiK2UuY)
- [D-Wave Lab Tour Part 2 (of 3) - Inside the D-Wave Fridge](https://www.youtube.com/watch?v=VfxNdBTH8wY)
- [D-Wave Lab Tour Part 3 (of 3) - The D-Wave Processor](https://www.youtube.com/watch?v=AGByZoYUlU0)
- [A Machine of a Different Kind, Quantum Computing, 2019](https://www.youtube.com/watch?v=kG0xZqHDk0k)
- [The Sounds of IBM: IBM Q](https://www.youtube.com/watch?v=o-FyH2A7Ed0)
- [The Future of Quantum Computing with IBM's Dario Gil](https://www.youtube.com/watch?v=zOGNoDO7mcU)
- [A Tour of an IBM Q Lab, 2016](https://www.youtube.com/watch?v=KZf4BSmgdO4)
- [IBM Brings Quantum Computing to the Cloud, 2016](https://www.youtube.com/watch?v=DZ2DcILZAbM)
- [Bob Sutor explains the IBM Q quantum computer](https://www.youtube.com/watch?v=b-0ZNlqaSBE)
- [Experimental quantum computing at IBM](https://www.youtube.com/watch?v=T-8uuq7Izl8)
- [IBM Unveils Groundbreaking Quantum Computing System I Fortune](https://www.youtube.com/watch?v=QRaEvXF4YBg)
- [Quantum computing explained with a deck of cards | Dario Gil, IBM Research](https://www.youtube.com/watch?v=yy6TV9Dntlw)
- [Rigetti quantum systems: Advantage 2020](https://www.youtube.com/playlist?list=PLtwT4pUtHHkpVrX_kO_lyr4uyDfqpV8Db)
- [David Schuster's Quantum Computing Lab Tour](https://www.youtube.com/watch?v=1tbC3p1YYvU)
- [Inside a quantum computer lab](https://www.youtube.com/watch?v=BDqcJiJbD4Y)
- [What is IBM's quantum computer? - All Hands on Tech at CES 2018](https://www.youtube.com/watch?v=pKLEiDIF0NM)
- [Building a Quantum Community with IBM Q](https://www.youtube.com/watch?v=CuC-9e8hfi0)
- [‘Hot’ Qubits Crack a Major Quantum Computing Challenge](https://www.youtube.com/watch?v=v-_GQBszZYg)
- [UNBOXING A QUANTUM COMPUTER!](https://www.youtube.com/watch?v=60OkanvToFI)

------
![QLA_figure1](https://www.ibm.com/blogs/research/wp-content/uploads/2020/01/QLA_figure1.jpg)
---------
![8wYN6tesXyhT7aa_-qYeVw](https://miro.medium.com/max/2940/1*8wYN6tesXyhT7aa_-qYeVw.jpeg)
-----------
![IBM_quantum_computing_flowchart](https://electronics360.globalspec.com/images/assets/553/13553/IBM_quantum_computing_flowchart.jpg)
---------
![27FdKqgS9FIIJKLVpwcmrw](https://miro.medium.com/max/1400/1*27FdKqgS9FIIJKLVpwcmrw.png)
--------
![2020-01-08-at-11-18-29](https://tr3.cbsistatic.com/hub/i/r/2020/01/08/cc87d250-8b86-4f81-a770-7d2d494099ce/resize/1200x900/f4458fedc2676d489b6a4723feb73109/screen-shot-2020-01-08-at-11-18-29-am.png)
-----
![2808333545](https://storage.ning.com/topology/rest/1.0/file/get/2808333545?profile=RESIZE_1024x1024)
--------
![google-quantum-computing-chip](https://data1.ibtimes.co.in/en/full/652448/google-quantum-computing-chip.jpg?h=450&l=50&t=40)
--------
![chandelier](https://wp.technologyreview.com/wp-content/uploads/2020/02/chandelier-13.jpg)

--------------
#### Quantum Langauges and Software Infrastructure

[Back to top](#contents)




----------
#### Quantum Computers in the Cloud

[Back to top](#contents)

 - [D-Wave](https://www.dwavesys.com/take-leap) | [Annealer]() 
 - [Rigetti](https://qcs.rigetti.com/) | [Gate | Superconducting]() 
 - [IBM Qe](https://www.ibm.com/quantum-computing/) | [Gate | Superconducting]() 
 - [Azure Quantum](https://azure.microsoft.com/en-us/services/quantum/) | [Gate | Topology](), [Trapped Ion](), [Annelear]() 
 - [Amazon Quantum Braket](https://aws.amazon.com/braket/) | [Gate | Topology](), [Trapped Ion](), [Annelear]() 
 - [Alibaba Quantum](https://damo.alibaba.com/labs/quantum)
 - [Q-CTRL](https://q-ctrl.com/)
 - [1QBIT](https://1qbit.com/)

----------

#### Industrial Quantum Applications

[Back to top](#contents)

- [Business Use-Cases](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/usecases.md)

---------------------
#### Quantum Internet

[Back to top](#contents)

---------------
#### Build a Quantum Application

[Back to top](#contents)

---------------
----------------------
