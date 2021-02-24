const chalk = require('chalk') // serve pra usar cores na console log

module.exports = color = (text, color) => {
    return !color ? chalk.blue(text) : chalk.keyword(color)(text)
}
