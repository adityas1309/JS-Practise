
// Question: 55. Generate random UUID

// UUID v4 pattern generator
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g, 
        // Replace with random hex digits
        c => (c === 'x' 
            ? (Math.random() * 16 | 0).toString(16) 
            : (Math.random() * 4 | 8).toString(16)
        )
    );
}
console.log(generateUUID()); // Random UUID v4
