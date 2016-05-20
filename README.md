# Abalone

A playable, in-browser version of the strategy game [Abalone](https://en.wikipedia.org/wiki/Abalone_(board_game)). 
[Deployed on firebase for multi-player enjoyment using firebase dB.](https://abalone-game.firebaseapp.com/)

## Features

+ Functions just like the board game, with lateral moves of strings of marbles.

## Anti-features
The game does not include the following features, but pull requests are welcome.

+ Countdown timer
+ AI

## Requirements
None.

## Alternatives

+ http://www.clickhere.nl/abalone/play/

## Tools & Technologies
+ javascript
+ jquery
+ fontawesome
+ firebase

## Design Approach

Since Abalone is a relatively little-known game, user experience is foremost. Rather than showing all moves and alerting the user when they pick an invalid move, the UI only shows arrows for possible move directions. In addition, arrows turn red when you are interacting with opponent marbles for further user education.

Another facet of the user experience design is the highlighted marbles to show valid next selections. For users who are unfamiliar with the rules of Abalone, this helps to educate them on how many of their own marbles they can select to move.

## References

+ http://entertainment.howstuffworks.com/leisure/brain-games/abalone2.htm 
+ http://www.cs.nott.ac.uk/~pszeo/docs/publications/ABLA_id136final.pdf 

## [Rules](http://www.gamerz.net/pbmserv/abalone.html)

![Screenshot](public/assets/img/screenshot.png "Abalone board game")

## Credits
Thanks to these developers for their contributions.

+ [jim](https://github.com/jim-clark)
+ [kyle](https://github.com/kylefberg)
+ [adrian](https://github.com/ishmaru)
+ [ezra](https://github.com/earnagram)
+ [phil](https://github.com/h4w5)
+ [havenwood](https://github.com/havenwood)
+ [rob](https://github.com/robawilkinson)

![Abalone Game](public/assets/img/abalone.jpeg "Abalone board game")

## Next steps for further iterations
+ Animation for moving marbles around
+ Deselect marbles
