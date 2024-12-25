//your JS code here. If required.
let item = document.getElementById('level');

let count =0;
let parent = item.parentElement;
const levelFinder=(parent)=>{
	while(parent){
		count++;
		parent = parent.parentElement;
	}
	return count;
}

alert(levelFinder(parent));