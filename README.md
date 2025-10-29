29 October 2025 Update:
*Got sick of directly editing the daily.js function each time the Genshin, HSR, and ZZZ banners changed over. I created the config-daily.json in order to simplify this routine update process. *

Basic api fetcher for the ReVoYo server on the platform Stoat.
a. Sends a daily message with Genshin, HSR, and ZZZ banner info at a scheduled time via the daily.js. JavaScript is not good at running functions at a specific time, so there is a function that checks the time quite often. Once the set time is hit, the daily.js function will execute.

b. The bot is also equipped to send a separate timed post to another channel. Set the time in the index.js and set the content and channel in miyabi.js.

SETUP:
The index.js handles the login as well as the setInterval of the 2 timed post functions.
The main timed post is the daily.js and it contains quite a few api calls to wolframalpha api for automated difference in time data from the dates your set in config-daily.json. You do not have to touch the daily.js, you can update the banner timers and info all in the config-daily.json.
The secondary timed post is the miyabi.js. It is simpler and only contains one fetch from wolframalpha api to track time since or time until the date you set in the fetch itself.

1. Clone the repo and create a bot in Stoat. You will need to input the bot token into the config.json. Be sure not to leak this token. 
2. In order to use this bot as is, you will need to create a wolframalpha api token and an exchange rate api token and add those tokens to the same config.json. If you do not want to use these api, you will have to remove those fetch functions in daily.js and miyabi.js.
3. Insert your desired channel ID in the config-daily.json under "channelGreeting"
4. Edit the contents of the daily.js message in the config-daily.json. For the banner end times, be sure to follow the shown date format including the "+" signs. This date is injected directly into the html in-line fetch to the wolframalpha api.
5. As mentioned earlier, edit the contents of the second post in Miyabi.js or simply disable it in the index.js.

Contact me via Revolt (@mitachibana) or email: mishatachibana@gmail.com
