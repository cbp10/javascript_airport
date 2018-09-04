describe("Airport", function() {
  var a1;
  var p1;
  var p2;

  beforeEach(function() {
    a1 = new Airport();
    p1 = new Plane(); 
    p2 = new Plane()
  });

it("should be able to land a plane", function() {
  spyOn(a1, 'isStormy').and.returnValue(false)
  a1.land(p1)
  expect(a1.planes.includes(p1)).toBe(true);
});


it("should return the capacity of the airport", function() {
	expect(a1.capacity).toEqual(20);
});

it("should be able to tell a plane to take off", function() {
  // weather.isStormy.and.returnValue(false)
  spyOn(a1, 'isStormy').and.returnValue(false)
  a1.takeOff(p1)
  expect(a1.planes.includes(p1)).toBe(false);
});

it("should not be able to take off in storm", function() {
  spyOn(a1, 'isStormy').and.returnValue(true)
  expect(function() {a1.takeOff(p1)} ).toThrow("Too stormy!")
});

it("should not be able to take off in storm", function() {
  spyOn(a1, 'isStormy').and.returnValue(true)
  expect(function() {a1.land(p1)} ).toThrow("Too stormy!")
});

it("should not be able to land when the airport is full", function() {
	// var i
	// for (i = 0; i < a1.capacity; i ++) {
	// 	a1.land
	// }
	spyOn(a1, 'isStormy').and.returnValue(false)
	a1.capacity = 1
	a1.land(p1)
	expect(function() {a1.land(p2)} ).toThrow("Airport full!")
})

}) 


// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
