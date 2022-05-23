const options_tag=Array.from(document.getElementsByClassName("options"))
const options_text_tag=Array.from(document.getElementsByClassName("option-text"))
const btn_tag=document.querySelector(".sub-btn")
const restart_btn_tag=document.querySelector(".restart-btn")
const msg_div_tag=document.querySelector(".msg-div")
const msg_text_tag=document.querySelector(".msg-text")
const question_no_tag=document.querySelector("#question-no")
const question_box=document.querySelector(".question-box")
const question_tag=document.querySelector("#question")
const manager_persona=document.querySelector("#manager_persona")
const yourmanager_persona=document.querySelector("#yourmanager_persona")
const employee_persona=document.querySelector("#employee_persona")
const learning_persona=Array.from(document.getElementsByClassName("learning_persona"))
const weakness=document.querySelector("#weakness")
const explain_tag=document.querySelector("#explain")
let user_name=prompt("What's Your Name ?")
let email_id=prompt("What's Your Email Id ?")
let user="employee";
const employee_questions={
    1:{text:"I want to learn to do something new on a video game. I would ?",options:["Read the instructions","Call up a cousin who plays the same game","Follow a hit and trial method","Watch a video on how to do it"]},
    2:{text:"I have joined a car repairing shop. I would prefer that my co-worker would ?",options:["Handover the manual guide for my reading","Describe the top-down process","Use a prototype model to show me the process of repairing","Use visuals and pictures to show the steps of repairing "]},
    3:{text:"I want to understand how to operate my new microwave. I would ?",options:["Read the written instructions","Call up my friend and ask the same","Ask someone around me to guide me while I am operating the microwave","Watch the videos online"]},
    4:{text:"I prefer my trainer or teacher uses ?",options:["Reading manuals, handouts, and books","Question & answers format, group discussion","Models, dummies, Prototypes or practical sessions","Pictures, charts, graphs"]},
    5:{text:"I want feedback from my manager on the process I completed. I would prefer my manager to ?",options:["E-mail the feedback","Talk me through the feedback","Use real time examples from what I have done","Use diagrams/visuals to tell me where I went wrong"]},
    6:{text:"I want to learn to play tennis. I would ?",options:["Read about it online","Ask someone to explain the game","Observe someone playing in the Ice Lounge","Watch a video on how to play"]},
    7:{text:"I want to learn how to take better photos. I would ?",options:["Use the written instructions about what to do","Ask questions and talk about the camera and its features","Use examples of good and poor photos showing how to improve them","Use diagrams showing the camera and what each part does"]},
}

const manager_questions={
    1:{text:"As a manager, you care most about ?",options:["Making fast decisions ","Creating a high – energy, face paced environment ","Making sure everyone is happy ","Quality and Accuracy – getting things right the first time and every time "]},
    2:{text:"As a manager, you make decisions ?",options:["Quickly so they can move into action quickly ","After knowing all the context","By consensus ","By taking bigger picture into account "]},
    3:{text:"While giving feedback, I prefer ?",options:["Being direct ","Avoiding giving critical feedback ","Giving detail feedback ","Giving Action- Based feedback "]},
    4:{text:"I prefer that my Direct Reports ?",options:["Are focused on accomplishing results and making things happen, handouts, and books","Are comfortable operating in a fast-paced, high energy and creative environment ","Are committed to producing high quality, accurate work at all times The evaluator boss ","Are team player who is supportive, respectful and considerate of others "]},
    5:{text:"As a manager, you prefer ?",options:["Going slow and steady ","Building warm relationships","Achieving results quickly ","About team building efforts "]},
    }

    const your_manager_questions={
        1:{text:"As a manager, he/she care most about ?",options:["Making fast decisions ","Creating a high – energy, face paced environment ","Making sure everyone is happy ","Quality and Accuracy – getting things right the first time and every time "]},
        2:{text:"As a manager, he/she make decisions ?",options:["Quickly so they can move into action quickly ","After knowing all the context","By consensus ","By taking bigger picture into account "]},
        3:{text:"While giving feedback, your manager prefer ?",options:["Being direct ","Avoiding giving critical feedback ","Giving detail feedback ","Giving Action- Based feedback "]},
        4:{text:"Your prefer that his/her Direct Reports ?",options:["Are focused on accomplishing results and making things happen, handouts, and books","Are comfortable operating in a fast-paced, high energy and creative environment ","Are committed to producing high quality, accurate work at all times The evaluator boss ","Are team player who is supportive, respectful and considerate of others "]},
        5:{text:"As a manager, your manager prefer ?",options:["Going slow and steady ","Building warm relationships","Achieving results quickly ","About team building efforts "]},
        }


const employee_output={1:{out:"Reading/ Writing","weak":`Create written descriptions of key ideas or statistical graphs to help you to remember. Ask for further reading on the topic. a read-write learner can volunteer to take notes or read out the instructions for group members. Using simple methods such as note-taking, list-making and documenting the exchange of information helps a read-write learner to process ideas more deeply on his or her own before responding to members of the group.`,
                         exp:`READ/WRITE LEARNER: You learn best when reading texts and taking notes. Such learners thrive on receiving as much information on a subject or topic as they can. Definitions, explanations, interpretations, handouts — the more, the merrier. Read-Write learners process information by writing it down and by reading it. Textual analysis aids this learner’s ability to understand, retain and eventually, to apply the information.`},2:{out:"Auditory",'weak':`Auditory learners typically understand directions best when they are spoken, Participate in group discussions - Regularly scheduling in-person meetings and discussions with your team or managers is a good strategy, Read aloud, Talk through problems`,exp:`AURAL/AUDITORY LEARNER: Auditory learning is a style of learning in which an individual learns most efficiently through hearing and listening. Auditory learners retain information better when it is delivered through sound or speech rather than written form. You learn best when listening to instruction and discussing topics.`},3:{out:"Kinaesthetic",weak:`Work standing up -  If you’re a kinesthetic learner, standing while working can translate to better comprehension, focus and retention, Use a highlighter and flashcards, Approach topics creatively - Drawing out a diagram on a piece of paper or a whiteboard can aid your memory and understanding, Use tension and relaxation`,exp:`You learn best when you get to try things out and put theory into practise. The critical point to note in kinesthetic learning is that stimulation is crucial to the process. Kinesthetic learners engage better when their body is alert and moving. They manage input better and can process faster once their body is busy doing something besides focusing specifically on the material.`},4:{out:"Visual",weak:`Use color in their notes, Draw things they are visualizing, Create mind maps,
Utilize graphic organizers, Diagram information or create charts
Outline information contained in textbooks`,exp:`Visual Learner: You learn best when using graphical depictions such as maps, diagrams and body language. The visual learning style, often referred to as the spatial learning style, is a way of learning in which information is associated with images. This learning style requires that learners first see what they are expected to know. People with a visual learning style are often referred to as visual-spatial learners.`}}

const manager_output={1:"Advancer Bosses",2:"Energizer Bosses",3:"Evaluator Bosses",4:"Harmonizer Bosses"}

let questions=employee_questions;

let output=employee_output;

const response={}

let question_number=0;

const sendResponse=async(response)=>{
    try{

        let data={"emailid":email_id,"username":user_name,"persona":response}
        let res=await fetch(`/api/${user}`,{
            method:"post",
            mode:"cors",
            headers:{"content-type":"application/json"}
            ,body:JSON.stringify(data)
        })
        res=await res.json()
    }
    catch(e){
        console.log(e);
        return e;
    }
}

const handleBtn=()=>{

    options_tag.map((item)=>{
        if(item.children[0].checked){
            response[question_number]=item.children[0].value;
            item.children[0]["checked"]=false;
        }
    })
    if(response[question_number]===undefined && question_number!==0){
        alert("select option")
    }
    else if(question_number===Object.keys(questions).length){
        question_box.style.display="none";
        msg_div_tag.style.display="block";
        let frequency=[0,0,0,0]
        for(let i=1;i<=question_number;i++){
            frequency[parseInt(response[i])-1]+=1;
        }
        let max=0;
        let min=0;
        for(let i=1;i<4;i++){
            if(frequency[max]<frequency[i]){
                max=i;
            }
            if(frequency[min]>frequency[i]){
              min=i;
            }
        }
        let showOutput=[]
        let exp_output=[]
        for(let i=0;i<4;i++){
            if(frequency[max]==frequency[i]){
                if(output[i+1].out!==undefined)
                {showOutput.push(output[i+1].out);
                exp_output.push(output[i+1].exp);
                }
                else
                  showOutput.push(output[i+1])
            }
        }
        let res=showOutput.join(" , ");
        msg_text_tag.innerHTML=res;
        sendResponse(res)
      if(output[min+1].weak!==undefined)
        {explain_tag.innerHTML=`${exp_output.join(" <br/><br/> ")}`
        weakness.innerHTML=`Recommendation<br/> ${output[min+1].weak}`;}
    }
    else{
        question_number+=1;
        let currentQuestion=questions[question_number];
        question_tag.innerHTML=currentQuestion.text
        question_no_tag.innerHTML=question_number;
        let currentOptions=currentQuestion.options;
        for(let i=0;i<4;i++){
            options_text_tag[i].innerHTML=currentOptions[i];
        }
        if(question_number===Object.keys(questions).length){
            btn_tag.innerHTML="Submit";
        }
    }
}


options_tag.map((item)=>{
    item.addEventListener("click",()=>{
        item.children[0].click();
    })
})

btn_tag.addEventListener("click",handleBtn)

employee_persona.addEventListener("click",()=>{
    questions=employee_questions;
    output=employee_output;
    user="employee"
    question_number=0;
    learning_persona.map((item)=>{
        item.innerHTML="Learning Persona"
    })
    btn_tag.click();
})

manager_persona.addEventListener("click",()=>{
    questions=manager_questions;
    output=manager_output;
    user="manager";
    question_number=0;
    learning_persona.map((item)=>{
        item.innerHTML="Manager Persona"
    })
    btn_tag.click()
})

yourmanager_persona.addEventListener("click",()=>{
    questions=  your_manager_questions ;
    output=manager_output;
    user="yourmanager";
    question_number=0;
    learning_persona.map((item)=>{
        item.innerHTML="Your Manager Persona"
    })
    btn_tag.click()
})

employee_persona.click();