// Cricket Quiz - Question Bank
// 100 questions, each stored as an object with: question, options (array), and answer (correct option)

const questionBank = [
  {
    question: "How many players are there in a cricket team on the field?",
    options: ["10", "11", "12", "9"],
    answer: "11"
  },
  {
    question: "What is the maximum number of overs in a One Day International (ODI) match per side?",
    options: ["20", "50", "40", "60"],
    answer: "50"
  },
  {
    question: "How many overs are bowled per side in a T20 match?",
    options: ["10", "20", "50", "15"],
    answer: "20"
  },
  {
    question: "What is the term for a batsman being dismissed without scoring a single run?",
    options: ["Duck", "Golden Duck", "Diamond Duck", "Silver Duck"],
    answer: "Duck"
  },
  {
    question: "Which country won the first Cricket World Cup in 1975?",
    options: ["Australia", "England", "West Indies", "India"],
    answer: "West Indies"
  },
  {
    question: "How many balls are there in a standard cricket over?",
    options: ["4", "5", "6", "8"],
    answer: "6"
  },
  {
    question: "What is the term used for a bowler taking three wickets on three consecutive deliveries?",
    options: ["Hat-trick", "Triple Strike", "Trifecta", "Three-peat"],
    answer: "Hat-trick"
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Brian Lara"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which shape is a cricket ball?",
    options: ["Oval", "Sphere", "Cylinder", "Cone"],
    answer: "Sphere"
  },
  {
    question: "What is the maximum number of fielders allowed outside the 30-yard circle in the last 10 overs of an ODI innings?",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    question: "In cricket, what does LBW stand for?",
    options: ["Leg Before Wicket", "Long Ball Wide", "Leg Ball Wicket", "Late Batting Warning"],
    answer: "Leg Before Wicket"
  },
  {
    question: "How many stumps are there on one end of the pitch?",
    options: ["2", "3", "4", "5"],
    answer: "3"
  },
  {
    question: "What is the distance between the two sets of stumps on a cricket pitch?",
    options: ["20 yards", "22 yards", "24 yards", "18 yards"],
    answer: "22 yards"
  },
  {
    question: "Which country has won the most Cricket World Cups (as of 2023)?",
    options: ["India", "Australia", "West Indies", "England"],
    answer: "Australia"
  },
  {
    question: "What is the term for scoring 100 runs in a single innings by a batsman?",
    options: ["Century", "Half-century", "Double", "Ton-up"],
    answer: "Century"
  },
  {
    question: "What is the term for a batsman scoring 50 runs in an innings?",
    options: ["Half-century", "Fifty-up", "Semi-century", "Mid-ton"],
    answer: "Half-century"
  },
  {
    question: "Who holds the record for the highest individual score in Test cricket?",
    options: ["Brian Lara", "Sachin Tendulkar", "Don Bradman", "Virender Sehwag"],
    answer: "Brian Lara"
  },
  {
    question: "What is the highest individual score in Test cricket history?",
    options: ["375", "380", "400*", "365*"],
    answer: "400*"
  },
  {
    question: "Which fielding position is directly behind the batsman on the off side?",
    options: ["Slip", "Gully", "Point", "Cover"],
    answer: "Slip"
  },
  {
    question: "What is the term for an illegal delivery bowled too high or wide?",
    options: ["No ball", "Wide", "Bouncer", "Dead ball"],
    answer: "Wide"
  },
  {
    question: "What is a 'no ball' primarily called when the bowler oversteps the crease?",
    options: ["Front foot no ball", "Overstep fault", "Line fault", "Bowling fault"],
    answer: "Front foot no ball"
  },
  {
    question: "How many runs are awarded for a no ball in most formats?",
    options: ["1", "2", "0", "4"],
    answer: "1"
  },
  {
    question: "What is the term for the wooden bail placed on top of the stumps?",
    options: ["Bail", "Cap", "Lid", "Peg"],
    answer: "Bail"
  },
  {
    question: "Who is the only bowler to take 800 Test wickets?",
    options: ["Shane Warne", "Muttiah Muralitharan", "James Anderson", "Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Which country hosted the 2023 Cricket World Cup?",
    options: ["England", "Australia", "India", "South Africa"],
    answer: "India"
  },
  {
    question: "Who won the 2023 Cricket World Cup?",
    options: ["India", "Australia", "New Zealand", "South Africa"],
    answer: "Australia"
  },
  {
    question: "What is the term for a bowler dismissing a batsman using a delivery that spins in?",
    options: ["Googly", "Yorker", "Bouncer", "Doosra"],
    answer: "Googly"
  },
  {
    question: "What is a 'yorker' in cricket?",
    options: ["A ball that pitches near the batsman's feet", "A ball bowled very high", "A slow delivery", "A spin delivery"],
    answer: "A ball that pitches near the batsman's feet"
  },
  {
    question: "What is the term for a fast, short-pitched delivery aimed at the batsman's body or head?",
    options: ["Bouncer", "Yorker", "Full toss", "Beamer"],
    answer: "Bouncer"
  },
  {
    question: "What is a 'full toss' delivery?",
    options: ["A ball that reaches the batsman without bouncing", "A ball bowled underarm", "A spin delivery", "A ball that bounces twice"],
    answer: "A ball that reaches the batsman without bouncing"
  },
  {
    question: "Which trophy is contested between England and Australia in Test cricket?",
    options: ["The Ashes", "World Test Championship", "Border-Gavaskar Trophy", "Wisden Trophy"],
    answer: "The Ashes"
  },
  {
    question: "Which trophy is contested between India and Australia in Test series?",
    options: ["The Ashes", "Border-Gavaskar Trophy", "Wisden Trophy", "Frank Worrell Trophy"],
    answer: "Border-Gavaskar Trophy"
  },
  {
    question: "What is the term for the pitch condition that favors spin bowlers?",
    options: ["Turning track", "Green top", "Flat deck", "Dead pitch"],
    answer: "Turning track"
  },
  {
    question: "What is the term for the pitch condition with more grass, favoring fast bowlers?",
    options: ["Green top", "Turning track", "Dust bowl", "Flat deck"],
    answer: "Green top"
  },
  {
    question: "What does 'DRS' stand for in cricket?",
    options: ["Decision Review System", "Direct Run Score", "Duck Review Score", "Dismissal Recording System"],
    answer: "Decision Review System"
  },
  {
    question: "How many reviews are typically allowed per team per innings in Test cricket under DRS?",
    options: ["2", "3", "1", "4"],
    answer: "2"
  },
  {
    question: "What is the term for the imaginary line the batsman must stay behind to avoid being stumped?",
    options: ["Popping crease", "Bowling crease", "Return crease", "Boundary line"],
    answer: "Popping crease"
  },
  {
    question: "Which fielding position is very close to the batsman on the leg side, behind square?",
    options: ["Short leg", "Long leg", "Fine leg", "Deep square leg"],
    answer: "Short leg"
  },
  {
    question: "What is the term for a shot played by the batsman that goes over the boundary without bouncing?",
    options: ["Six", "Four", "Boundary", "Maximum hit"],
    answer: "Six"
  },
  {
    question: "How many runs are scored when the ball crosses the boundary after bouncing at least once?",
    options: ["4", "6", "2", "3"],
    answer: "4"
  },
  {
    question: "What is the term for an over in which no runs are scored?",
    options: ["Maiden over", "Dot over", "Silent over", "Zero over"],
    answer: "Maiden over"
  },
  {
    question: "Which country's team is nicknamed 'Baggy Greens'?",
    options: ["Australia", "England", "South Africa", "New Zealand"],
    answer: "Australia"
  },
  {
    question: "Which country's team is nicknamed 'Men in Blue'?",
    options: ["India", "Pakistan", "Sri Lanka", "Bangladesh"],
    answer: "India"
  },
  {
    question: "What is the nickname of the Pakistan cricket team?",
    options: ["Men in Green", "Shaheens", "Green Warriors", "Men in Blue"],
    answer: "Shaheens"
  },
  {
    question: "Who captained India to victory in the 2011 Cricket World Cup?",
    options: ["Virat Kohli", "MS Dhoni", "Sourav Ganguly", "Rahul Dravid"],
    answer: "MS Dhoni"
  },
  {
    question: "Who captained India to victory in the 1983 Cricket World Cup?",
    options: ["Kapil Dev", "Sunil Gavaskar", "MS Dhoni", "Mohinder Amarnath"],
    answer: "Kapil Dev"
  },
  {
    question: "What is the term for a batsman who bats with the left hand?",
    options: ["Left-hander", "Southpaw batsman", "Reverse batsman", "Cross-hand batsman"],
    answer: "Left-hander"
  },
  {
    question: "What is a 'doosra' in cricket?",
    options: ["A spin delivery that turns the other way", "A type of bat", "A fielding position", "A batting technique"],
    answer: "A spin delivery that turns the other way"
  },
  {
    question: "What is the term for a batsman hitting the ball and running between the wickets?",
    options: ["Running between wickets", "Sprint scoring", "Wicket dash", "Crease running"],
    answer: "Running between wickets"
  },
  {
    question: "What is the term for the official who stands on the field to make decisions during a match?",
    options: ["Umpire", "Referee", "Judge", "Marshal"],
    answer: "Umpire"
  },
  {
    question: "Who oversees the conduct of players and match discipline, usually seated off the field?",
    options: ["Match Referee", "Third Umpire", "Fourth Umpire", "Ground Curator"],
    answer: "Match Referee"
  },
  {
    question: "What is the term for the umpire who uses technology to make decisions from off the field?",
    options: ["Third Umpire", "Match Referee", "Fourth Umpire", "Video Analyst"],
    answer: "Third Umpire"
  },
  {
    question: "In which country did cricket originate?",
    options: ["England", "Australia", "India", "South Africa"],
    answer: "England"
  },
  {
    question: "What is the oldest format of international cricket?",
    options: ["Test cricket", "ODI", "T20", "T10"],
    answer: "Test cricket"
  },
  {
    question: "How many days can a Test match last (maximum, traditionally)?",
    options: ["3", "4", "5", "7"],
    answer: "5"
  },
  {
    question: "What is the term for a match ending without a result due to time constraints?",
    options: ["Draw", "Tie", "Washout", "No result"],
    answer: "Draw"
  },
  {
    question: "What is the term for a match where both teams score the exact same number of runs?",
    options: ["Tie", "Draw", "Dead heat", "Even match"],
    answer: "Tie"
  },
  {
    question: "Which trophy is awarded to the winner of the ICC Champions Trophy?",
    options: ["Champions Trophy", "World Cup", "Asia Cup", "T20 Cup"],
    answer: "Champions Trophy"
  },
  {
    question: "What is the governing body of international cricket called?",
    options: ["ICC", "FIFA", "IOC", "BCCI"],
    answer: "ICC"
  },
  {
    question: "What does ICC stand for?",
    options: ["International Cricket Council", "Indian Cricket Council", "International Cricket Committee", "International Cricket Championship"],
    answer: "International Cricket Council"
  },
  {
    question: "What is the governing body of cricket in India called?",
    options: ["BCCI", "ICC", "PCB", "CSA"],
    answer: "BCCI"
  },
  {
    question: "What does BCCI stand for?",
    options: ["Board of Control for Cricket in India", "Bureau of Cricket Control in India", "Board of Central Cricket India", "British Cricket Council of India"],
    answer: "Board of Control for Cricket in India"
  },
  {
    question: "Which is the most popular T20 cricket league in the world?",
    options: ["Indian Premier League (IPL)", "Big Bash League", "Pakistan Super League", "Caribbean Premier League"],
    answer: "Indian Premier League (IPL)"
  },
  {
    question: "Who has scored the most runs in international cricket history?",
    options: ["Sachin Tendulkar", "Ricky Ponting", "Kumar Sangakkara", "Virat Kohli"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "How many international centuries did Sachin Tendulkar score in total?",
    options: ["90", "100", "95", "110"],
    answer: "100"
  },
  {
    question: "Who is known for the 'Helicopter Shot'?",
    options: ["MS Dhoni", "Virat Kohli", "Rohit Sharma", "AB de Villiers"],
    answer: "MS Dhoni"
  },
  {
    question: "Which batsman is often referred to as 'Mr. 360' for his ability to play shots all around the ground?",
    options: ["AB de Villiers", "Chris Gayle", "Glenn Maxwell", "David Warner"],
    answer: "AB de Villiers"
  },
  {
    question: "Who is nicknamed the 'Universe Boss'?",
    options: ["Chris Gayle", "Kieron Pollard", "Andre Russell", "Dwayne Bravo"],
    answer: "Chris Gayle"
  },
  {
    question: "What is the term for the fielding position directly in front of the batsman, close in?",
    options: ["Silly point", "Gully", "Cover", "Mid-off"],
    answer: "Silly point"
  },
  {
    question: "What is the term for the area between the wicketkeeper and first slip?",
    options: ["Gully", "Point", "Backward point", "Third man"],
    answer: "Gully"
  },
  {
    question: "What is the fielding position behind the wicketkeeper on the off side boundary called?",
    options: ["Third man", "Fine leg", "Long leg", "Deep point"],
    answer: "Third man"
  },
  {
    question: "What is the equivalent fielding position to third man, but on the leg side?",
    options: ["Fine leg", "Long on", "Deep square leg", "Cover"],
    answer: "Fine leg"
  },
  {
    question: "What is the term for a bowler's economy rate?",
    options: ["Runs conceded per over", "Wickets taken per match", "Balls bowled per over", "Total overs bowled"],
    answer: "Runs conceded per over"
  },
  {
    question: "What is the term for the average number of runs a batsman scores per dismissal?",
    options: ["Batting average", "Strike rate", "Run rate", "Economy rate"],
    answer: "Batting average"
  },
  {
    question: "What is the term for the number of runs scored per 100 balls faced by a batsman?",
    options: ["Strike rate", "Batting average", "Run rate", "Economy rate"],
    answer: "Strike rate"
  },
  {
    question: "What is the term for the total runs scored divided by overs faced by a team?",
    options: ["Run rate", "Strike rate", "Batting average", "Economy rate"],
    answer: "Run rate"
  },
  {
    question: "What is the D/L method used for in cricket?",
    options: ["Recalculating targets in rain-affected matches", "Deciding player of the match", "Selecting the toss winner", "Calculating batting averages"],
    answer: "Recalculating targets in rain-affected matches"
  },
  {
    question: "What does D/L method stand for?",
    options: ["Duckworth-Lewis method", "Direct-Loss method", "Delay-Length method", "Dismissal-Loss method"],
    answer: "Duckworth-Lewis method"
  },
  {
    question: "What is the term for a bowler bowling all six balls of an over illegally, resulting in extra deliveries?",
    options: ["Extras", "No balls and wides", "Penalty runs", "Free hits"],
    answer: "Extras"
  },
  {
    question: "What is a 'free hit' in limited-overs cricket?",
    options: ["A delivery after a no-ball where the batsman cannot be out (except run out)", "A delivery bowled underarm", "The first ball of the match", "A bonus boundary"],
    answer: "A delivery after a no-ball where the batsman cannot be out (except run out)"
  },
  {
    question: "What is the term for the fielding restriction circle in limited-overs cricket?",
    options: ["30-yard circle", "20-yard circle", "40-yard circle", "Powerplay ring"],
    answer: "30-yard circle"
  },
  {
    question: "What is the term for the first phase of overs in limited-overs cricket with fielding restrictions?",
    options: ["Powerplay", "Death overs", "Middle overs", "Free overs"],
    answer: "Powerplay"
  },
  {
    question: "What are the final overs of a limited-overs innings commonly called?",
    options: ["Death overs", "Powerplay overs", "Opening overs", "Free overs"],
    answer: "Death overs"
  },
  {
    question: "Which player holds the record for the most wickets in ODI cricket?",
    options: ["Muttiah Muralitharan", "Wasim Akram", "Shane Warne", "Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who holds the record for the fastest century in ODI cricket?",
    options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Rohit Sharma"],
    answer: "AB de Villiers"
  },
  {
    question: "Who has scored the highest individual score in ODI cricket?",
    options: ["Rohit Sharma", "Virender Sehwag", "Martin Guptill", "Chris Gayle"],
    answer: "Rohit Sharma"
  },
  {
    question: "What is the highest individual score in ODI cricket history?",
    options: ["264", "237", "219", "175"],
    answer: "264"
  },
  {
    question: "Which team won the inaugural T20 World Cup in 2007?",
    options: ["India", "Pakistan", "Australia", "South Africa"],
    answer: "India"
  },
  {
    question: "Who was the captain of India's 2007 T20 World Cup winning team?",
    options: ["MS Dhoni", "Virat Kohli", "Sourav Ganguly", "Rahul Dravid"],
    answer: "MS Dhoni"
  },
  {
    question: "What is the term for the bat's flat, wide part used to hit the ball?",
    options: ["Blade", "Handle", "Grip", "Face"],
    answer: "Blade"
  },
  {
    question: "What material is traditionally used to make a cricket bat?",
    options: ["Willow wood", "Oak wood", "Bamboo", "Maple wood"],
    answer: "Willow wood"
  },
  {
    question: "What is the standard weight range of a cricket ball (in ounces)?",
    options: ["5.5 to 5.75", "4 to 4.5", "6 to 6.5", "7 to 7.5"],
    answer: "5.5 to 5.75"
  },
  {
    question: "What color is the ball typically used in Test cricket?",
    options: ["Red", "White", "Pink", "Orange"],
    answer: "Red"
  },
  {
    question: "What color is the ball typically used in day-night Test matches?",
    options: ["Pink", "Red", "White", "Yellow"],
    answer: "Pink"
  },
  {
    question: "What color is the ball typically used in ODIs and T20s?",
    options: ["White", "Red", "Pink", "Orange"],
    answer: "White"
  },
  {
    question: "What is the term for protective gear worn by batsmen on their legs?",
    options: ["Pads", "Guards", "Shields", "Braces"],
    answer: "Pads"
  },
  {
    question: "What is the protective equipment worn by the wicketkeeper and batsman on their hands called?",
    options: ["Gloves", "Mitts", "Handguards", "Wristbands"],
    answer: "Gloves"
  },
  {
    question: "What is the term for the fielder standing directly behind the stumps to catch the ball?",
    options: ["Wicketkeeper", "Slip", "Backstop", "Gully"],
    answer: "Wicketkeeper"
  },
  {
    question: "Which country's domestic first-class competition is called the Ranji Trophy?",
    options: ["India", "Pakistan", "Sri Lanka", "Bangladesh"],
    answer: "India"
  },
  {
    question: "Which country's domestic T20 league is called the Big Bash League?",
    options: ["Australia", "England", "South Africa", "New Zealand"],
    answer: "Australia"
  },
];





function randomquestion(){

    //use set for unique element

    
    const data=new Set();

    while(data.size!=5){
        const index =Math.floor( Math.random()*questionBank.length);
        data.add(questionBank[index]);

    }

    return [...data];

}


// select the form and insert all elements into the form


const form=document.querySelector('form');


const problem=randomquestion();

problem.forEach((obj,index)=>{

 const div_element=document.createElement('div');
  div_element.className='question';


const para=document.createElement('p');
para.textContent= `${index+1}. ${obj['question']}`;
div_element.appendChild(para);



//create four options

obj['options'].forEach((data)=>{

  const label=document.createElement('label');

  const input=document.createElement('input');
  input.type="radio";
  input.name=`q${index+1}`;
  input.value=data;
  label.appendChild(input);
  label.appendChild(document.createTextNode(data));
  div_element.appendChild(label);
  div_element.appendChild(document.createElement('br'));



})

form.appendChild(div_element);


})

const button=document.createElement('button');
button.type='submit';
button.className='submit-btn';
button.textContent='submit';

form.appendChild(button);



