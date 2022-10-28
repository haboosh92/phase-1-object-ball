function gameObject() {
    return {
        "Home team": {
           "team name"  : "Brooklyn Nets",
           "colors"     : ["Black", "White"],
           "players"    : { 
                1 :{
                    PlayerName      : "Alan Anderson",
                    Number          : "0",
                    Shoe            : "16",
                    Points          : "22",
                    Rebounds        : "12",
                    Assits          : "12",
                    Steals          : "3",
                    Blocks          : "1",
                    SlamDunks       : "1",
                },
                2 :{
                    PlayerName      : "Reggie Evans",
                    Number          : "30",
                    Shoe            : "14",
                    Points          : "12",
                    Rebounds        : "12",
                    Assits          : "12",
                    Steals          : "12",
                    Blocks          : "12",
                    SlamDunks       : "7",
                    },
                3 :{
                    PlayerName      : "Brook Lopez",
                    Number          : "11",
                    Shoe            : "17",
                    Points          : "17",
                    Rebounds        : "19",
                    Assits          : "10",
                    Steals          : "3",
                    Blocks          : "1",
                    SlamDunks       : "15",
                },
                4 :{
                    PlayerName      : "Mason Plumlee",
                    Number          : "1",
                    Shoe            : "19",
                    Points          : "26",
                    Rebounds        : "12",
                    Assits          : "6",
                    Steals          : "3",
                    Blocks          : "8",
                    SlamDunks       : "5",
                },
                5 :{
                    PlayerName      : "Jason Terry",
                    Number          : "31",
                    Shoe            : "15",
                    Points          : "19",
                    Rebounds        : "2",
                    Assits          : "2",
                    Steals          : "4",
                    Blocks          : "11",
                    SlamDunks       : "1",
                } } },
        "Away team" : {
           "team name"  : "Charlotte Hornets",
           "colors"     : ["Turquoise", "Purple"],
           "players"    : {
                1 :{
                    PlayerName      : "Jeff Adrien",
                    Number          : "4",
                    Shoe            : "18",
                    Points          : "10",
                    Rebounds        : "1",
                    Assits          : "1",
                    Steals          : "2",
                    Blocks          : "7",
                    SlamDunks       : "2",
                },
                2 :{
                    PlayerName      : "Bismak Biyombo",
                    Number          : "0",
                    Shoe            : "16",
                    Points          : "12",
                    Rebounds        : "4",
                    Assits          : "7",
                    Steals          : "7",
                    Blocks          : "15",
                    SlamDunks       : "10",
                },
                3 :{
                    PlayerName      : "DeSagna Diop",
                    Number          : "2",
                    Shoe            : "14",
                    Points          : "24",
                    Rebounds        : "12",
                    Assits          : "12",
                    Steals          : "4",
                    Blocks          : "5",
                    SlamDunks       : "5",
                },
                4 :{
                    PlayerName      : "Ben Gordon",
                    Number          : "8",
                    Shoe            : "15",
                    Points          : "33",
                    Rebounds        : "3",
                    Assits          : "2",
                    Steals          : "1",
                    Blocks          : "1",
                    SlamDunks       : "0",
                },
                5 :{
                    PlayerName      : "Brendan Haywood",
                    Number          : "33",
                    Shoe            : "15",
                    Points          : "6",
                    Rebounds        : "12",
                    Assits          : "12",
                    Steals          : "22",
                    Blocks          : "5",
                    SlamDunks       : "12",
                } } }

    };
    
};
console.log(gameObject());

function homeTeamName() {
    let obj = gameObject();
    return obj["Home team"]["players"][5].PlayerName
}
console.log(homeTeamName());

function homeTeamName2(){
    return gameObject()["Away team"].colors
}
console.log(homeTeamName2());

