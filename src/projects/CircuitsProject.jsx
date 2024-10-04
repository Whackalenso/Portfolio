export default function CircuitsProject() {
    return <div className="project">
        <h2>Electric Circuits</h2>
        <subtitle>Updated: 10/2/24</subtitle>
        <div className="project-body">
            <p>
                The second unit of Engineering class was electric circuits. I have some experience with electronics, but this unit helped me understand how the basics really worked more clearly.
                <br/><br/> First, we learned about the most basic circuit types in electronics, series and parallel, and made them on breadboards (shown below).
            </p>
            <div className="columns" style={{margin: "40px 0 "}}>
                <img src="./series.jpg" style={{width: "400px"}}/>
                <img src="./parallel.jpg" style={{width: "400px"}}/>
            </div>
            <p>Then we moved on to more complex circuits ⬇️</p>
            <h3>Nightlight</h3>
            <p>We made a nightlight, which turns an LED on when it's not exposed to light. This involved two components I've never used before, a photoresistor and a transistor. The photoresistor is a resistor which provides more resistance the more light it's exposed to, and the transistor acts as a gate that allows a variable amount of current to pass based on the input voltage difference. One challenge was actually finding a resistor that was the proper amount of ohms. Here's the final product: </p>
            <img src="./nightlight.jpg" style={{width: "400px", margin: "20px 0" }}/>
            <h3>Toy Organ</h3>
            <div className="columns">
                <p>After finishing the nightlight, I moved on to make a toy organ. This involved using different capacitors connected to buttons that each would output a different pitch when pressed.<br/><br/>It made sound when I first tested it, which was great. However, the main issue I had was that all the pitches were too low except for a couple of them, and higher pitches required more specific capacitance values that weren't available to me. Eventually I discovered that I could combine capacitors to make the pitches of each note closer to what I wanted it to be, but they were still not close at all to the notes of an actual keyboard. I settled on using a potentiometer to change the resistance connected to pins on the 555 timer, which would change the pitch and allow me to play different notes with just one button.<br/><br/>Here's a video of what it looked like when I plugged it into an oscilliscope:</p>
                <div>
                    <img src="./organ_schematic.jpg"/>
                    <p>Schematic diagram</p>
                </div>
            </div>
            <img src="./skateboard.png" style={{width: "400px", transform: "translateY(-150px)"}}/>
            <p>This unit helped me understand the fundamental principles of electronics better, like how to think about voltage and current. I also learned about new components such as photoresistors, transistors, and 555 timers.</p>
        </div>
    </div>
}