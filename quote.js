const inspirationalQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett"
];

const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
    return inspirationalQuotes[randomIndex];
};

console.log(generateRandomQuote());
