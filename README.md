# Parrot
Discord bot repeating users' messages

## Table of contents
- [General info](#general-info)
- [Requirements](#requirements)
- [Setup](#requirements)
- [Known issues](#known-issues)

## General info

Parrot is a Discord bot that repeats user messages. Parrot can mimic last message of particullar user or followed server channel. It registers three commands:

| Command            | Description
|--------------------|----------------------------------------------------------------|
| /mimic [@User]     | Re-send's last message sent by specified user                  |
| /mimicid [user_id] | Re-send's last message sent by specified user with provided id |
| /repeat            | Re-send's last message sent on current channel                 |

## Requirements

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/getting-started/install)

## Setup

1. Clone repository
```bash
$ git clone https://github.com/RadCraftplay/parrot.git
```

2. Create configuration file

In ```src``` directory create a file named ```config.json``` structured like in the example below:
```json
{
	"clientId": "<APPLICATION ID from Discord Developer Portal>",
	"guildId": "<YOUR GUILD ID>",
	"token": "<BOT TOKEN from Discord Developer Portal>"
}
```

3. Install dependencies
```
$ yarn install
```

4. Start bot
```
$ yarn start
```

## Known issues

- Due to Discord API limitations, only one of 100 last messages (on the selected channel) can be read
- Message attachments are not supported yet
