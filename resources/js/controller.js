//helper for GameCtrl


/*
 *---------------------------------------------------------------------------------------------------
 * Controllers --------------------------------------------------------------------------------------
 *---------------------------------------------------------------------------------------------------
 */
//controller for /#/game
function GameCtrl($scope, $http){
	// if user is the host
	console.log(gameState.getUserType());
	if (userTypeEnum[gameState.getUserType()]){

		switch(stateEnum[gameState.getState()]){
			
			case stateEnum.START:{
				//call gameCreate
				break;
			}
			case stateEnum.SELECTCARD:{
				break;
			}
			case stateEnum.SELECTWINNER:{
				break;
			}
			case stateEnum.SHOWWINNER:{
				break;
			}
		}
	//player
	} else {
		switch(stateEnum[gameState.getState()]){
		
			case stateEnum.START:{

			}
			case stateEnum.SELECTCARD:{
			
			}
			case stateEnum.SELECTWINNER:{

				}
			case stateEnum.SHOWWINNER:{

			}

		}
	}
}

//controlling for creating a game
function HostGameCtrl($scope, $http){

	var reqURL = property.url +'/game/create';
	console.log(reqURL);

	$http.get(reqURL).
	success(function(data){
		gameState.setPasskey(data.passkey);
		$scope.game = data;
	}).
	error(function(data){
		alert('an error has occured, please try again.');
		window.location.replace('#');
	});
}

//controller for authienicating a passkey and joining a game
function PassKeyCtrl($scope, $http) {
		
	// http request to join game and redirect to #/game 
 	$scope.submit = function() {
		var reqURL = property.url + '/game/join/' + this.text;

		$http.get(reqURL).
    	success(function(data){    		
    		gameState.setPasskey(this.text);
    		gameState.setWhiteCard(data.whiteCards);
    		gameState.setBlackCard(data.blackCard);
    		gameState.setUserType("PLAYER");
   			window.location.replace('#/game');
   		}).
   		error(function(data){
   			alert('an error has occured, please try again.');    			
   			window.location.replace('#/joinGame');
    	});
  	};
}