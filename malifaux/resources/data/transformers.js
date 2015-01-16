var transformersData = [{
			"id": "trn-DismountedMacabe",
			"name": "Dismounted Macabe Sort Order",
			"types": ["tyTr-getSortName"], //getSortName
			"linkIds": ["md-DismountedMcCabe-323"], //only for McCabe
			"function": (function(value, data){
				//forces the card to sort next to the master
				value[0] = "Lucas McCabe";
				value[1] = (('000'+(this.typeWeight+2)).substr(-3));
				return value; 
			}).toString()
	},{
			"id": "trn-RestrictModelSortName",
			"name": "Sortes by restricted model name",
			"types": ["tyTr-getSortName"], //getSortName
			"linkIds": ["tyCh-ModelRestrictionChar"], //for avatar cards
			"function": (function(value, data){

			if (data.smartSort) //only if smart sort is enabled
				switch(data.sortBy)
				{
					case '':
					case 'tyCh-StationChar': //sort by station charistic
						//replaces the card name with the master name to sort nearby
						var modelNames = require('malifaux/store/transformerHelpers').getChrRstrictionModelNames(this);
						if (modelNames.length > 0 && data.sortList)
							for (var cdIdx=0; cdIdx<data.sortList.length; cdIdx++)
							{
								if (modelNames.indexOf(data.sortList[cdIdx].name) > -1)
								{
									value[0] = data.sortList[cdIdx].name;
									if (value[2] != this.name)
										value.splice(2,0,this.name);
									break;
								}
							}
						break;
				}
				return value;
			}).toString()
	},{
			"id": "trn-CardSortCost",
			"name": "Update Sort Name With Cost",
			"types": ["tyTr-getSortName"], //getSortName
			"linkIds": ["ty-ModelCard","ty-UpgradeCard","ty-AvatarCard"], // for model cards, avatar cards, and upgrade cards
			"function": (function(value, data){
				//adds the cost to the sort string
				value.push(('000'+(100-this.data.cost)).substr(-3));
				return value;
			}).toString()
	},
	
	
	
		{
			"id": "trn-UpCardAddMasterChar",
			"name": "Ad station charistics to upgrade cards",
			"types": ["tyTr-getSortKeys"], //getSortName
			"linkIds": ["chRestriction-MasterorHenchman","chRestriction-Leader","chRestriction-Avatar"],
			"function": (function(value, data){
				//adds the cost to the sort string
				if (data.smartSort) //only if smart sort is enabled
					switch(data.sortBy)
					{
						case 'tyCh-StationChar': //by charistic
							value.push('ch-001-Master');
							break;
					}
				return value;
			}).toString()
	},{
			"id": "trn-UpCardAddHenchmanChar",
			"name": "Ad station charistics to upgrade cards",
			"types": ["tyTr-getSortKeys"], //getSortName
			"linkIds": ["chRestriction-MasterorHenchman","chRestriction-Leader","chRestriction-HenchmanorEnforcer"],
			"function": (function(value, data){
				//adds the cost to the sort string
				if (data.smartSort) //only if smart sort is enabled
					switch(data.sortBy)
					{
						case 'tyCh-StationChar': //by charistic
							value.push('ch-010-Henchman');
							break;
					}
				return value;
			}).toString()
	},{
			"id": "trn-UpCardAddEnforcerChar",
			"name": "Ad station charistics to upgrade cards",
			"types": ["tyTr-getSortKeys"], //getSortName
			"linkIds": ["chRestriction-HenchmanorEnforcer","chRestriction-Enforcer"],
			"function": (function(value, data){
				//adds the cost to the sort string
				if (data.smartSort) //only if smart sort is enabled
				switch(data.sortBy)
				{
					case 'tyCh-StationChar': //by charistic
						value.push('ch-020-Enforcer');
						break;
				}
				return value;
			}).toString()
	},{
			"id": "trn-ModelRestrictAddCharistic",
			"name": "Groups by restricted model charistic",
			"types": ["tyTr-getSortKeys"], //getSortName
			"linkIds": ["tyCh-ModelRestrictionChar"], //for avatar cards
			"function": (function(value, data){
				if (data.smartSort) //only if smart sort is enabled
				switch(data.sortBy)
				{
					case 'tyCh-StationChar': //sort by station charistic
						
						var modelNames = require('malifaux/store/transformerHelpers').getChrRstrictionModelNames(this);

						if (modelNames.length > 0 && data.sortList)
							for (var cdIdx=0; cdIdx<data.sortList.length; cdIdx++)
								if (modelNames.indexOf(data.sortList[cdIdx].name) > -1)
								{
									var matchCard = data.sortList[cdIdx];
									for (var chrIdx=0; chrIdx<matchCard.characteristics.length; chrIdx++)
										if (matchCard.characteristics[chrIdx].type == 'tyCh-StationChar')
											value.push(matchCard.characteristics[chrIdx].id);
									break;
								}
						if (modelNames.indexOf('Master') > -1)
							value.push('ch-001-Master');
						if (modelNames.indexOf('Henchman') > -1)
							value.push('ch-010-Henchman');
						if (modelNames.indexOf('Enforcer') > -1)
							value.push('ch-020-Enforcer');
								
						break;
				}
				return value;
			}).toString()
	},{

			"id": "trn-RareUpgrade1",
			"name": "Ad rare charistic to upgrade cards for sorting",
			"types": ["tyTr-getSortKeys"], //getSortName
			"linkIds": ["chRestriction-Rare1"],
			"function": (function(value, data){
				//adds the cost to the sort string
				switch(data.sortBy)
				{
					case 'tyCh-HiringChar': //by charistic
						value.push('ch-Rare1');
						break;
				}
				return value;
			}).toString()
	},{
			"id": "trn-RareUpgrade2",
			"name": "Ad rare charistic to upgrade cards for sorting",
			"types": ["tyTr-getSortKeys"], //getSortName
			"linkIds": ["chRestriction-Rare2"],
			"function": (function(value, data){
				//adds the cost to the sort string
				switch(data.sortBy)
				{
					case 'tyCh-HiringChar': //by charistic
						value.push('ch-Rare2');
						break;
				}
				return value;
			}).toString()
	},{
			"id": "trn-RareUpgrade3",
			"name": "Ad rare charistic to upgrade cards for sorting",
			"types": ["tyTr-getSortKeys"], //getSortName
			"linkIds": ["chRestriction-Rare3"],
			"function": (function(value, data){
				//adds the cost to the sort string
				switch(data.sortBy)
				{
					case 'tyCh-HiringChar': //by charistic
						value.push('ch-Rare3');
						break;
				}
				return value;
			}).toString()
	}];