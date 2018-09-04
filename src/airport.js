function Airport() {
  this.capacity = CAPACITY; 
  this.planes = []
};

var planes
var CAPACITY = 20 

Airport.prototype.land = function(plane) {
  if(this.isStormy()) {
    throw('Too stormy!')
  } else {
    this.planes.push(plane)
  }
};

Airport.prototype.takeOff = function(plane) {
  if(this.isStormy()) {
    throw('Too stormy!')
  } else {
  this.planes.splice(this.planes.indexOf(plane), 1)
  }
};

Airport.prototype.isStormy = function() {
  if (Math.random(1) < 0.5) { 
    return true
  } else return false
};




// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };