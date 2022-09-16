#!/usr/bin/env node

const taskLists_enabled = false;
const highlight_css = 'highlight.js/styles/idea.css';

const hljs = require('highlight.js');
const taskLists = require('markdown-it-task-lists');
const fs = require('fs');
const md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return '';
  }
}).use(taskLists, {enabled: taskLists_enabled, label: true});

console.log('<!DOCTYPE html><html><head><style>\n');
console.log(`
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}\n`);
console.log(fs.readFileSync(require.resolve('github-markdown-css/github-markdown.css'), 'utf8'));
console.log(fs.readFileSync(require.resolve(highlight_css), 'utf8'));
console.log('\n</style></head><body class="markdown-body">\n');

process.argv.slice(2).forEach((val, _) => {
  console.log(md.render(fs.readFileSync(val, 'utf8')));
});
console.log('\n</body></html>');
