const heavyProcess = (iterations) => {
    for(let i = 0; i< iterations; i++){
        console.log('for');
    }
    return `${iterations} completed!`;
} 

export default heavyProcess;
