var Info = function(name){
	this.name = name;
	Info.instances.push(this);
};
Info.instances = [];

	Info.prototype = {
		constructor: Info,

		index: -1,//the specific object index, different for each object
		numberOfInstances: function(){//returns the amount of existing Info objects
			var i = Info.instances.length;
			this.index += 1;
			return i;
		},
		whoami : function(){//returns the name of the specific Info object
			return this.name;
		},
		whoamireally: function(){//returns itself as an object
			return Info.instances[this.index];
		},
		anagramName: function(){//returns the given name as an anagram, --this.name does not change
			var anagram = [];
			var nameAnagram = [];
			var length = this.name.length;
			var random;

			for(var key in this.name){
				random = Math.floor(Math.random()*length);
				
				while( nameAnagram.indexOf(this.name[random]) !== -1 ){
					random = Math.floor(Math.random()*length);
				}
				nameAnagram.push(this.name[random]);
				anagram.push(random);
			}
			console.log(nameAnagram);
			return nameAnagram;
		}
	}

var info1 = new Info("Charles");
console.log(info1.numberOfInstances());

var info2 = new Info("Alfred");
console.log(info2.numberOfInstances(), info1.numberOfInstances());
console.log(info2.index, info1.index);
console.log(info2.whoami(), info1.whoami());
console.log(info2.whoamireally(), info1.whoamireally());
info2.anagramName(), info1.anagramName();


console.log(info2.constructor === Info);
	