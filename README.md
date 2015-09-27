## Getting Started with Slack Bots

This repo is a small node project following the steps outlined [by
sitepoint.com](http://www.sitepoint.com/getting-started-slack-bots/) The result
is two slack integrations:

1. A Slackbot responds to a keyword 'hello'
2. A custom /slash command for /roll which perfoms a dice roll from any channel

Kinda neat, and a pretty straight forward way to use webhooks with slack.

WebHooks seem nice, but leave a lot to be desired. The slack real time messaging
API is much more powerful since we could do advanced matching for events on
the server side rather than manually creating a webhook for each trigger.
