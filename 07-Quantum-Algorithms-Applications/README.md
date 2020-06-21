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
 - [Quantum Cryptography](#quantum-cryptography)
 - [Quantum Internet](#quantum-internet)
 - [Build a Quantum Application](#build-a-quantum-application)


-------------
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
-------
![visualizing-the-state-of-a-single-qubit-and](https://www.researchgate.net/publication/335028508/figure/fig1/AS:789466423762944@1565234871365/The-Bloch-sphere-provides-a-useful-means-of-visualizing-the-state-of-a-single-qubit-and.ppm)
-------
![bit-vs-qubit-hr](https://www.bnl.gov/today/body_pics/2019/02/bit-vs-qubit-hr.jpg)

--------
![02quantencomputer-zukunft-daimler-google-ibm-technologie](https://www.daimler.com/images/magazine/technology-innovation/2018-11-07-quantencomputer-zukunft-daimler-google-ibm-technologie/02quantencomputer-zukunft-daimler-google-ibm-technologie.jpg)
------
![desktop](https://www2.deloitte.com/content/dam/Deloitte/nl/Images/inline_images/deloitte-nl-innovation-quantum-computing.jpg/_jcr_content/renditions/cq5dam.web.700.350.desktop.jpeg)
--------
![maxresdefault](https://i.ytimg.com/vi/2pB87H3_F_c/maxresdefault.jpg)

----
-----------

#### Quantum Gates and Circuits

[Back to top](#contents)

--------------
##### Quantum Gates

![ibm-q-gate](https://xerocrypt.github.io/articles/images/ibm-q-gates.png)
-----------
![Quantum Circuits](https://miro.medium.com/max/860/1*T5LXn431CWFZdO4kpUOzug.png)
-------------
![teleportation-labeled](https://qiskit.org/textbook/ch-algorithms/images/teleportation-labeled.png)

---------
![Quantum_circuit_compilation](https://www.ibm.com/blogs/research/wp-content/uploads/2018/08/Quantum_circuit_compilation.png)
------------

- [Pauli matrices](https://en.wikipedia.org/wiki/Pauli_matrices) | [Pauli matrices.](https://www.youtube.com/watch?v=qA3mnT8NagE) | [PAULI SPIN MATRICES](https://www.youtube.com/watch?v=eFF0AsL5_uM) | [Pauli Matrices](https://www.youtube.com/watch?v=qDaoV5S9oTE)
- [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate) | [how Quantum Computers work](https://www.youtube.com/watch?v=ZoT82NDpcvQ) | [Quantum Computing for Computer Scientists](https://www.youtube.com/watch?v=F_Riqjdh2oM) :star: | [Quantum Gates](https://www.youtube.com/playlist?list=PLiBc8QzsS0Pn_Fby5X06F4dLvesmtPIxo)
- [Introduction to Quantum Computing](https://www.youtube.com/playlist?list=PLIxlJjN2V90w3KBWpELOE7jNQMICxoRwc)
- [Understanding of Quantum Circuits](https://www.youtube.com/watch?v=d3nH6Ne5pSg&list=PL8T0x-NC57bippwYOmJohg0KWLLxRqfzy&index=12) | [Quantum Circuits](https://www.youtube.com/playlist?list=PL1Se2xIuNxEpfWEmjoYicvaT787RfEZAn)
- [Quantum-Circuit Design for Efficiently Simulating Many-Body Quantum Dynamics](https://www.youtube.com/watch?v=j7ZdF8rjFUY)
- [Demystifying Quantum Gates](https://towardsdatascience.com/demystifying-quantum-gates-one-qubit-at-a-time-54404ed80640)

-------------
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
  - [Topological](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/topology-qc.md) :star:
  - [Daimond Vacancies](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/dv.md)
  - [Photonic](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/p-qc.md)
  - [Nuclear Magnetic Resonance(NMR)](https://www.youtube.com/watch?v=ppXcQIi5I20)
  
-----------------
- [Quantum Computing in the NISQ era and beyond](https://arxiv.org/pdf/1801.00862.pdf)

![drBi5hHMiQ1j2fGk](https://miro.medium.com/max/1706/0*drBi5hHMiQ1j2fGk)
-------
![Google-Quantum-Error-Correction-2018](https://2pggys3b7fd63bfvol1w51zt-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Google-Quantum-Error-Correction-2018.jpg)

------------
--------------
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
- [design of a silicon quantum computer chip](https://www.youtube.com/watch?v=efJBkSj9koo)
- [Demonstrating Quantum Supremacy](https://www.youtube.com/watch?v=-ZNEzzDcllU)
- [D-Wave Systems 128 qubit processor - "Inside the chip"](https://www.youtube.com/watch?v=PqSgmCg1kew)

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
![1482140924](https://image.slidesharecdn.com/96c3cf07-2f19-440f-b604-8fe56316c25e-161219094834/95/toward-a-dependable-quantum-computing-architecture-8-638.jpg?cb=1482140924)
--------
![quma_v2](https://storage.googleapis.com/groundai-web-prod/media/users/user_14/project_347593/images/quma_v2.png)
------
![microarchitecture](https://storage.googleapis.com/groundai-web-prod/media/users/user_14/project_347593/images/microarchitecture.png)
--------
![1573775625](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-019-1666-5/MediaObjects/41586_2019_1666_Fig1_HTML.png)
---------
![google-quantum-computing-chip](https://data1.ibtimes.co.in/en/full/652448/google-quantum-computing-chip.jpg?h=450&l=50&t=40)
--------
![tfla79h2keJr34_V4Na7gQ](https://miro.medium.com/max/749/1*tfla79h2keJr34_V4Na7gQ.jpeg)
--------
![chandelier](https://wp.technologyreview.com/wp-content/uploads/2020/02/chandelier-13.jpg)

--------------
--------------
#### Quantum Langauges and Software Infrastructure

[Back to top](#contents)

-----
- [SW/HW co-design for near-term quantum computing](https://www.slideshare.net/insideHPC/swhw-codesign-for-nearterm-quantum-computing)

![Overview-of-quantum-computer-system-stack](https://www.researchgate.net/publication/332553779/figure/fig1/AS:750332074266624@1555904515421/Overview-of-quantum-computer-system-stack.ppm)
-------
![1579552018](https://image.slidesharecdn.com/atpesc2019track-177-29215pmshi-near-term-quantum-computing-sw-co-design-200120202435/95/swhw-codesign-for-nearterm-quantum-computing-14-1024.jpg?cb=1579552018)
--------
![jAvz6HU6VLNAdEhy](https://miro.medium.com/max/1400/0*jAvz6HU6VLNAdEhy)
--------
![HzbyyuY05f1PfHt01jIAwg](https://miro.medium.com/max/1400/1*HzbyyuY05f1PfHt01jIAwg.jpeg)
-------
![acc-ir](https://zppxacc.readthedocs.io/en/latest/_images/acc-ir.png)
------
![xacc](https://www.eclipse.org/community/eclipse_newsletter/2017/august/images/xacc.png)
----
![algorithm-written-in-high-level-language-can-be](https://www.researchgate.net/publication/325358150/figure/fig1/AS:630013770620928@1527218396294/Compilation-of-Quantum-Algorithms-an-algorithm-written-in-high-level-language-can-be.png)
------
--------------

**Quantum Instruction Set** - Quantum Assembly Language

![Instruction](https://www.swissquantumhub.com/wp-content/uploads/2020/03/Quantum-Instruction-Set.png)

- [Gate Level Q-Softwares, 2019](https://arxiv.org/pdf/1807.02500.pdf)
- [A Practical Quantum Instruction Set Architecture, 2017](https://arxiv.org/pdf/1608.03355.pdf)
- [Open Quantum Assembly Language](https://arxiv.org/pdf/1707.03429.pdf)
- [An Evaluation Framework and Instruction Set Architecture forIon-Trap based Quantum Micro-architectures.](https://homes.cs.washington.edu/~oskin/04A-01.PDF)
- [A Survey of Quantum Control Architecture](https://www.cs.umd.edu/class/fall2019/cmsc657/projects/group_4.pdf)
- [eQASM: An Executable Quantum Instruction Set Architecture](https://arxiv.org/pdf/1808.02449.pdf)
- [Quantum Computer Architecture:Towards Full-Stack Quantum Accelerators](https://arxiv.org/pdf/1903.09575.pdf)
- [Classical and Quantum Data Interaction in Programming Languages:A Runtime Architecture](https://arxiv.org/pdf/2006.00131.pdf)
- [A Survey of Quantum Programming Languages: History, Methods, and Tools, 2008](https://arxiv.org/ftp/arxiv/papers/0804/0804.1118.pdf)
- [QRunes: High-Level Language for Quantum-Classical Hybrid Programming](https://arxiv.org/pdf/1901.08340.pdf)
- [Toward a Universal Quantum Programming LanguageImage by White Mocca](https://dl.acm.org/doi/pdf/10.1145/3355759)
- [Optimized Quantum Compilationfor Near-Term Algorithms with OpenPulse](https://arxiv.org/pdf/2004.11205.pdf)
- [Q#: Enabling scalable quantum computing and developmentwith a high-level domain-specific language, 2018](https://arxiv.org/pdf/1803.00652.pdf)
- [Hybrid Programming for Near-term QuantumComputing Systems](https://arxiv.org/pdf/1805.09279.pdf)
- [Strawberry Fields:A Software Platform for Photonic Quantum Computing](https://arxiv.org/pdf/1804.03159.pdf)
- [Introduction to Coding Quantum Algorithms:A Tutorial Series Using Qiskit](https://arxiv.org/pdf/1903.04359.pdf)
- [XACC: A System-Level Software Infrastructure for Heterogeneous Quantum-ClassicalComputing](https://arxiv.org/pdf/1911.02452.pdf)

----------
----------------
#### Quantum Computers in the Cloud

[Back to top](#contents)

-----------
![Quantum-Cloud-Hardware-Partnerships-December-2-2019](https://80b.bf1.myftpupload.com/wp-content/uploads/2019/12/Quantum-Cloud-Hardware-Partnerships-December-2-2019.jpg)

-----------

 - [D-Wave](https://www.dwavesys.com/take-leap) 
 - [Rigetti](https://qcs.rigetti.com/) 
 - [IBM Qe](https://www.ibm.com/quantum-computing/) 
 - [Azure Quantum](https://azure.microsoft.com/en-us/services/quantum/) 
 - [Amazon Quantum Braket](https://aws.amazon.com/braket/) 
 - [Alibaba Quantum](https://damo.alibaba.com/labs/quantum)
 - [Q-CTRL](https://q-ctrl.com/)
 - [1QBIT](https://1qbit.com/)

----------
----------------

#### Industrial Quantum Applications

[Back to top](#contents)

- [Quantum Applications](https://github.com/gopala-kr/Quantum-Dots/blob/master/02-Quantum_Computing_Review/q-a.md)
- [Business Use-Cases](https://github.com/gopala-kr/Quantum-Dots/blob/master/07-Quantum-Algorithms-Applications/usecases.md)
- [Quantum Computing Applications in 2020: In-Depth Guide](https://research.aimultiple.com/quantum-computing-applications/)
-------
![IBM-App-Presentation-4-August-20-2019](https://research.aimultiple.com/wp-content/uploads/2019/11/IBM-App-Presentation-4-August-20-2019-5-800x452.png)
-------
![Distribution-of-quantum-computing-use-case](https://www.consultancy.uk/illustrations/news/detail/2020-04-13-145326519-Distribution-of-quantum-computing-use-case.jpg)

--------
-------------------
#### Quantum Cryptography

[Back to top](#contents)

--------

![xM2qu6NnON1](https://lh3.googleusercontent.com/proxy/aSp3aCNoB3cKaVBGXki1yi41shTFQoEcTe7Mi3Vqc71f8ElwgwsE7Ea_2tcuajRgcHoV1se4PEC_Gt4cqrDR0Ep0VeEyg9HAp9bTciqQa_hPchaupy4jr7PoUFaBt3jRklRHTHBuIpvRxli2_VB4ols)

----------
![MTG_PQC_01_720](https://www.mtg.de/export/sites/default/.galleries/images/3-Technologien/de/2-Post-Quantum-Cryptography/MTG_PQC_01_720.png)
--------
![1539558646](https://image.slidesharecdn.com/pqcbrieframeshnagappan-181014230801/95/post-quantum-cryptography-technical-overview-13-638.jpg?cb=1539558646)
------
![g001](https://www.mdpi.com/applsci/applsci-07-00212/article_deploy/html/images/applsci-07-00212-g001-550.jpg)
--------
![quantum-key-distribution-l](https://api.intechopen.com/media/chapter/63116/media/F3.png)
------
![qkd2](https://tr1.cbsistatic.com/hub/i/2015/05/07/647b9187-f49c-11e4-940f-14feb5cc3d2a/qkd2.jpg)
-------
![F1](https://api.intechopen.com/media/chapter/63116/media/F1.png)
------
![1539558646](https://image.slidesharecdn.com/pqcbrieframeshnagappan-181014230801/95/post-quantum-cryptography-technical-overview-9-638.jpg?cb=1539558646)
---------
![standardization](https://www.accenture.com/t20190109T165232Z__w__/us-en/_acnmedia/Accenture/Conversion-Assets/DotCom/Images/Global-3/85/Accenture-Timeline-for-standardization-v2.png)
---------
- [Quantum Key Distribution and the Future of Encryption](https://www.youtube.com/watch?v=RrdTAURD1rI)
- [Quantum Key Distribution Animation](https://www.youtube.com/watch?v=cWpqlgF7uEA)
- [Quantum Cryptography Explained](https://www.youtube.com/watch?v=UiJiXNEm-Go)
- [Quantum Key Distribution | QuTech Academy](https://www.youtube.com/watch?v=lVXJgn3fDkg)
- [Quantum cryptography, animated](https://www.youtube.com/watch?v=LaLzshIosDk)
- [Quantum cryptography: basics and technology with Vadim Makarov](https://www.youtube.com/watch?v=wF-BWgnpYmI)
- [Overview of the NIST Post Quantum Algorithms](https://www.youtube.com/watch?v=iPijIw-ZDpY)
- [What is Post Quantum Cryptography?](https://www.youtube.com/watch?v=zw1KHLOOlA8)
- [Johannes A. Buchmann - Post-Quantum Cryptography – an overview](https://www.youtube.com/watch?v=6O27MykWK80)
- [Quantum Algorithms and Post-Quantum Cryptography](https://www.youtube.com/watch?v=VtPHoH5RsHg)

-----------------
---------------------
#### Quantum Internet

[Back to top](#contents)

-------
![1531752383](https://image.slidesharecdn.com/quantuminternetbyproflilisaghafi-180517200602/95/quantum-internet-by-professor-lili-saghafi-2-1024.jpg?cb=1531752383)
-------
![quantum-internet-by-professor](https://image.slidesharecdn.com/quantuminternetbyproflilisaghafi-180517200602/95/quantum-internet-by-professor-lili-saghafi-3-1024.jpg?cb=1531752383)
-----
![quantum](https://image.slidesharecdn.com/quantuminternetbyproflilisaghafi-180517200602/95/quantum-internet-by-professor-lili-saghafi-49-638.jpg?cb=1531752383)
------
![quantum-internet-by-professor-lili-saghafi](https://image.slidesharecdn.com/quantuminternetbyproflilisaghafi-180517200602/95/quantum-internet-by-professor-lili-saghafi-56-1024.jpg?cb=1531752383)
-------
![quantum-internet-by-professor-lili-sag](https://image.slidesharecdn.com/quantuminternetbyproflilisaghafi-180517200602/95/quantum-internet-by-professor-lili-saghafi-38-1024.jpg?cb=1531752383)
-----
![slide4](https://image.slideserve.com/79464/slide4-l.jpg)
-------
![large](https://science.sciencemag.org/content/sci/362/6412/eaam9288/F6.large.jpg)
--------
![carousel](https://science.sciencemag.org/content/sci/362/6412/eaam9288/F1.large.jpg?width=800&height=600&carousel=1)
------

![41598_2016_Article_BFsrep20463_Fig1_HTML](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fsrep20463/MediaObjects/41598_2016_Article_BFsrep20463_Fig1_HTML.jpg)
------
![satellite](https://1.bp.blogspot.com/-4f-NVl-Wmpk/V7LKDm_NStI/AAAAAAAApME/mO6nX7ilIjAUMg92JT32w1-yqdS7apQxQCLcB/s728-e100/china-quantum-communication-satellite.png)
------
![gUgcqBibIqpX6t9l4BqFrn8lIH0FFMgbTRnFCj_JP6_mlKlpm4v62TXWMW0E5f4j7HqOu2rhOUU2](https://lh3.googleusercontent.com/proxy/umK9bfkNQmLSEPQX1Wg3nHhla8iHOEm4uwysYGPcRAYfR4OoEQ8R7yoKpLaK-gUgcqBibIqpX6t9l4BqFrn8lIH0FFMgbTRnFCj_JP6_mlKlpm4v62TXWMW0E5f4j7HqOu2rhOUU2-UxNn7Bau9Iad1opGFqAQRk)
-----
![network_resize_md](https://inteng-storage.s3.amazonaws.com/images/JANUARY/sizes/china-quantum-network_resize_md.jpg)
--------


- [Quantum Internet – QuTech Academy](https://www.youtube.com/watch?v=y0Bcy7BRTGU)
- [The Quantum Internet | Stephanie Wehner | TEDxVienna](https://www.youtube.com/watch?v=XzPi29O6DAc)
- [The Quantum Internet](https://www.youtube.com/watch?v=_N-2Sx-FDQA)
- [The Future Quantum Internet: Challenges](https://www.youtube.com/watch?v=h54WsU13wbc)
- [Applications of a Quantum Internet | QuTech Academy](https://www.youtube.com/watch?v=LLBhAWGOtsQ)
- [Tasks for a Quantum Internet | QuTech Academy](https://www.youtube.com/watch?v=p_NC4RB-9lg)
- [Quantum Teleportation From Space Achieved by China!](https://www.youtube.com/watch?v=dWc6Goy6cRk)
- [Quantum Internet Proposed Research Group](https://www.youtube.com/watch?v=9nfaYAU92tY)
- [The Quantum Internet and Quantum Computers: How Will They Change the World?](https://www.youtube.com/playlist?list=PL5jmbd6SJYnMhS9hXoPknmXNbRLPt34Oi)

--------
- [Quantum Internet By Professor Lili Saghafi](https://www.slideshare.net/lsaghafi/quantum-internet-by-professor-lili-saghafi)
- [Quantum internet: A vision for the road ahead](https://science.sciencemag.org/content/362/6412/eaam9288)
- [secure-quantum-communication-over-7600-kilometers](https://www.oeaw.ac.at/en/detail/news/secure-quantum-communication-over-7600-kilometers-2/)
- [Optimal architectures for long distance quantum communication](https://www.nature.com/articles/srep20463)
- [Quantum Internet:from Communication to Distributed Computing!](https://arxiv.org/pdf/1805.04360.pdf)

---------------
----------------------
#### Build a Quantum Application

[Back to top](#contents)

------
![enabled-quantum-computer-and-user-access-levels-At-the](https://www.researchgate.net/publication/338057433/figure/fig1/AS:849124681318400@1579458508433/Schematic-overview-of-a-cloud-enabled-quantum-computer-and-user-access-levels-At-the.png)

---------

For application developers/researchers, there are 2 ways to access quantum computer hardwares, either you can use quantum simulators on your own laptop(supports upto 40 qubits, eg: Microsofts [QDK](https://www.microsoft.com/en-us/quantum/development-kit) ) or access QC's from public cloud. IBM provides free access to thier [Q experience cloud(Gate Model)](https://quantum-computing.ibm.com/) and D-Wave provides free access to thier [Leap cloud](https://www.dwavesys.com/take-leap)(Annealer). Since other HW providers are private, you could access them via partner access(Organizations/Teams).

Lets explore publicly accessible Estimators, Simulators, Annealers and Gate Model QC's , their programming model and lets run few popular QC algorithms.

----------

1. Estimators and Simulator: Azure - Quantum Development Kit

 Microsoft provides SDK for qunatum application programming, which is integrated with VS code IDE. Q# is the langauge used to program QA in QDK.
 
--------
![imageFileData](https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wxJW?ver=0146&q=90&m=6&h=431&w=767&b=%23FFFFFFFF&l=f&o=t&aim=true)
------
![quantum](https://docs.microsoft.com/en-us/learn/quantum/qsharp-create-first-quantum-development-kit/media/6-quantum-execution-info.png)
--------
![changing-the-odds-an-intro-to-qsharp_01](https://freecontent.manning.com/wp-content/uploads/changing-the-odds-an-intro-to-qsharp_01.jpg)

---------
![valueprop3](https://azurecomcdn.azureedge.net/cvt-fdde87d637c93aaa8d44f0dccd6bc94b93ea7d42a2bc4f5a987d991913ae6ad1/images/page/services/quantum/valueprop3.png)

-------------
----------

2. Adiabatic Model - Annealer: D-Waves Leap2 Cloud 



------------
----------------

2. Gate Model : IBM Q Experience Cloud


---------------
----------------------
