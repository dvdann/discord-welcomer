Discord Welcomer Bot

# STEP TO USE

Install dependency.
```bash
npm install
```


Create ```config.json``` file.
You can get token by accessing your application dashboard and click **REVEAL TOKEN**.

```json
{
    "token": "Your TOKEN Here"
}
```

Create ```message.json``` file.
message is an array , every index means a new line of the message.

```json
{
    "color": "#7c4dff",
    "message": [
        "welcome to My Server !",
        ""
    ],
    "image": "https://media.discordapp.net/attachments/779433905349853204/779434982711623710/image1.gif"
}
```

Run the bot

```bash
npm start
```