echo "Kill all PM2 pids"
pm2 list
pm2 kill
cd /var/services/homes/solduma/my-page

echo "Update app"
git fetch --all
git reset --hard origin/main
cd /var/services/homes/solduma/my-page/frontend

echo "Install dependencies"
npm i

echo "Build app"
npm run build

echo "Run app"
pm2 run --name frontend npm -- start