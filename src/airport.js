function Airport() {  
};

Airport.prototype.land = function(plane) {
  this.hangar << (plane);
  return "Plane landed"
};


Airport.prototype.hangar = function(capacity) {
  this.hangar = []
};


function Player() {
}
Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};