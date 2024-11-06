export default function ProgrammingProject() {
    return <div className="project">
        <h2>Arduino Programming</h2>
        <p className="subtitle">Updated: 11/6/24</p>
        <div className="project-body">
            <h3>Programming Concepts</h3>
            <p><b style={{fontSize: "14pt"}}>Variables</b> store data. Variables are declared in the form <code>&lt;type&gt; &lt;name&gt; = &lt;value&gt;;</code> (e.g. <code>int pin = 2;</code>). The basic data types used in these Arduino exercises are integers, or whole numbers, and booleans, which are either <code>true</code> or <code>false</code>. In code, these are represented by <code>int</code> and <code>boolean</code>, respectively. You can reference the value of a variable by just writing the name of the variable. To set a variable to a new value, you can use <code>&lt;variableName&gt; = &lt;newValue&gt;;</code> (e.g. <code>pin = 3;</code>).</p>
            <p>An <b style={{fontSize: "14pt"}}>array</b> is a type of variable that stores a list of data. Arrays are declared in the form <br/><code>&lt;type&gt; &lt;name&gt;[&lt;numOfItems&gt;] = &#123;&lt;each item, comma separated&gt;&#125;;</code> (e.g. <code>int pins[3] = &#123;2, 3, 4&#125;;</code>). You can reference the value of an item in the array at a certain position by writing the name of the array and then the index of which item you want in brackets. For example, <code>pins[2]</code> will reference the value of the 3rd item in the array (because indeces start at 0), which is <code>4</code>.</p>
            <p>A <b style={{fontSize: "14pt"}}>for loop</b> is a type of loop that runs based on a boolean condition involving a variable that changes each iteration. There are 3 fields that define a for loop, separated with semicolons like this: <code>for (int i = 0; i &lt; 5; i++)</code>. The first field is where you define a variable. The second field has a boolean condition; the loop will only run when this is true. The third field is what will happen to your variable after each iteration. In this example, <code>i++</code> runs after each iteration, so <code>i</code> will increment by one each time.</p>
            <p>A <b style={{fontSize: "14pt"}}>function</b> is a block of code that you can easily run multiple times. Functions are defined in the form <code>&lt;returnType&gt; &lt;functionName&gt;(&lt;parameters, comma separated&gt;) &#123; &#125;</code>, with the code in the curly brackets. For example, <code>void turnOn() &#123; digitalWrite(2, HIGH); &#125;</code>. The <code>void</code> return type means that it doesn't output any value, it just runs code. If you write <code>turnOn();</code> anywhere in the program, it will run the function. Parameters for functions are defined like variables, with the data type and name of the parameter. For example, <code>void turnOn(int pin) &#123; digitalWrite(pin, HIGH); &#125;</code>. Now if I write <code>turnOn(3);</code>, it will write to pin 3.</p>
            <h3>Exercise 19</h3>
            <div className="columns" style={{gap: "60px"}}>
                <div>
                    <img src="./ex_19_dir.png" style={{width: "400px"}}/>
                    <p style={{paddingTop: "20px"}}>For this exercise, I used a for loop to turn turn on LEDs 2-15 skipping the odd numbers. This for loop sets a new variable, <code>ledNumber</code> to <code>2</code>. The condition <code>ledNumber += 2</code> will increase <code>ledNumber</code> by 2 each iteration so that it skips the odd numbers. The condition <code>ledNumber &lt;= 15</code> makes sure that it only loops when <code>ledNumber</code> is less than or equal to 15.</p>
                </div>
                <div>
                    <img className="code" src="./ex_19.png"/>
                </div>
            </div>
            <h3>Exercise 39</h3>
            <div className="columns" style={{gap: "60px", marginBottom:"50px"}}>
                <div>
                    <img src="./ex_39_dir.png" style={{width: "400px"}}/>
                    <p style={{paddingTop: "20px"}}>In the <code>setup</code> function, I use a for loop to set pins 2-15 to output pins. In the <code>loop</code> function, I call the <code>sequenceLEDsRedsThenGreens</code> function, then wait for 3 seconds. The <code>sequenceLEDsRedsThenGreens</code> function turns pins 2, 4, 6, 8 on and off, then 3, 5, 7 on and off. It does this using four for loops, two to set the first set of pins on and off and two more to set the second set of pins on and off. Using <code>pin += 2;</code> in the 3rd condition of both for loops skips every other pin so that I can turn on the proper sequence. A fifth for loop wraps around everything inside this function that repeats <code>repeatCount</code> times, which is a parameter defined in the function.</p>
                </div>
                <div>
                    <img className="code" src="./ex_39.png" />
                </div>
            </div>
            <p><i>Exercise 39 uploaded to the Arduino:</i></p>
            <img src="./ex_39.gif" style={{height: "500px"}}/>
            <h3>Exercise 49</h3>
            <div className="columns" style={{gap: "60px", marginBottom: "50px"}}>
                <div>
                    <img src="./ex_49_dir.png" style={{width: "320px"}}/>
                    <p style={{paddingTop: "20px"}}>For this exercise I made a function called arraySequence. In this function, I define an array that contains the sequence of LEDs I want to turn on. I then have a for loop which loops the amount of times given by parameter <code>reps</code>. Inside this loop I have another loop which iterates through the array and blinks each LED using parameters <code>onTime</code> and <code>offTime</code> for the delay values. </p>
                </div>
                <div>
                    <img className="code" src="./ex_49.png" />
                </div>
            </div>
            <h3>Reflection</h3>
            <p>Having already had a lot of experience with programming and Arduino, these exercises were usually not very challenging for me, and doing them often felt repetitive. However, sometimes I did have trouble figuring out what each question was asking for. In addition to doing my own exercises, I was also able to help others get unstuck.</p>
        </div>
    </div>
}