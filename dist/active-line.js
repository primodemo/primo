import{c as e,b as t}from"./index.js";var n=e((function(e,n){!function(e){var t="CodeMirror-activeline",n="CodeMirror-activeline-background",i="CodeMirror-activeline-gutter";function a(e){for(var a=0;a<e.state.activeLines.length;a++)e.removeLineClass(e.state.activeLines[a],"wrap",t),e.removeLineClass(e.state.activeLines[a],"background",n),e.removeLineClass(e.state.activeLines[a],"gutter",i)}function r(e,t){if(e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function o(e,o){for(var s=[],c=0;c<o.length;c++){var l=o[c],v=e.getOption("styleActiveLine");if("object"==typeof v&&v.nonEmpty?l.anchor.line==l.head.line:l.empty()){var f=e.getLineHandleVisualStart(l.head.line);s[s.length-1]!=f&&s.push(f)}}r(e.state.activeLines,s)||e.operation((function(){a(e);for(var r=0;r<s.length;r++)e.addLineClass(s[r],"wrap",t),e.addLineClass(s[r],"background",n),e.addLineClass(s[r],"gutter",i);e.state.activeLines=s}))}function s(e,t){o(e,t.ranges)}e.defineOption("styleActiveLine",!1,(function(t,n,i){var r=i!=e.Init&&i;n!=r&&(r&&(t.off("beforeSelectionChange",s),a(t),delete t.state.activeLines),n&&(t.state.activeLines=[],o(t,t.listSelections()),t.on("beforeSelectionChange",s)))}))}(t)})),i=Object.freeze(Object.assign(Object.create(null),n,{[Symbol.toStringTag]:"Module",default:n}));export{i as a};
//# sourceMappingURL=active-line.js.map
