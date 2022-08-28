echo "Kill all PM2 pids"
sudo pm2 list
sudo pm2 kill
cd /var/services/homes/solduma/my-page

echo "Update app"
git fetch --all
git reset --hard origin/main
cd /var/services/homes/solduma/my-page/frontend

echo "Install dependencies"
sudo npm i

echo "Build app"
sudo npm run build

echo "Run app"
sudo pm2 run --name frontend npm -- start