# Discord Bot for GithubCommits!

## Configuration

U will need [nodeJS v12](https://nodejs.org/en/download/) to compile bot

There are 2 possibilities to host this bot.
1st u can host it by yourself on localhost
2nd u can host it on hosting like Heroku(it's free)

### Option 1 Localhost

1. Run npm install in the project directory
2. Rename .env.example to .env
3. Paste all required informations to .env

```
Example:

TOKEN= //U must generate your token here https://discord.com/developers/applications then in the Bot tab u have "Click to reveal token"
PORT=   //Here set port for bot
GITHUB_SECRET= //Here u can paste whatever u want, i used a in-built Crypto module to generate my own secret
DISCORD_GUILD_ID=   //Here u need to right-click your discord server name and copy-id
DISCORD_CHANNEL_ID= //And here right-click your discord channel where u want to set your commits

```

4. Run npm run build to get JS files
5. Now if u want to run it just locate your dist folder and run node index.js file to start bot
6. It's probably obvious but if u want to host it on localhost u must open your localhost bot ip to the internet via tool like ngrok
7. That's all for initial bot configuration now skip to Github Repo Configuration

### Option 2 Hosting ( heroku for this example)

1. Run npm install in the project directory
2. In the dist folder create new Procfile file
3. Paste worker: node index.js inside of the Procfile
4. Now choose one strategy to deploy your app from here: https://blog.heroku.com/six-strategies-deploy-to-heroku
5. Now if your app is on the heroku servers the only thing u must do is to enter the bot setting and click "Reveal Config Vars".
   Now u must set the env variables

```
Example (left: Key, Right: Value)
TOKEN, //U must generate your token here https://discord.com/developers/applications then in the Bot tab u have "Click to reveal token"
GITHUB_SECRET //U can paste whatever u want, i used a in-built Crypto module to generate my own secret
DISCORD_GUILD_ID   //Here u need to right-click your discord server name and copy-id
DISCORD_CHANNEL_ID //And here right-click your discord channel where u want to set your commits and copy-id
```

6.Now go to the resources tab and u should see here 2 Dynos(Web and Worker). Both should be turned on. 7. That's all for initial bot configuration now skip to Github Repo Configuration

### Github Repo Configuration

1. Open your github repo
2. Go to settings tab and choose Webhooks
3. Add new webhook
4. Now here is the example for data what u must paste here

```
Payload URL: http/s:yourAppUrl.com/payload/theSecretFromYourEnvFile
Content-Type: JSON
```

5. That's all!
