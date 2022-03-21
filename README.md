[discord.js]: https://discord.js.org/#/
[discord.js-badge]: https://img.shields.io/npm/v/discord.js?label=discord.js
[clashofclans.js]: https://clashofclans.js.org/
[clashofclans.js-badge]: https://img.shields.io/npm/v/clashofclans.js?label=clashofclans.js

<div align="center">

## **Clash of Clans smaple discord bot using [NodeJs](https://nodejs.org/en/)**


[![Test](https://github.com/r-priyam/cocjs-smaple-bot/actions/workflows/test.yml/badge.svg)](https://github.com/r-priyam/cocjs-smaple-bot/actions/workflows/test.yml)

[![discord.js-badge][discord.js-badge]][discord.js]
[![clashofclans.js-badge][clashofclans.js-badge]][clashofclans.js]

![https://img.shields.io/github/issues/r-priyam/cocjs-smaple-bot](https://img.shields.io/github/issues/r-priyam/cocjs-smaple-bot)
![https://img.shields.io/github/forks/r-priyam/cocjs-smaple-bot](https://img.shields.io/github/forks/r-priyam/cocjs-smaple-bot)
![https://img.shields.io/github/license/r-priyam/cocjs-smaple-bot](https://img.shields.io/github/license/r-priyam/cocjs-smaple-bot)
</div>

## Introduction
----------------
This sample bot project aims to help you get started with interacting [Clash of Clans API](https://developer.clashofclans.com/) using `discord.js` and `clashofclans.js`.

## Before You Start
Before you dive into running this project, I expect you to have these things ready:
- [NodeJs](https://nodejs.org/) (version>=16)
- [git](https://git-scm.com/) (This is required to clone the project on your local machine)
- Account on [Clash of Clans API](https://developer.clashofclans.com/)
- Bot account on [Discord](https://discord.com/developers/)

After completing the above steps, do invite the bot to your server.

## Getting Started
-------------------
1. Clone the project using `git clone https://github.com/r-priyam/cocjs-smaple-bot.git`
2. Install dependencies using `npm install`
3. Make `.env` file in the project root directory and set the following values:
    - `CLASH_EMAIL` - Clash of Clans API account email address
    - `CLASH_PASSWORD` - Password for the account of `CLASH_EMAIL`
    - `PROJECT_NAME` - Your project name
    - `BOT_CLIENT_ID` - Bot client id
    - `TEST_GUILD_ID` - Guild id of the test guild in which bot was added
    - `BOT_TOKEN` - Discord bot token of your bot account created on [Discord](https://discord.com/developers/)
4. Synchronize the Application commands(Slash commands) with the test guild using `npm run sync:commands`. This will add the commands to the test guild. Please note that it takes sometime to cache the commands in guild but not much when we are adding commands specifically for guild only. Have some patience.
5. Run the bot using `npm run start`.

Once the bot is running and slash commands are reflecting in the test server then you can try running following commands:
- `/player` - To get player information
- `/clan` - To get clan information
- `/war` - To get clan war information

## FAQ's
--------
- **Q:** Why it requires my clash of clans account credentials?
    - **A:** It is required to get the access token to interact with clash of clans api. If you don't want to give your account credentials, you can use the [Clash of Clans API](https://developer.clashofclans.com/) website directly to get the access token and then you can setup the `CLASH_TOKEN` environment variable. It will then require you do some extra steps to get the `clasofclans.js` to work. In `index.ts` file do -
    ```diff
    - client.coc = new ClashClient({ cache: true });
    + client.coc = new ClashClient({ keys: [process.env.CLASH_TOKEN], cache: true });
    ```

- **Q:** Why adding commands to the test guild only and not globally?
    - **A:** When adding commands globally then it takes at least 1 hour ~ to cache commands on discord side and then reflect in the servers in which bot is added into `but not much when we are adding commands specifically for guild only`. So, it is better to add commands to the test guild only when developing.

- **Q:** How can I add commands globally?
    - **A:** Please read discordjs guide [here](https://discordjs.guide/interactions/slash-commands.html#global-commands) and follow the steps to add commands globally.

- **Q:** How can I add more commands?
    - **A:** Please read discordjs guide [here](https://discordjs.guide/interactions/slash-commands.html#adding-commands) and follow the steps to add more commands.

If you have any questions or suggestions, please feel free to open an issue [here](https://github.com/r-priyam/cocjs-smaple-bot/issues/new)