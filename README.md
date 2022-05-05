# Health'Change

Health'Change is a digital-first Blockchain based medical crowdfunding platform built using Ethereum and Web3.
The existing crowdfunding plaforms such as Kickstarter and IndieGogo or even GoFundMe aren't best suited for medical crowdfunding as they are susceptible to frauds and lack trust and transparency.

The idea of Health'Change was concieved just to deal with these issues.
We use a combination of techniques such as KYC verification, Document encryption and Zero-Knowledge Proofs to increase the inherent trust and transparency in the system and enable people to seek/donate funcds for medical treatments.

The end goal of Health'Change is to become a platform that allows people to donate and seek money from anyone across the world without the worry of being defrauded. We are also working with NGOs on the ground and looking at ways to set up DAO's to build and power self-help communities.

You can find our pitch and more information on Health'Change [here](https://youtu.be/8fzt4T8l58g?t=3892).

<i>Sidenote:</i> Health'Change was the winner of the pitch competition and was awareded the 1st position as part of the pitching compeition for [INDENG290](https://scetx.github.io/build-a-blockchain-startup/) - Build a Blockchain Startup

## The Team
- [Jakob Kraiger](https://www.linkedin.com/in/jakobkraiger/) - Jakob is a Medical Doctor by profession and is our Healthcare expert
- [Melissa Desde](https://www.linkedin.com/in/melissadesde/) - Any of our strategy and GTM market decisions can't go through without Melissa's approval
- [Rishabh Thakur](https://www.linkedin.com/in/rishabhmthakur/) - Rishabh is the Technical brain behind Health'Change

We have also been lucky enough to have some wonderful advisors and mentors who have helped us from the point of ideation:
- [Tommaso Di Bartolo](https://www.linkedin.com/in/tommasodibartolo/)
- [Dan Shields](https://www.linkedin.com/in/danwshields/)

A special thanks to [Timmothy Gua](https://www.linkedin.com/in/timothy-guo-94507016a/) for all his valuable feedback.

## Architecture (and the structure of this repository)

Health'Change comprises of three main layers and hence three modules within this repository:

1. Frontend (React.js)
2. Middleware (Node.js)
3. Backend (Ethereum and Web3)

We also use multiple external APIs and services across all the three layers to bring in functionalities like verified user onboarding(KYC), decentralized data storage (IPFS) etc.

Attached is the technical [outline](https://docs.google.com/presentation/d/17XXRjMX2dbrFuFDQlHGtZL6sNJm5_E_VTPbnb6VzdhQ/edit?usp=sharing) of the project!

<strong>All the current features and code is focussed towards building out our first POC!</strong>

## Running the Application

You will have to run each of the three components seperately. So navigate to each folder and find the required steps in their respective READMEs!

- [Middleware](https://github.com/rishabhmthakur2/health-change/blob/main/middleware/README.md)
- [Frontend](https://github.com/rishabhmthakur2/health-change/blob/main/frontend/README.md)
- [Blockchain](https://github.com/rishabhmthakur2/health-change/blob/main/blockchain/README.md)

