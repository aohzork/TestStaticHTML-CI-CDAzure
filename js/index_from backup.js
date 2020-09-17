
let teamsLength = 30;
let heroes = new Array(teamsLength);   //holding class-instances of heroes from api
let teams = [];
//console.log(teamss);
for(let i =0; i < teamsLength; i++)
    teams.push(new Team(3,1,1,1,"hello","hello"));



let users = [
    {
      id:1,
      name:"king"
    },
    {
      id:2,
      name:"john"
    },
   {
     id:3,
     name:"gowtham"
   }
 
 ]
 /*console.log(users);
 
 for(let user of users){
   console.log(user.id,user.name)
 }*/
 /*for(let i = 0; i < 2; i++){
     teams.push(new Team());
 }*/

$(document).ready(function(){

    /*$('.click-expand').click(function(){
        let clickedBtn = $('.click-expand').index($(this));
        console.log(clickedBtn);

        let expandTeamHTML = $('.team-expand');
        if(expandTeamHTML[clickedBtn].style.display=== "none") {
            expandTeamHTML[clickedBtn].style.display = "flex";
        } 
        else {
            expandTeamHTML[clickedBtn].style.display = "none";
        }
    
    });*/

    let teamItem;
    
    let urls = ["https://api.opendota.com/api/teams"]
               // ,"https://api.opendota.com/api/heroStats"];
    let requests = new Array(urls.length);

    //extract api-data into class objects, put in array
    for(let i = 0; i < urls.length; i++){
        fetch(urls[i]).then((resp) => resp.json()).then(function(data){
            console.log(data);
            //console.log(data[500]);
            switch(i){
                case 0:
                    for(let y = 0; y < 1; y++){
                        teams[y].teamId = data[y].team_id;
                        /*teams[y].rating = data[y].rating;
                        teams[y].wins = data[y].rating;
                        teams[y].losses = data[y].losses;
                        teams[y].name = data[y].name;
                        teams[y].logo = data[y].logo_url;  */                                            
                    }
                   // console.log("hello");
                    //console.log(teamss[0].teamId);
                    //console.log(teamss);
                    showAllTeams();
                    //console.log(teams);
                    break;
                case 1:
                    for(let y = 0; y < data.length; y++){
                        heroes[y] = new Hero(data[y].id, data[y].localized_name, data[y].primary_attr, data[y].attack_type, data[y].roles, data[y].img);
                    }
                        
                       
                    break;
            };

            //console.log(teams);
        })
        .catch(function(error){
            console.log("cannot fetch data from " + urls[i]);
        });

        //console.log(teams);
    }
    
    
    //console.log(teamss[0]["teamId"]);
    //for(let i = 0; i < teamss.length; i++)
      //  console.log(teamss[0].teamId);
    //showAllTeams();
    /*teams.forEach(element => {
        console.log(element[0].name);
    });*/

    //console.log(typeof(teamItem));
    //console.log(teams);
    //console.log(heroes);

    //console.log(teamss[0]);

});

console.log("outside document");
    console.log(teams[0].teamId);

function showAllTeams(){
    console.log("inShowAllTeams");
    console.log(teams[0].teamId);
    console.log(teams);
    
    //console.log(teams);
    let teamsHTML = new Array(teamsLength);
    //console.log(teamsHTML);

    let teamHTML = `<div class="team">
    <div class="team-container">           
        <div class="team-content">
            <div class="flex-item">
                <img src="img\\dotabg.jpg" class="team-logo" alt="">
                <div>
                    <span>team</span><br>
                    <button class="click-expand">click me</button>
                </div>
            </div>                
        </div>
        
        <div class="team-content">11245
            <div class="team-meter-outer">
                <div class="team-meter-inner meter-color1"></div>
            </div>
        </div>
        <div class="team-content">500
            <div class="team-meter-outer">
                <div class="team-meter-inner meter-color2"></div>
            </div>
        </div>
        <div class="team-content">300
            <div class="team-meter-outer">
                <div class="team-meter-inner meter-color2"></div>
            </div>
        </div>               
    </div>

    <!--expand html-->
    <div class="team-expand">
        <div class="expand-item">
            <div class="expand-header-container">
                <div class="expand-header-content">most played heroes</div>
                <div class="expand-header-content">wins</div>
                <div class="expand-header-content">losses</div>                                        
            </div>
            <div class="expand-container">
                <div class="expand-content">    
                    <div class="flex-item">
                        <img src="img\\dotabg.jpg" class="team-logo" alt="">
                        <div>
                            <span>team</span><br>
                        </div>
                    </div>      
                </div>
                <div class="expand-content">1
                    <div class="team-meter-outer">
                        <div class="team-meter-inner meter-color2"></div>
                    </div>
                </div>
                <div class="expand-content">2
                    <div class="team-meter-outer">
                        <div class="team-meter-inner meter-color2"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="expand-item">
            <div class="expand-header-container">
                <div class="expand-header-content">Played Leagues games</div>
                <div class="expand-header-content">wins</div>
                <div class="expand-header-content">losses</div>                                        
            </div>
        
            <!--
            <div class="team-content">3
                <div class="team-meter-outer">
                    <div class="team-meter-inner meter-color2"></div>
                </div>
            </div>
            <div class="team-content">4
                <div class="team-meter-outer">
                    <div class="team-meter-inner meter-color2"></div>
                </div>
            </div>-->
        </div>
    </div>

</div> <!--end team & expand-->`;
    
    let placeContent = document.getElementById('content');
    console.log(placeContent);      

    for(let i = 0; i < 1; i++){
        teamsHTML[i] = teamHTML;
        placeContent.innerHTML += teamsHTML[i];
    }

    let idd = team[0].team_id;
    console.log("idd");
    console.log(idd);
    //let setTeamiD = placeContent.getElementsByClassName('team');
    let teamID = $('div.team').attr('id', '');
    console.log(teamID);      
    //setTeamiD = 

    //console.log(typeof teams);
    /*for(let x of teams) {

        console.log(x.rating);
    }*/
    //console.log(teams);
    //console.log(heroes[0]);

    for(let i = 0; i < 3; i++){
        //teamsHTML[i] = teamsHTML[i].getElementsByClassName('.team').setAttribute('id', '${teams.id}');
        
        //= $(".team").attr('id', '${teams.id}');
      //  console.log(teamsHTML[i]);
     // console.log(teams[0]);
    }

    //teams.forEach(element => console.log("hello" + element));

    //console.log(teamsHTML);

    $('.click-expand').click(function(){
        let clickedBtn = $('.click-expand').index($(this));
        console.log(clickedBtn);

        let expandTeamHTML = $('.team-expand');
        if(expandTeamHTML[clickedBtn].style.display=== "none") {
            expandTeamHTML[clickedBtn].style.display = "flex";
        } 
        else {
            expandTeamHTML[clickedBtn].style.display = "none";
        }
    
    });

}