
-------------------
#### [Site Reliability Engineering (SRE) - Best Practices](https://sre.google/sre-book/table-of-contents/)

-----------------

       WIKI: A site reliability engineer (SRE) will spend up to 50% of their time doing "ops" related work such as handling issues, 
       spending time on-call, and manual intervention. Since the software system that an SRE oversees is expected to be highly automatic 
       and self-healing, the SRE should spend the other 50% of their time on development tasks such as adding new features, such as 
       for scaling or automation. A site reliability engineer is usually either a software engineer with a good administration background 
       or a skilled system administrator with knowledge of coding and automation.

       DevOps vs SRE

       Coined around 2008, DevOps is a philosophy of cross-team empathy and business alignment. It's also been associated with a practice 
       that encompasses automation of manual tasks, continuous integration and continuous delivery. SRE and DevOps share the same foundational 
       principles. SRE is viewed by many (as cited in the Google SRE book) as a "specific implementation of DevOps with some idiosyncratic 
       extensions". SREs, being developers themselves, will naturally bring solutions that help remove the barriers between development teams 
       and operations teams.

       DevOps defines five key pillars of success:
       - Reduce organizational silos
       - Accept failure as normal
       - Implement gradual changes
       - Leverage tooling and automation
       - Measure everything

       SRE satisfies the DevOps pillars as follows:
       - Reduce organizational silos
         - SRE shares ownership with developers to create shared responsibility
         - SREs use the same tools that developers use, and vice versa
       - Accept failure as normal
         - SREs embrace risk
         - SRE quantifies failure and availability in a prescriptive manner using Service Level Indicators (SLIs) and Service Level Objectives (SLOs)
         - SRE mandates blameless post mortems
       - Implement gradual changes
         - SRE encourages developers and product owners to move quickly by reducing the cost of failure
       - Leverage tooling and automation
         - SREs have a charter to automate manual tasks (called "toil") away
       - Measure everything
         - SRE defines prescriptive ways to measure values.
         - SRE fundamentally believes that systems operation is a software problem

---------------------


Site Reliability Engineers are often considered the link between software development and operations.

- Site Reliability: Engineering
  - Nine principles of Site Reliability Engineering
  - Tenets of SRE
  - DevOps vs SRE
  - Service Level Indicators
  - Service Level Objectives
  - Service Level Agreements
  - Managing Service Risk
  - Measuring Service Risk
  - Risk Tolerence
  - Error Budgets
- Site Reliability: Tools & Automation
- OS Deployment Strategies
  - Upgrading & Maintaining Systems
  - Deploying Modern Systems
  - Maintaining & Managing Modern Systems
- Backup & Recovery
  - Business Continuity & Disaster Recovery
  - Enterprise Backup Strategies
  - Windows/Linux Client Backup and Recovery Tools
- Monitoring Distributed Systems
- Site Reliability Engineering: Scenario Planning
- Build & release enginereing best practices
- Automation and simplicity best practices for SRE
- SRE postmortem culture best practices
- Cloud and contaitner architectures for the SRE
- Troubleshooting
- Emergency response and incident handling
- Testing for reliability, load balancing
- Overload and cascading failures
- Distributed reliability
- Data pipelines and integrity
- Deploying products at scale
- Scaling the SRE team
- Interupts and overloads
- Communication and collaboration
- Managing software reliability metrics
- The SRE engagement model

-------------------------

        - SRE
        - xOps
        - DevNetOps
        - DevOps
        - DevSecOps
        - DataOps
        - MLOps/ModelOps
        - ChatOps
        - AIOps..  
        - All Other Ops

-------------------
- [The Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)
- [Site Reliability Engineering](https://sre.google/sre-book/table-of-contents/)
- [https://devopsinstitute.com/](https://devopsinstitute.com/certifications/)
- [Site Reliability Engineering: Measuring and Managing Reliability](https://www.coursera.org/learn/site-reliability-engineering-slos#syllabus)
- [DevOps and Site Reliability Engineering](https://www.edx.org/course/introduction-to-devops-and-site-reliability-engineering)
- [Site Reliability Engineering (SRE) Foundation](https://cloudacademy.com/learning-paths/site-reliability-engineering-sre-foundation-1759/)
- [DevOps Foundations: Site Reliability Engineering](https://www.linkedin.com/learning/devops-foundations-site-reliability-engineering/what-you-should-know)
- [Site Reliability Engineering: Service-Level Agreements and Objectives](https://www.linkedin.com/learning/site-reliability-engineering-service-level-agreements-and-objectives/why-measure-service-performance)
- [dastergon/awesome-sre](https://github.com/dastergon/awesome-sre)
- [kahun/awesome-sysadmin](https://github.com/kahun/awesome-sysadmin)
- [epcim/awesome-sysadmin2](https://github.com/epcim/awesome-sysadmin2)
- [binhnguyennus/awesome-scalability](https://github.com/binhnguyennus/awesome-scalability)
- [http://highscalability.com/](http://highscalability.com/)
- [How Does Google Do Planet-Scale Engineering For A Planet-Scale Infrastructure?](http://highscalability.com/blog/2016/7/18/how-does-google-do-planet-scale-engineering-for-a-planet-sca.html)
- [Site Reliability Engineering in Enterprise-Scale Organizations](https://medium.com/capital-one-tech/site-reliability-engineering-in-enterprise-scale-organizations-3357887d2c8e)
- [Hiring Site Reliability Engineers](https://www.usenix.org/system/files/login/articles/login_june_07_jones.pdf)
- [Building SRE from Scratch](https://medium.com/ibm-garage/building-sre-from-scratch-485e23985bbd)
- [DevOps vs SRE: Enabling Efficiency and Resiliency](https://harness.io/blog/devops/sre-vs-devops/)
- [Develop a Site Reliability Engineering (SRE) strategy](https://docs.microsoft.com/en-us/learn/paths/az-400-develop-sre-strategy/)
- [How SRE teams are organized, and how to get started](https://cloud.google.com/blog/products/devops-sre/how-sre-teams-are-organized-and-how-to-get-started)
- [awesome-cloud](https://medium.com/awesome-cloud)
- [rootsongjc/awesome-cloud-native](https://github.com/rootsongjc/awesome-cloud-native)
- [anaibol/awesome-serverless](https://github.com/anaibol/awesome-serverless)
- [donnemartin/awesome-aws](https://github.com/donnemartin/awesome-aws)
- [GoogleCloudPlatform/awesome-google-cloud](https://github.com/GoogleCloudPlatform/awesome-google-cloud)
- [ddneves/awesome-azure-learning](https://github.com/ddneves/awesome-azure-learning)
- [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer)
- [madd86/awesome-system-design](https://github.com/madd86/awesome-system-design)
- [sindresorhus/awesome](https://github.com/sindresorhus/awesome)
- [lorabv/awesome-agile](https://github.com/lorabv/awesome-agile)
- [AcalephStorage/awesome-devops](https://github.com/AcalephStorage/awesome-devops)
- [kamranahmedse/developer-roadmap](https://github.com/kamranahmedse/developer-roadmap)

--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre227.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre228.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre229.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre230.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre231.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre232.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre233.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre234.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre235.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre236.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre237.png)

------------
------------

![sre44](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre44.png)

-----------
![sre53](https://raw.githubusercontent.com/gopala-kr/Quantum-Dots/master/45-Verticals/xOps/sre53.png)

---------
![sre54](https://raw.githubusercontent.com/gopala-kr/Quantum-Dots/master/45-Verticals/xOps/sre54.png)

---------

![sre55](https://raw.githubusercontent.com/gopala-kr/Quantum-Dots/master/45-Verticals/xOps/sre55.png)

-----------
![sre56](https://raw.githubusercontent.com/gopala-kr/Quantum-Dots/master/45-Verticals/xOps/sre56.png)

---------------
![sre100](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre100.png)

-----------
![sre92](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre92.png)

---------
![sre91](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre91.png)

--------------
![sre72](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre72.png)


---------------
---------------
![sre109](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre109.png)

------
![sre110](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre110.png)

-----------
![sre140](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre140.png)

-----------

![sre141](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre141.png)

-----

![sre142](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre142.png)

---------
![sre115](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre115.png)

---------------
![sre1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre1.png)
--------
![sre2](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre2.png)
--------
![sre3](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre3.png)
-----
![sre4](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre4.png)
--------
![sre6](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre6.png)
-------
![sre7](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre7.png)
-----------
![sre8](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre8.png)

---------
![sre28](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre28.png)

-----------
![sre23](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre23.png)
----------
![sre21](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre21.png)
------
![sre22](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre22.png)

-----------
![sre24](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre24.png)

------
![sre25](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre25.png)
----------
![sre26](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre26.png)
-------
![sre27](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre27.png)

---------
![sre29](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre29.png)
----------
![sre30](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre30.png)
-------
![sre31](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre31.png)
----------
![sre32](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre32.png)


-------
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre111.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre113.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre114.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre116.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre117.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre118.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre119.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre120.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre121.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre122.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre123.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre124.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre125.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre126.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre127.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre128.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre129.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre130.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre131.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre132.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre133.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre134.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre135.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre136.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre137.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre138.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre139.png)

--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre143.png)

--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre144.png)

--------
-----------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre101.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre102.png)

--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre103.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre104.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre105.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre106.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre107.png)
--------
![sre111](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre108.png)

------------
--------------

![ops144](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops144.png)

----------
![ops145](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops145.png)

--------
![ops146](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops146.png)

------------------
------------
![OiFm27eP6bMfSiClKQ](https://miro.medium.com/max/945/1*3Hn-OiFm27eP6bMfSiClKQ.png)
---------
![Site-Reliability-Optimization](https://www.crestdatasys.com/wp-content/uploads/2020/01/Site-Reliability-Optimization.png)

---------
![pasted-image-0-5](https://relevant.software/wp-content/uploads/2020/10/pasted-image-0-5.png)
---------
![EXdGihdyR1f1hrVQ9mboYifUTHNARE9an4nDeofO](https://relevant.software/wp-content/uploads/2020/09/EXdGihdyR1f1hrVQ9mboYifUTHNARE9an4nDeofO.jpeg)

-------
![9LKhtHciCI44nSIA4quoaUcRthRN7uiTDKGUh03F](https://relevant.software/wp-content/uploads/2020/09/9LKhtHciCI44nSIA4quoaUcRthRN7uiTDKGUh03F.jpeg)

---------
![comSRE1](https://www.businessprocessincubator.com/wp-content/uploads/2020/03/www.capgemini.comSRE1-7079bfb0d0a040e29734f0c50002e340d1632a69.png)
------
![2020](https://www.capgemini.com/wp-content/uploads/2020/10/Manoj-blog.png?w=960)

--------
![SRE-SLAs-SLOs-SLIs-pictoral-representation1](https://www.capgemini.com/wp-content/uploads/2020/10/SRE-SLAs-SLOs-SLIs-pictoral-representation1.png?w=960)

--------
![SREFoundationBlueprint](https://3s1scc2ywmvgoa139sc9r819-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/SREFoundationBlueprint.png)
--------
![ObservabilityGraph](https://www.instana.com/media/ObservabilityGraph-01.svg)

-------
![New-Application-Delivery-Organization-Graphic](https://www.instana.com/media/New-Application-Delivery-Organization-Graphic.png)

-----------
![5f7df8c34cb587a81e5e5e1e_key](https://uploads-ssl.webflow.com/5ec0224560bd6abed09a51b1/5f7df8c34cb587a81e5e5e1e_key%20stakeholders.png)
----------
![pDwdJiV19BHJT6bh83aLiA](https://miro.medium.com/max/2774/1*pDwdJiV19BHJT6bh83aLiA.png)
------
![DkZ1PjcX4AEUPh6](https://pbs.twimg.com/media/DkZ1PjcX4AEUPh6.jpg)

----------
![MergingDev-OpsMarket](https://blogs.gartner.com/christopher-little/files/2019/07/MergingDev-OpsMarket.jpg)

--------
![DOTC-vendors](https://blogs.gartner.com/christopher-little/files/2019/01/DOTC-vendors.jpg)

--------
![oss](https://blogs.gartner.com/manjunath-bhat/files/2019/02/oss.png)

---------
![DXGZDZUHmbA](https://miro.medium.com/max/1092/1*wTp-r9QJvF-DXGZDZUHmbA.jpeg)

----------
![DevOps_Tools_Landscape_to_Build_Your_Continuous_Delivery_and_Deployment_Pipeline](https://www.devops-certification.org/devops_images/DevOps_Tools_Landscape_to_Build_Your_Continuous_Delivery_and_Deployment_Pipeline.png)

----------
![C81yfqiV0AAu0](https://pbs.twimg.com/media/C81yfqiV0AAu0-z.jpg)

----------
![devops](https://roadmap.sh/roadmaps/devops.png)

------------
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre201.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre202.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre203.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre204.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre205.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre206.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre207.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre208.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre209.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre210.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre211.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre212.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre213.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre214.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre215.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre216.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre217.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre218.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre219.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre220.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre221.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre222.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre223.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre224.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre225.png)
--------------
![sre201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre226.png)


--------
---------
![ops214](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops214.png)
------
![ops215](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops215.png)
-------
![ops216](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops216.png)
----------
![ops217](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops217.png)
---------
![ops218](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops218.png)
---------
![ops219](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops219.png)
-------
![ops220](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops220.png)


------------
----------

![ops201](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops201.png)
-----
![ops238](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops238.png)


---------
![ops202](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops202.png)
------------
![ops202](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops203.png)
------------
![ops202](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops204.png)
------------
![ops202](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops205.png)
------------
![ops202](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops206.png)
------------
![ops202](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops207.png)
------------
![ops202](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops208.png)
------------
![ops202](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops209.png)
------------
![ops202](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops210.png)

----------
---------

![ops221](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops221.png)

--------
![ops222](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops222.png)

------
![ops223](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops223.png)

-----
![ops224](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops224.png)

-------
![ops225](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops225.png)
-------
![ops225](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops226.png)
-------
![ops225](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops227.png)
-------
![ops225](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops228.png)

-----------
-----------
![ops229](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops229.png)
---------
![ops230](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops230.png)
---------
![ops230](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops231.png)
---------
![ops230](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops232.png)
---------
![ops230](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops233.png)
---------
![ops230](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops234.png)
---------
![ops230](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops235.png)
---------
![ops230](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops236.png)
---------
![ops230](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops237.png)

---------------
----------
![ops239](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops239.png)

----------
![ops240](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops240.png)
--------
![ops241](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops241.png)
------
![ops242](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops242.png)
----------
![ops243](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops243.png)
----------
![ops244](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops244.png)
--------
![ops245](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops245.png)
---------
![ops246](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops246.png)
----------
![ops247](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops247.png)
----------
![ops248](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops248.png)


------------
-----------

![ops261](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops261.png)
--------
![ops262](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops262.png)
-------
![ops263](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops263.png)

---------
![ops264](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops264.png)
--------
![ops265](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops265.png)
-----------
![ops266](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops266.png)
-----------
![ops267](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops267.png)

-------------
![ops268](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops268.png)
------
![ops269](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops269.png)
--------
![ops270](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops270.png)

------------
---------------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops105.png)

-----------
![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops106.png)

-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops107.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops108.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops109.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops110.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops111.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops112.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops113.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops114.png)
-----------
![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops115.png)
-----------
![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops116.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops117.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops118.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops119.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops120.png)
-----------
![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops121.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops122.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops123.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops124.png)
-----------
![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops125.png)
-----------
![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops126.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops127.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops128.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops129.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops130.png)
-----------------
![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops131.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops132.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops133.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops134.png)
-----------
![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops135.png)
-----------
![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops136.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops137.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops138.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops139.png)
-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops140.png)
-----------------
![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops141.png)

-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops142.png)

-----------

![ops105](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops143.png)


-----------
-----------------

![ops101](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops101.png)
-------


![ops101](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops102.png)
----------


![ops101](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops103.png)
-----------


![ops101](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops104.png)

-------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops71.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops72.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops73.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops74.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops75.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops76.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops77.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops78.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops79.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops80.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops81.png)


------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops81.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops82.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops83.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops84.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops85.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops86.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops87.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops88.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops89.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops90.png)


------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops91.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops92.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops93.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops94.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops95.png)

------------
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops31.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops32.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops33.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops34.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops35.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops36.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops37.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops38.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops39.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops40.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops41.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops42.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops43.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops44.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops45.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops46.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops47.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops48.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops49.png)

------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops50.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops51.png)
------------
![ops71](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/Ops52.png)

------------
---------------
![ops249](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops249.png)
--------
![ops250](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops250.png)
--------
![ops251](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops251.png)

------
![ops252](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops252.png)
----------
![ops254](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops254.png)
---------
![ops255](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops255.png)
---------
![ops255](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops256.png)
---------
![ops255](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops257.png)
---------
![ops255](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops258.png)
---------
![ops255](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops259.png)
---------
![ops255](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops260.png)

--------
----------
![ops271](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops271.png)
----------
![ops271](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops272.png)
----------
![ops271](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops273.png)
----------
![ops271](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops274.png)
----------
![ops271](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops275.png)
----------
![ops271](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops276.png)
----------
![ops271](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops277.png)
----------
![ops271](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops278.png)
----------
![ops271](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops279.png)

--------------
----------

![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops1.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops2.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops3.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops4.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops5.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops6.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops7.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops8.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops9.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops10.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops11.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops12.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops13.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops14.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops15.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops16.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops17.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops18.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops19.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops20.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops21.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops22.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops23.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops24.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops25.png)

----
![ops1](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops26.png)



---------
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops301.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops302.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops303.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops304.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops305.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops306.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops307.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops308.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops309.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops310.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops311.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops312.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops313.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops314.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops315.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops316.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops317.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops318.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops319.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops320.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops321.png)
--------
![ops301](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/ops322.png)

-------------
----------------
![sre51](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre51.png)
----------------
![sre51](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre52.png)
----------------
![sre51](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre58.png)
----------------
![sre51](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre59.png)
----------------
![sre51](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre60.png)
----------------
![sre51](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre61.png)
----------------
![sre51](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre62.png)
----------------
![sre51](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre63.png)

--------------------
------------------

![sre46](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre46.png)

-----------
![sre98](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre98.png)
--------
![sre99](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre99.png)

----------
![sre47](https://github.com/gopala-kr/Quantum-Dots/blob/master/45-Verticals/xOps/sre47.png)

---------
-------------
