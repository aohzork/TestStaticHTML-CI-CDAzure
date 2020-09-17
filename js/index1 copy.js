
let teamsLength = 30;
let teams = new Array();    //holding class-instances of teams from api
let heroes = new Array();   //holding class-instances of heroes from api

/*$(function(){
    $('.click-expand').click(function()
    {
        
        //let expands = $(".team-expand");
        //console.log(expands);
        alert('index: '+ $(".team-expand").index('.team-expand'));          //$(this).index('.team-expand'));
    });
});*/



/* Get all the items with Duplicate id
var $itemsThatHasIdDuplicate = $('[id]').filter(function () {
    return $('[id="' + this.id + '"]').length > 1;
});

 Modify the id for all of them
$itemsThatHasIdDuplicate.attr('id', function (i, val) {
    return 'newID' + (i + 1);
});*/


/*function expandOnClick() {
    let x = document.getElementById("team-expand-item");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}*/

/*function expando(){
    for(let i = 0; i < teamExpands.length; i++)
}*/


$(document).ready(function(){

   
    
    /*let urls = ["https://api.opendota.com/api/teams",
                "https://api.opendota.com/api/heroStats"];
    let requests = new Array(urls.length);

    //extract api-data into class objects, put in array
    for(let i = 0; i < urls.length; i++){
        fetch(urls[i]).then((resp) => resp.json()).then(function(data){
            console.log(data);
            //console.log(data[500]);
            switch(i){
                case 0:
                    for(let y = 0; y < teamsLength; y++){
                        teams[y] = new Team(data[y].team_id, data[y].rating, data[y].wins, data[y].losses, data[y].name, data[y].logo);                         
                    }

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

    console.log(teams);
    console.log(heroes);*/

});

function displayTeams(){



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