const countdown = (seconds) => {
    if (!Number.isInteger(seconds) || seconds <= 0) {
        console.error("Please provide a valid positive integer for the countdown duration.");
        return;
    }

    console.log("Starting countdown...");
    let count = seconds;

    const interval = setInterval(() => {
        console.log(`${count} second${count !== 1 ? 's' : ''} remaining...`);
        count--;

        if (count < 0) {
            clearInterval(interval);
            printMotivationalMessage();
        }
    }, 1000);
};

const printMotivationalMessage = () => {
    console.log("Congratulations! You've completed the countdown. Time to seize the day and make things happen!");
};

// Get the countdown duration from command line arguments
const args = process.argv.slice(2);
const countdownDuration = parseInt(args[0]);

// Start the countdown
countdown(countdownDuration);
