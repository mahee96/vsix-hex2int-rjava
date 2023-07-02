   TAG=$(git tag  sed -n -e '1p')
   PTAG=$(git tag  sed -n -e '2p')
   echo "" > changelog.md
   bug='';feat='';api=''
    if [[ -z $PTAG ]]; then
      # No previous tags, generate changelog from all commits
      bug=$(git log --pretty=format:'   (%h) %s\n' --grep="-\[Bug\]:")
      feat=$(git log --pretty=format:'   (%h) %s\n' --grep="-\[Feature\]:")
      api=$(git log --pretty=format:'   (%h) %s\n' --grep="-\[API\]:")
    else
      bug=$(git log $PTAG..$TAG --pretty=format:'   (%h) %s\n' --grep="-\[Bug\]:") 
      feat=$(git log $PTAG..$TAG --pretty=format:'   (%h) %s\n' --grep="-\[Feature\]:") 
      api=$(git log $PTAG..$TAG --pretty=format:'   (%h) %s\n' --grep="-\[API\]:")
    fi
    echo "## [Bug-Fixes]:"   >>  changelog.md
    echo "$bug"                >>  changelog.md
    echo "## [Features]:"    >>  changelog.md
    echo "$feat"               >>  changelog.md
    echo "## [API-Changes]:" >>  changelog.md
    echo "$api"                >>  changelog.md
