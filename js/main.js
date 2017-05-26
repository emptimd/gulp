let c=document.getElementById("canvas");
let ctx=c.getContext("2d");

// @TODO create function for circles(with borders). Send data to draw(), draw2() including direction.

// setTimeout(draw1, 1000);

// function draw1() {
//   for (let i = 0; i < 3; i++) {
//     ctx.beginPath();
//     if(i == 0) {
//       ctx.lineWidth = 2;
//       ctx.strokeStyle = '#fff';
//       // ctx.setLineDash([1.5, 1.5]);
//       // ctx.lineCap = 'round';
//       ctx.moveTo(150,0);
//       ctx.lineTo(150,50);
//       ctx.lineTo(100,50);
//       ctx.lineTo(100,55);
//       ctx.stroke();
    // }else if(i==1) {
    //   ctx.fillStyle = 'lightblue';
    //   ctx.strokeStyle = '#fff';
    //   ctx.arc(100, 57, 2, 0, 2 * Math.PI);
    //   ctx.fill();
    // }else if(i == 2) {
    //   ctx.lineWidth = 1;
    //   // ctx.moveTo(100,57);
    //   ctx.arc(100, 57, 3, 0, 2 * Math.PI);
    //   ctx.stroke();
    // }
//   }
// }

let linesDrawed=0,
	linesDrawedPos=[];

function drawCircle(startX, startY) {
	linesDrawedPos.push([startX, startY]);
	if(++linesDrawed < 3) return;
	for (let i = 0; i < 3; i++) {
		ctx.beginPath();
		ctx.fillStyle = 'lightblue';
		ctx.strokeStyle = '#fff';
		ctx.arc(linesDrawedPos[i][0], linesDrawedPos[i][1]+3, 2, 0, 2 * Math.PI);
		ctx.fill();

		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.arc(linesDrawedPos[i][0], linesDrawedPos[i][1]+3, 3, 0, 2 * Math.PI);
		ctx.stroke();
	}
}

let i1=0;
// let intervals=[];
function draw2(startX, startY, move1X, move1Y ,move2X, move2Y, move3X, move3Y) {
	  // let m2xr = move2X/10*i1;
	  // console.log(m1yr);
	  ctx.beginPath();
	  ctx.moveTo(startX,startY);
	  ctx.lineWidth = 2;
	  ctx.strokeStyle = '#fff';
	  // ctx.setLineDash([1.5, 1.5]);
	  // ctx.lineCap = 'round';
	  
	  let interval1 = setInterval(function() { // first interval we draw a line from top to bottom.
		let to = move1Y/10*i1;

		ctx.beginPath();
		ctx.moveTo(startX,startY);
		ctx.lineTo(move1X,to);
		ctx.stroke();
		if(i1++ >= 10) { // draw has end, now if we have direction draw a line to that direction.
		  clearInterval(interval1); i1=1;
		  if(typeof move2X === "undefined") return drawCircle(move1X, to);
		  let interval2 = setInterval(function() {
				  let dir = move1X-((move1X-move2X)/10)*i1; 

				  // console.log(dir);
				  ctx.beginPath();
				  ctx.moveTo(move1X,to);
				  // ctx.lineTo(100,50);
				  ctx.lineTo(dir,move2Y);
				  ctx.stroke();
				  if(i1++ >= 10) { // 3
					clearInterval(interval2); i1=1;
					let interval3 = setInterval(function() {
					  ctx.beginPath();
					  ctx.moveTo(dir,move2Y);

					  ctx.lineTo(move3X, move2Y + i1);
					  ctx.stroke();
					  if(i1++ >= 5) {
					  	clearInterval(interval3);
					  	drawCircle(move3X, move2Y + i1);
					  }
					}, 20);
				  }
			}, 20);
		};
	  }, 20);

	  // setTimeout(function(){
	  //   console.log(67444);
	  // }, 200)

	  // let you2 = setInterval(function() {
	  //   // ctx.beginPath();
	  //   // ctx.moveTo(150,0);
	  //   console.log(move2Y);
	  //   let m2yr = move2Y/10*i1;
	  //   console.log(m2yr);
	  //   ctx.lineTo(move2X,m2yr);
	  //   ctx.stroke();
	  //   if(i1++ === 10) clearInterval(you2);
	  // }, 20);

	  // let you3 = setInterval(function() {
	  //   ctx.beginPath();
	  //   ctx.moveTo(150,0);
	  //   let m1yr = move1Y/10*i1;
	  //   console.log(m1yr);
	  //   ctx.lineTo(move1X,m1yr);
	  //   ctx.stroke();
	  //   if(i1++ === 10) clearInterval(you3);
	  // }, 20);
	  // ctx.lineTo(m2xr,50);
	  // ctx.lineTo(move3X,55);
	  

  // if(i1++ === 10) clearInterval(you);
}

// let you = setInterval(draw2, 20);
draw2(150, 0 , 150, 50, 100, 50, 100, 55);

draw2(250, 0 , 250, 50, 300, 50, 300, 55);

draw2(50, 0 , 50, 50);


