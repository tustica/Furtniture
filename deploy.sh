#!/user/bin/env sh

set -e

npm run build

cd dist

git init
git add -A 
git commit -m 'TimRoom'
git push -f https://github.com/tustica/FurnitureBuisness.git master:timroom

cd -