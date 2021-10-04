#!/user/bin/env sh

set -e

npm run build

git init
git add -A 
git commit -m 'TimRoom'
git push -f https://github.com/tustica/FurnitureStore.git master:timroom

cd -