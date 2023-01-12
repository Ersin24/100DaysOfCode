const db = require('../data/database')

class Quote {
    static async getRandomQuote(){
        const quotes = await db.getDb().collection('quotes').find().toArray();
        const randomQuoteIndex = Math.floor(Math.random() * quotes.length)

        // [1, 2, 3] => length: 3 => 0.1 * 3 => Math.floor(0.3) => 0

        const randomQuote = quotes[randomQuoteIndex]

        return randomQuote.text; //Bunu elimizle mongosh üzerinden eklerken girdik
        // db.quotes.insertMany([ {text: 'Learning never stops'}, {text: 'Ali'}, {text: 'Ayse'}  ] )
    }
}

module.exports = Quote;