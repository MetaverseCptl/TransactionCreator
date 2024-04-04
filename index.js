
```javascript
class Transaction {
   constructor(sender, recipient, amount) {
      this.sender = sender;
      this.recipient = recipient;
      this.amount = amount;
   }
}

class TransactionCreator {
   constructor() {}

   createTransaction(sender, recipient, amount) {
      if (amount <= 0) {
         throw new Error("Amount must be a positive number");
      }

      if (sender === recipient) {
         throw new Error("Sender and recipient must be different");
      }

      const transaction = new Transaction(sender, recipient, amount);
      
      return transaction;
   }
}

const transactionCreator = new TransactionCreator();

try {
   const transaction = transactionCreator.createTransaction('JohnDoe', 'JaneDoe', 100);
   console.log(transaction);
} catch (error) {
   console.log(error.message);
}