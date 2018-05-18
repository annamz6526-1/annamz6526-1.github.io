localStorage.setItem('name1','lala');
localStorage.setItem('name2','gougou');
localStorage.setItem('score1',100);
localStorage.setItem('score2',95);

document.getElementById("rank1").innerHTML = localStorage.getItem('name1');
document.getElementById("rank2").innerHTML = localStorage.getItem('name2');
document.getElementById("rank3").innerHTML = localStorage.getItem('name3');
document.getElementById("rank4").innerHTML = localStorage.getItem('name4');
document.getElementById("rank5").innerHTML = localStorage.getItem('name5');
document.getElementById("score1").innerHTML = localStorage.getItem('score1');
document.getElementById("score2").innerHTML = localStorage.getItem('score2');
document.getElementById("score3").innerHTML = localStorage.getItem('score3');
document.getElementById("score4").innerHTML = localStorage.getItem('score4');
document.getElementById("score5").innerHTML = localStorage.getItem('score5');

var addRank = function(rank, name, score) {
	localStorage.setItem(rank,(name,score));
}

var replaceRank = function(rank, newname, newscore) {
	localStorage.setItem(rank,(newname,newscore));
}


