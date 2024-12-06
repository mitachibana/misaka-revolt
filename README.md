Basic api fetcher for the ReVoYo server on the platform Revolt.
1. Sends a daily message at a scheduled time via the daily.js. JavaScript is not good at running functions at a specific time, so there is a function that checks the time quite often. Once the set time is hit, the daily.js function will execute.
2. You will need to specify the channel id and also give the bot appropriate permissions to post a message to that channel.
3. For bot to fetch api, a wolframalpha api token and exchangerate api token are required. They can be added to the config.json. You will also need to add your Revolt bot token there.
4. Contact me via Revolt (@mitachibana) or email: mishatachibana@gmail.com
