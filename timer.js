const countdown = (seconds) => {
    console.log("Starting countdown...");

    const interval = setInterval(() => {
        if (seconds > 0) {
            console.log(`${seconds} seconds remaining...`);
            seconds--;
        } else {
            clearInterval(interval);
            printMotivationalMessage();
        }
    }, 1000);
};

const printMotivationalMessage = () => {
    console.log("Congratulations! You've completed the countdown. Time to seize the day and make things happen!");
};

// Set the countdown duration in seconds
const countdownDuration = 5;

// Start the countdown
countdown(countdownDuration);
