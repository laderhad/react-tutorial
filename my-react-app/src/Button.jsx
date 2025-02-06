function Button() {
    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} clicked ${count} time/s`);
    //     }
    //     else {
    //         console.log(`${name} stop clicking me`);
    //     }
    // };
    const handleClick=(e)=>e.target.textContent="OUCH!";

    return (
        // <button onClick={() => handleClick('Bro')}>Click me</button>
        <button onDoubleClick={(e)=>handleClick(e)}>Click me</button>
    );
}
export default Button;