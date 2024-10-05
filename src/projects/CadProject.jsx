export default function CadProject() {
  return (
    <div className="project">
      <h2>CAD Skateboard</h2>
      <p className="subtitle">Updated: 9/12/24</p>
      <div className="project-body">
        <p>
          The first unit of Engineering class was CAD, or computer-aided-design.
          Although I have had some experience with CAD before, I still learned
          new things such as how to make moving parts in an assembly, using
          standard components, and more. <br />
          <br />
          We followed tutorial to build a skateboard in Onshape, here's how it
          turned out:
        </p>
        <img
          src="./skateboard.png"
          style={{ width: "500px", marginTop: "50px" }}
        />
        <h3>The Deck</h3>
        <div className="columns">
          <p style={{ width: "400px" }}>
            The first step was to design the deck. This included adding
            countersunk holes, which is something I've never done before and I
            thought it was cool. Later I went back and bent the sides of the
            deck to make it more realistic.
          </p>
          <img
            src="./CadProject/deck.png"
            style={{
              width: "500px",
            }}
          />
        </div>

        <h3>The Trucks</h3>
        <div className="columns">
          <p style={{ width: "600px" }}>
            Then I made the trucks. This is where I learned how to make
            different parts and combine them together.
          </p>
          <img
            src="./CadProject/trucks.png"
            style={{
              width: "300px",
            }}
          />
        </div>

        <h3>The Wheels</h3>
        <div className="columns">
          <p style={{ width: "600px" }}>
            The third step was to make the wheels and bearings. This went
            smoothly for me, but I helped others who were struggling with making
            the sketch that required 3 different diameters.
          </p>
          <img
            src="./CadProject/wheel.png"
            style={{
              height: "200px",
            }}
          />
        </div>

        <h3>Assembly</h3>
        <p>
          The final step was to assemble all the parts together. This is
          something I've never done in CAD before, so I learned how to use
          different kinds of mates, add standardized nuts and bolts, and use the
          replicate tool to duplicate the nuts and bolts. It went smoothly for
          my own board, but there were some really weird issues that I struggled
          with when trying to help other people.
        </p>
        <div className="columns" style={{ marginTop: "50px" }}>
          <img src="./CadProject/assembly_1.png" style={{ height: "300px" }} />
          <img src="./CadProject/assembly_2.png" style={{ height: "400px" }} />
        </div>

        <p style={{ marginTop: "80px" }}>
          Overall, this was a fun project. It was interesting to use different
          CAD software than I'm used to and also learn some new things. In
          addition, I was able to help many others who were struggling with
          their skateboard.
        </p>
      </div>
    </div>
  );
}
