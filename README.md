18 April 2025 Update:

Added an automated post to count days since the 25 January 2025 ZZZ Hoshimi Miyabi banner and also days until the ZZZ anniversary (4 July). If you clone, you will need to update the wolframalpha api call to fetch info on the date of the most recent Miyabi banner. Otherwise make changes as specified for the daily function below.

Basic api fetcher for the ReVoYo server on the platform Revolt.
1. Sends a daily message at a scheduled time via the daily.js. JavaScript is not good at running functions at a specific time, so there is a function that checks the time quite often. Once the set time is hit, the daily.js function will execute.
2. You will need to specify the channel id and also give the bot appropriate permissions to post a message to that channel.
3. For bot to fetch api, a wolframalpha api token and exchangerate api token are required. They can be added to the config.json. You will also need to add your Revolt bot token there.
4. Contact me via Revolt (@mitachibana) or email: mishatachibana@gmail.com
