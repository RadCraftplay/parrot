# Parrot
Discord bot repeating users' messages

## Table of contents
- [Requirements](#requirements)
- [Setup](#requirements)
- [Known issues](#known-issues)

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

- Message attachments are not supported yet
