var stateEnum = {
    "START" : 0,
    "SELECTCARD" : 1,
    "SELECTWINNER" : 2,
    "SHOWWINNER": 3
};

var userTypeEnum = {
	"PLAYER":0,
	"HOST":1
};

var gameState = {
	passkey: "",
	playerID: "",
	state: "START",
	userType: "HOST",
	whiteCard:[],
	blackCard: null,
	
	getPasskey: function(){
		return this.passkey;
	},

	getPlayerID: function(){
		return this.getPlayerID;
	},

	getState: function(){
		return this.state;
	},

	getUserType: function(){
		return this.userType;
	},

	getWhiteCard: function(){
		return this.whiteCard;
	},

	getBlackCard: function(){
		return this.blackCard;
	},

	setPasskey: function(passkey){
		this.passkey = passkey;
	},

	setPlayerID: function(ID){
		this.playerID = ID;
	},

	setState: function(state){
		this.state = state;
	},

	setUserType: function(type){
		this.userType = type;
	},

	setWhiteCard: function(cards){
		this.whiteCard = cards;
	},

	setBlackCard: function(card){
		this.blackCard = card;
	}

};