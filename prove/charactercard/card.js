const level = parseInt(document.querySelector(".level").innerText);
const health = parseInt(document.querySelector(".health").innerText);
const levelButton = document.querySelector("#level-up");
const attackedButton = document.querySelector("#attacked");
const deathMessage = document.querySelector("#death-message")


const characterCard = {
    level   : level,
    health  : health,

    levelUp : function() {
        let newLevel = this.level + 1;
        this.level = newLevel;
        document.querySelector(".level").innerText = newLevel;
    },
    attacked: function () {
        if (this.health > 0) { 
            let damaged = this.health - 20;
            this.health = damaged;
            document.querySelector(".health").innerText = damaged
            if (this.health === 0) {
                deathMessage.innerText = "Enemy Slain";
            }
        }
    }
};

levelButton.addEventListener("click", () => {
    characterCard.levelUp()
});

attackedButton.addEventListener("click", () => {
    characterCard.attacked()
});