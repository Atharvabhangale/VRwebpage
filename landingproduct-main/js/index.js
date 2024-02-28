var data= {
    chatinit:{
        title: ["Welcome to ImmersiTech VR! I'm here to assist you. How can I help you today?"],
        options: ["Explore VR Experiences","Discover Upcoming Events","Get Headset Recommendations","Learn About EducationalContent"]
    },
    explorevrexperiences: {
        title:["Please select category"],
        options:['Gaming Experiences','Educational Simulations','Virtual Tours','Immersive Storytelling'],
        url : {
            
        }
    },
    
    discoverupcomingevents: {
        title:["Virtual Reality Conference: Future Frontiers"],
        options:["Join us for an immersive journey into the future of virtual reality at the Virtual Reality Conference: Future Frontiers, hosted by ImmersiTech. This groundbreaking event brings together VR enthusiasts, industry experts, and thought leaders for an exploration of the latest trends, innovations, and possibilities in the world of VR technology."],
        url : {
            more:"https://www.youtube.com",
            link:["https://www.youtube.com","https://www.youtube.com","https://www.youtube.com","https://www.youtube.com"]
        }
    },
    getheadsetrecommendations: {
        title:["Unveiling Your Path to Virtual Reality: Explore Our Range of Packages and Find the Perfect Fit for Your Needs and Budget"],
        options:['Basic','Advance','Premium'],
        url : {
            
        }
    },
    learnabouteducationalcontent: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['History Exploration','Science Adventures','Geography Expeditions','Art and Culture Immersion'],
        url : {
            more:"https://www.youtube.com",
            link:["#","#","#","#","#"]
        }
    },
    basic: {
        title:["Thanks for your response","Here is more information about basic verison","Click on it to know more"],
        options:['Display','Camera','Processor','Comfort'],
        url : {
            more:"https://www.youtube.com",
            link:["#","#","#","#"]
        }
    },
    advance: {
        title:["Thanks for your response","Here is more information about Advance verison","Click on it to know more"],
        options:['Display','Camera','Processor','Comfort'],
        url : {
            more:"https://www.youtube.com",
            link:["#","#","#","#"]
        }
    },
    premium: {
        title:["Thanks for your response","Here is more information about Premium verison","Click on it to know more"],
        options:['Display','Camera','Processor','Comfort'],
        url : {
            more:"https://www.youtube.com",
            link:["#","#","#","#"]
        }
    },
    historyexploration: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.youtube.com",
            link:["#","#","#","#"]
        }
    },
    scienceadventures: {
        title:["These are some of latest discoveries and adventures in Science"],
        options: ["Meta Quest","Sora AI","Apple Vision Pro","Immersitech VR","Chatgpt 4"],
        url : {
            more:"https://www.youtube.com",
            link:["https://www.youtube.com","https://www.youtube.com","https://www.youtube.com","https://www.youtube.com"]
        }
    },
    gamingexperiences: {
        title: ["Thanks for your response","Here are Virtual Gaming Experiences"],
        options: ["Palworld","Witcher 3","Star Citizen","Call of Duty","Gta 5"],
        url: {
            more:"https://www.youtube.com",
            link:["#","#","#","#","#"]
        }
    },
    educationalsimulations: {
        title: ["Thanks for your response","Here are V"],
        options: ["Mechanical","Comp Bio","Agriculture","Biotechnology","Sustainable Development"],
        url: {
            more:"https://www.youtube.com",
            link:["#","#","#","#","#"]
        }
    },
    virtualtours: {
        title: ["Thanks for your response","Here are some of our handpicked Virtual tours"],
        options: ["Bali","Tokyo","Switzerland","Maldives","Kashmir"],
        url: {
            more:"https://www.youtube.com",
            link:["#","#","#","#","#"]
        }
    },
    immersivestorytelling: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.youtube.com/",
            link:["#","#","#","#","#"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function remove_spaces(str) {
    let new_str = ""
    for(let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            new_str += str[i].toLowerCase()
        }
    }

    return new_str
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var findText= this.innerText;
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    var tempObj= data[remove_spaces(findText)];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}