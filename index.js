const TicTacToe = require('discord-tictactoe')

new TicTacToe({
    token: 'MTA0OTE4NjI2OTY0NjgyMzQ5NA.GgwNe0.6Z3ZHdVsYwr9dhhxAWHeeHRRG2nWg4dwUYhyLY',
    language :'en',
    command : 'tictactoe',
    commandOptionName: 'opponent',
    textCommand : '!ttt'
})
    .login()
    .then(()=> console.log("The bot is online"));