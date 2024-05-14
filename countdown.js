const countdown = (seconds) => {
    if (isNaN(seconds) || seconds <= 0) {
        console.error("Please provide a valid positive number for the countdown duration.");
        return;
    }

    console.log("Starting countdown...");

    const interval = setInterval(() => {
        if (seconds > 0) {
            console.log(`${seconds} second${seconds !== 1 ? 's' : ''} remaining...`);
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

// Get the countdown duration from user input (command line argument)
const args = process.argv.slice(2);
const countdownDuration = parseInt(args[0]);

// Start the countdown
countdown(countdownDuration);
