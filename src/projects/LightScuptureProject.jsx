export default function LightSculptureProject() {
  return <div className="project">
      <h2>Light Sculpture</h2>
      <p className="subtitle">Updated: 1/15/2025</p>
      <div className="project-body">
        <h3>My project: <i>Slot Machine Candy Dispenser</i></h3>
          <p>I made a slot machine game that rewards the player with M&M's. I got this idea because I wanted to make an interactive game that would reward the player.</p>
          <p>The player pulls the lever to start, and then pulls it again 3 times to stop each spinning symbol on the screens. All 3 symbols are the same, the player wins, and the blue and green LEDs flash and M&Ms get dispensed. Otherwise, red LEDs flash and the game ends.</p>
        <h3>Mechanical Design</h3>
        <h5>Walls</h5>
        <p>The 6 walls are made out of foamcore and were lasercut. I added box joints, which are like notches in the sides of the walls, to make them easier to assemble.</p>
        <h5>Candy Compartment</h5>
        <p>The compartment that holds the M&M's is also made out of foamcore. It consists of an angled floor and inner wall that are held up by notches that insert into the sides of the outer walls. This angle allows for the M&M's to slide towards the shute. This was a challenge to CAD, as its angle made it complex to figure out how it would attach to the 90 degree walls.</p>
        <h5>Candy Wheel and Housing</h5>
        <p>To dispense M&M's, a wheel with a notch in it fills up with the M&M's, then rotates upside down to dispense it to the user. This was 3D printed. I also modeled it to have a notch in the back so that a servo attachment could slide in and spin the wheel. In addition, I needed a 3D printed part that would both hold the servo in place and provide close walls for the wheel so candy wouldn't fall out of the side. I modeled screw holes in the back for the servo to screw into.</p>
        <h5>Lever</h5>
        <p>For the lever, I modeled it as two parts: one that would go on the inside of the box, and the other that goes on the outside that the player pulls. I modeled a peg in the outside part to insert into a hole into the inner part so they would connect. On the inner side of the wall, I attached two foamcore blocks that limit the range of motion of the lever. To make the lever spring back after pulling, I added a notch to the inner lever which pulls a rubber band.</p>
        <h5>Screen Panel</h5>
        <p>I 3D printed this panel based on measurements of my TFT screens so that I could screw them into the back of the panel. In addition, I added 12 holes for LEDs. It ended up working perfectly, as the openings in the panel and screw holes perfectly aligned with the screens, and the LEDs fit.</p>
        <h3>Electrical Design</h3>
	<h5>Some Materials</h5>
	<p>I used an ESP32-WROOM-32D as the microcontroller and 2.4” ILI7789 TFT LCD Screens to display graphics.</p>
        <h5>Screens</h5>
        <p>Figuring out how to hook up the three screens was a challenge. I started out with using an Arduino uno, which uses 5 volt logic, but the screens can only accept 3.3 volts. To overcome this, I had to use a voltage divider circuit on each data pin on the screen to convert 5 volts to 3.3 volts. After running some test code, I realized that the Arduino Uno would be too slow to move graphics across the screen smooth and fast. I switched to an ESP32, which would not only be faster, but uses 3.3 volt logic, so I didn't need voltage dividers. Since the ESP32 had male pins on it instead of female, I used a breadboard in my final design to connect the ESP32 to all components.</p>
        <h5>Lever</h5>
        <p>I attached one piece of aluminum foil, connected to ground, to the inner lever and another, connected to an input pin, to the foamcore block infront of it. In the code, I set the input pin as INPUT_PULLUP. When the aluminum pieces aren't touching, the pin will register as HIGH. When the lever is pulled down and the aluminum pieces touch, the pin will register as LOW because it's connected to ground.</p
        <h5>LEDs</h5>
        <p>I soldered the cathode of each LED together with short wires and connected one of them to ground. I soldered the anode of each to a wire that connected to an output pin on the ESP32. This soldering was difficult because it was hard to hold the wires in place for soldering. All of the joints ended up pretty weak.</p>
        <h5>Servo</h5>
        <p>This was very simple as I just had to connect it to ground, 5 volts, and a PWM output pin on the ESP32.</p>
        <h3>Software Design</h3>
        <h5>Graphics</h5>
        <p>Programming the graphics was definitely the hardest part of the project. First, I had to figure out how to store images in the code. I learned that I had to convert them to a C array with a unint16_t hex code for each pixel. I used a tool called LCD Image Converter to do this. After getting it to move across the screen with an Arduino Uno, it was too slow, so I ended up using the TFT_eSPI library on the ESP32. In order for all 16 images to be able to be stored on the program, I saved each as 24x24 images which I then scaled up in the code. I scaled them up 10 times by looping through each pixel and drawing a 10x10 rectangle for each one. The next challenge was to making the program determine whether or not all the symbols are lined up at the end. I wrote a function that determined a symbol was in frame if its position (measured from the top of the image) was less than half the vertical resolution plus half the gap between symbols. This doesn’t seem to work perfectly, as sometimes when I thing I should win it says I lost, but it works well enough for now.</p>
	<h5>LEDs</h5>
	<p>I programmed it so that when you win, the blue and green LEDs flash in order 3 times. When you lose, all the red LEDs turn on.</p>
	<h5>Servo</h5>
	<p>Controlling the servo was as simple as using the ESP32Servo library. All I needed was servo.write(180); to turn it 180 degrees, and servo.write(0); to turn it back.</p>
	<h3>Reflection</h3>
	<p>Even though it’s not perfect, it’s super satisfying to finally have it working. It took a lot of work and some stress but it was all fun. My favorite part was either learning how to program the TFT screens or designing the candy dispensing mechanism in CAD. My least favorite part was wiring everything together at the end, because there were so many wires and I had to be really careful or else connections would break. I also learned how to laser cut, 3D print screw holes, and make box joints in CAD. If I were to make this project again, I would make the candy hole further up, the candy shute steeper, design a more robust lever that wouldn’t bend side to side, and make the top wall easily removable. 
</div>
  </div>

}