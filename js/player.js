class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.Score1=0;
        this.Score2=0;
        //this.SCORE = 0;

    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    Player1Sc(){
        var player1SCORERef = database.ref("Score1");
        player1SCORERef.set({
            Score1:this.Score1,
        })
         
    }

    Player2Sc(){
       var player2SCORERef = database.ref("Score2");
       player2SCORERef.set({
        Score2:this.Score2,
    })



    
}



}
