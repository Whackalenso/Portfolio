export default function ProgrammingProject() {
    return <div className="project">
        <h2>Arduino Programming</h2>
        <p className="subtitle">Updated: 10/29/24</p>
        <div className="project-body">
            <h3>Programming Concepts</h3>
            <p><b style={{fontSize: "14pt"}}>Variables</b> store data. Variables are declared in the form <code>&lt;type&gt; &lt;name&gt; = &lt;value&gt;;</code> (e.g. <code>int pin = 2;</code>). The basic data types used in these Arduino exercises are integers, or whole numbers, and booleans, which are either <code>true</code> or <code>false</code>. In code, these are represented by <code>int</code> and <code>boolean</code>, respectively. You can reference the value of a variable by just writing the name of the variable. To set a variable to a new value, you can use <code>&lt;variableName&gt; = &lt;newValue&gt;;</code> (e.g. <code>pin = 3;</code>).</p>
            <p><b style={{fontSize: "14pt"}}>Arrays</b> are types of variables that store a list of data. Arrays are declared in the form <br/><code>&lt;type&gt; &lt;name&gt;[&lt;numOfItems&gt;] = &#123;&lt;each item, comma separated&gt;&#125;;</code> (e.g. <code>int pins[3] = &#123;2, 3, 4&#125;;</code>). You can reference the value of an item in the array at a certain position by writing the name of the array and then the index of which item you want. For example, <code>pins[2]</code> will reference the value of the 3rd item in the array (because indeces start at 0), which is <code>4</code>.</p>
            <h3>Exercise 19</h3>
            <div className="columns" style={{gap: "60px"}}>
                <div>
                    <img src="./ex_19_dir.png" style={{width: "400px"}}/>
                    <p style={{paddingTop: "20px"}}>For this exercise, I used a for loop to turn turn on LEDs 2-15 skipping the odd numbers. This for loop sets a new variable, <code>ledNumber</code> to <code>2</code>. The condition <code>ledNumber += 2</code> will increase <code>ledNumber</code> by 2 each iteration so that it skips the odd numbers. The condition <code>ledNumber &lt;= 15</code> makes sure that it only loops when <code>ledNumber</code> is less than or equal to 15.</p>
                </div>
                <img className="code" src="./ex_19.png"/>
            </div>
            <h3>Exercise 39</h3>
            <div className="columns" style={{gap: "60px", marginBottom:"50px"}}>
                <div>
                    <img src="./ex_39_dir.png" style={{width: "400px"}}/>
                    <p style={{paddingTop: "20px"}}>In the <code>setup</code> function, I use a for loop to set pins 2-15 to output pins. In the <code>loop</code> function, I call the <code>sequenceLEDsRedsThenGreens</code> function, then wait for 3 seconds. The <code>sequenceLEDsRedsThenGreens</code> function turns pins 2, 4, 6, 8 on and off, then 3, 5, 7 on and off. It does this using four for loops, two to set the first set of pins on and off and two more to set the second set of pins on and off. Using <code>pin += 2;</code> in the 3rd condition of both for loops skips every other pin so that I can turn on the proper sequence. A fifth for loop wraps around everything inside this function that repeats <code>repeatCount</code> times, which is a parameter defined in the function.</p>
                </div>
                <img className="code" src="./ex_39.png" />
            </div>
            <p><i>Exercise 39 uploaded to the Arduino:</i></p>
            <img src="./ex_39.gif" style={{height: "500px"}}/>
            <h3>Exercise 49</h3>
            <div className="columns" style={{gap: "60px", marginBottom: "50px"}}>
                <div>
                    <img src="./ex_49_dir.png" style={{width: "320px"}}/>
                    <p style={{paddingTop: "20px"}}>hi this is the expalnation</p>
                </div>
                <img className="code" src="./ex_49.png" />
            </div>
        </div>
    </div>
}