# Health'Change Middleware

Built using Node.js and uses `web3.js` and `js-ipfs`.
This layer functions as the <i>brain of Health'Change</i> as it handles all the API calls, routing, executions and transaction queuing. 

## How to run

Make sure you are within the `middleware` folder and that you have [Node](https://nodejs.org/en/) installed in your system. Then run the following commands.

```
npm install
npm start
```

You can now test all the API routes using tools like [POSTMAN](https://www.postman.com/)

## Breakdown of API Routes

### User Routes (/user)

- GET User
<ul>
<li>Get information of a user based on their ID</li>
<li>Can be called using the MongoId of the user or the unique platform generated id</li>
</ul>

- POST User
<ul>
<li>Create a new user.</li>
<li>Triggers KYC check using [API Setu](https://apisetu.gov.in/) and confirms if a user should be registered or not.</li>
<li>Takes in multiple data points as part of the FR form submission and inputs them onto Mongo.</li>
</ul>

### Funding Request (/requests)

- GET Funding Details
<ul>
<li>Get information of a particular funding request using request id.</li>
<li>Will combine information from a live contract, IPFS and a MongoDB collection.</li>
</ul>


- POST Funding Request
<ul>
<li> Create a new funding request. </li>
<li> Will interact with Web3 to create a new funding contract on the chain. </li>
<li> Responsible for receiveing documents from the FE, uploading them to [IPFS](https://ipfs.io/) - We are using [Pinata](https://www.pinata.cloud/) and then storing the only the document hash as part of the contract initiation. </li>
</ul>

### Donation (/donations)

- GET Donation Details
Get information of a particular donation using donation id

- POST Funding Request
Create a new donation
