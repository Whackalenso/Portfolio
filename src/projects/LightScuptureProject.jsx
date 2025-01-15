export default function LightSculptureProject() {
  return <div className="project">
      <h2>Light Sculpture</h2>
      <p className="subtitle">Updated: 1/15/2025</p>
      <div className="project-body">
        <h3>My project: <i>Slot Machine Candy Dispenser</i></h3>
          <p>I made a slot machine game that rewards the player with M&M's. I got this idea because I wanted to make an interactive game that would reward the player.</p>
          <p>The player pulls the lever to start, and then pulls it again 3 times to stop each spinning symbol on the screens. All 3 symbols are the same, the player wins, and the blue and green LEDs flash and M&Ms get dispensed. Otherwise, red LEDs flash and the game ends.</p>
        {/* <h3>Materials</h3>
          <ul>
            <li><b>ESP32-WROOM-32D</b> - Microcontroller</li>
            <li><b>2.4" ILI7789 TFT LCD Screens</b> - To display the slot machine symbols</li>
            <li><b></b></li>
          </ul> */}
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
        <p>I 3D printed this panel based on measurements of my TFT screens so that I could screw them into the back of the panel. It ended up working perfectly, as the openings in the panel and screw holes perfectly aligned with the screens.</p>
      </div>
  </div>
}