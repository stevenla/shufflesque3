// Initialize
function themeReady() {
  $('#artwork').click(artAction);
}

// Gets called at an interval, used for progress bar
function playerUpdate() {
  var ratio = Player.playerPosition() / Player.currentTrack().length;
  var percent = (ratio * 100) + '%';
  $('#progress-bar').width(percent);
}

function trackUpdate(track) {
  $('#name').text(track.title);
}

// Center clicking stuff
var clickCount = 0;
var clickInterval = 400;
var timeout;

function artClick() {
  clickCount++;
  console.log(clickCount);
  clearTimeout(timeout);

  // Triple is the max number of clicks
  if (clickCount == 3)
    artAction();

  // Else wait to execute action
  else
    timer = setTimeout(artAction, clickInterval);
}

function artAction() {
  // Pause
  if (clickCount == 1) {
    Player.playPause();
  }
  // Next
  else if (clickCount == 2) {
    Player.nextTrack();
  }
  // Previous
  else {
    Player.previousTrack();
  }
}