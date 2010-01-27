H=$(echo "$1" | sed s/'\/'/'\\\/'/g)
cat bootstrap.js.tp | sed s/%%BASE%%/$H/ > bootstrap.js
cat oyster.html.tp | sed s/%%BASE%%/$H/ > oyster.html