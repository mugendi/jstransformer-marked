'use strict'

const marked = require('marked')

exports.name = 'marked'
exports.outputFormat = 'html'
exports.inputFormats = ['marked', 'markdown', 'md']
exports.render = function(str, options) {
    return marked(str, options)
}

exports.renderInline = function(str, options) {
    return marked.parseInline(str, options)
}