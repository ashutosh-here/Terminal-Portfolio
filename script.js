const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <br><span class="code">whoami</span>, <span class="code">experience</span>, <span class="code">education</span>,<br> <span class="code">skills</span>, <span class="code">projects</span>, <span class="code">contact</span>, <span class="code">exit</span>,<br> ',
    // <span class="code">thewave</span>, <span class="code">fav_books</span>, <span class="code">fav_songs</span>,<br> <span class="code">fav_podcast</span>, <span class="code">fork</span>, <span class="code">ideas</span>,<br> <span class="code">quotes</span>, <span class="code">resume</span>,<br> <span class="code">extra_time</span>
    whoami:
   "What's up! 👋<br>I'm Ashutosh. I’m an 20 yr old software Engineer currently pursuing B.Tech in Information Technology From UIT-RGPV,Bhopal (M.P.).<br>I love creating things and tinkering with different code.<br>I am passionate about JAVA and it's technologies.<br>I become motivated by how very little I know.<br>Outside of Tech , you can find me listening to music and watching movies or playing online games.<br>",
   
   skills:
    '<span class="code">Languages:</span> Java ( JSE + JEE ),C,C++, HTML5, CSS3, Javascript, JQuery;<br><span class="code">Databases:</span>MySql,Oracle ;<br><span class="code">Technologies:</span> Git, Eclipse, NetBeans;<br><span class="code">Frameworks:</span> Hibernate;',
 
    education:
    "<span>Graduation:</span> Bachelor of Technolgoy from University Institute of Technology in Information Technology , 07/2018 - Present, 7.88 CGPA till now  .<br><span>Higher Secondary :</span> Shravan Kumari School,Rewa 04/2017 - 03/2018, 90.2% . <br><span>High School :</span> Shravan Kumari School,Rewa , 04/2015 - 03/201, 10CGPA.<br>",

  
    // resume: "Click this file:<a href='' class='success link'>resume.pdf</a>",
 
    experience: "<span>Learner:-Coding Club India</span> : Worked under Mission Helix powered by Coding Club Indiato make Coding club as a Global Platform for Coders  , 05/2020 - 07/2020,   .<br><span>Campus Ambassador :-National Engineering Olympiad 3.0 </span> : Worked as campus ambassador in NEO 3.0 ,endorsed NEOaim to increase engineering aptitude, 03/2020 - 04/2020<br>",

  
    contact:
    "You can contact me on any of following:<br><a href='https://www.linkedin.com/in/ashutosh-tripathi-8a5575181/' class='success link'>Linkedin</a> ,<a href='https://twitter.com/ashu8839' class='success link'> Twitter </a>, <a href='https://www.instagram.com/ashu__99_tripathi' class='success link'> Instagram </a>, <a href='https://github.com/Geeky-Ashu14' class='success link'>Github</a>",

    projects:    "<a href=\"https://github.com/Geeky-Ashu14/ECommerce\"  >ECommerce web Application🎫🏪🕶️:</a> A model e-commerce web application made entirely using JAVA as back-end applying ORM principles of Hibernate Framework.<br><a href=\"https://github.com/Geeky-Ashu14/Event-management-Webapp\"  >✨Event Management Web application🎫:</a> A model web application for any event registeration and handlingusing JAVA(JSP+Servlet+JDBC) as back-end and MYSql for database. .<br><a href=\"https://github.com/Geeky-Ashu14/Library-management-system \">Library🏛️ Management System: </a> A 🌑dark themed library management desktop application🖥️ with modern look and feel with Java Swing & AWT using JDBC API for MySql database interaction. <br>",

    exit:"Thank you for your visit <br>",
    // thewave:"Currently I am working on Webwet.io!<br> Webwet is a website that tells the weather of different locations on earth.",

    

    // fav_songs:'1.Kill4Me by Marilyn Manson',

    // fav_podcast:'1.How To get Rich by Naval ravikant',

   

    // fork:"I upload random projects on the following sites:<br><a href='https://codepen.io/UbaidRussell/pens/showcase' class='success link'>codepen.io</a> ,<a href='https://github.com/UbaidRussell' class='success link'>Github</a>,",

    // ideas:' 1.Create cryptocurrency token sale.<br>2.Create Podcast<br>3.Create Blog<br> ',

    

    // quotes:'1."Spend more money OR Make more money.One will kill you."<br>2."It is both,dead and alive according to schrodingers cat."<br>3."If you want something,give something."<br>4."Judge Noone."<br>5."What did you create today?"<br>6."The clouds take any shape they want.I wish I was clouds."<br>7."The more you learn the easier it becomes to make money."<br>8."Give out some cheatcodes,I mean like why not?"<br>9."Take your time."<br>10."The more it matters who said it,the less it actually matters."',

    // extra_time:'Chess club, Hackathon,a local starbucks',

  };
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  if (input.match(/^\s*exit\s*$/)) {
    exit();
}
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);

function exit() {
  $('.tv').addClass('collapse');
  // term.disable();
}

$(window).resize(function(){
if($(window).width() <540){
    alert("Please use Computer!");
}

}); 

$(document).ready(function(){
    if(window.matchMedia("(max-width: 557px)").matches){
        // The viewport is less than 768 pixels wide
        alert("This is a mobile device.");
    } else{
        // The viewport is at least 768 pixels wide
      //alert("This is a tablet or desktop.");
    }
});
