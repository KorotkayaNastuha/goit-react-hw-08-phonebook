"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[712],{1712:function(e,a,o){o.r(a),o.d(a,{default:function(){return N}});var t=o(2791),c=o(7462),l=o(8023),n=o(9598),r="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",i=o(184);var s=function(e){var a=e.children,o=e.theme,s=(0,n.Z)(),d=t.useMemo((function(){var e=null===s?o:function(e,a){return"function"===typeof a?a(e):(0,c.Z)({},e,a)}(s,o);return null!=e&&(e[r]=null!==s),e}),[o,s]);return(0,i.jsx)(l.Z.Provider,{value:d,children:a})},d=o(9886),p=o(3459),v={};function u(e){var a=(0,p.Z)();return(0,i.jsx)(d.T.Provider,{value:"object"===typeof a?a:v,children:e.children})}var m=function(e){var a=e.children,o=e.theme;return(0,i.jsx)(s,{theme:o,children:(0,i.jsx)(u,{children:a})})},h=o(7107),b=o(8447),f=o(4942),Z=o(3366),g=o(8182),y=o(4419),C=o(2065),k=(0,o(9201).Z)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),x=o(2071),S=o(4036),z=o(3701),I=o(1046),w=o(7630),O=o(5878),M=o(1217);function R(e){return(0,M.Z)("MuiChip",e)}var L=(0,O.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),P=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],T=(0,w.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,a){var o=e.ownerState,t=o.color,c=o.iconColor,l=o.clickable,n=o.onDelete,r=o.size,i=o.variant;return[(0,f.Z)({},"& .".concat(L.avatar),a.avatar),(0,f.Z)({},"& .".concat(L.avatar),a["avatar".concat((0,S.Z)(r))]),(0,f.Z)({},"& .".concat(L.avatar),a["avatarColor".concat((0,S.Z)(t))]),(0,f.Z)({},"& .".concat(L.icon),a.icon),(0,f.Z)({},"& .".concat(L.icon),a["icon".concat((0,S.Z)(r))]),(0,f.Z)({},"& .".concat(L.icon),a["iconColor".concat((0,S.Z)(c))]),(0,f.Z)({},"& .".concat(L.deleteIcon),a.deleteIcon),(0,f.Z)({},"& .".concat(L.deleteIcon),a["deleteIcon".concat((0,S.Z)(r))]),(0,f.Z)({},"& .".concat(L.deleteIcon),a["deleteIconColor".concat((0,S.Z)(t))]),(0,f.Z)({},"& .".concat(L.deleteIcon),a["deleteIcon".concat((0,S.Z)(i),"Color").concat((0,S.Z)(t))]),a.root,a["size".concat((0,S.Z)(r))],a["color".concat((0,S.Z)(t))],l&&a.clickable,l&&"default"!==t&&a["clickableColor".concat((0,S.Z)(t),")")],n&&a.deletable,n&&"default"!==t&&a["deletableColor".concat((0,S.Z)(t))],a[i],a["".concat(i).concat((0,S.Z)(t))]]}})((function(e){var a,o=e.theme,t=e.ownerState,l=(0,C.Fq)(o.palette.text.primary,.26),n="light"===o.palette.mode?o.palette.grey[700]:o.palette.grey[300];return(0,c.Z)((a={maxWidth:"100%",fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(o.vars||o).palette.text.primary,backgroundColor:(o.vars||o).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:o.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},(0,f.Z)(a,"&.".concat(L.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"}),(0,f.Z)(a,"& .".concat(L.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:o.vars?o.vars.palette.Chip.defaultAvatarColor:n,fontSize:o.typography.pxToRem(12)}),(0,f.Z)(a,"& .".concat(L.avatarColorPrimary),{color:(o.vars||o).palette.primary.contrastText,backgroundColor:(o.vars||o).palette.primary.dark}),(0,f.Z)(a,"& .".concat(L.avatarColorSecondary),{color:(o.vars||o).palette.secondary.contrastText,backgroundColor:(o.vars||o).palette.secondary.dark}),(0,f.Z)(a,"& .".concat(L.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:o.typography.pxToRem(10)}),(0,f.Z)(a,"& .".concat(L.icon),(0,c.Z)({marginLeft:5,marginRight:-6},"small"===t.size&&{fontSize:18,marginLeft:4,marginRight:-4},t.iconColor===t.color&&(0,c.Z)({color:o.vars?o.vars.palette.Chip.defaultIconColor:n},"default"!==t.color&&{color:"inherit"}))),(0,f.Z)(a,"& .".concat(L.deleteIcon),(0,c.Z)({WebkitTapHighlightColor:"transparent",color:o.vars?"rgba(".concat(o.vars.palette.text.primaryChannel," / 0.26)"):l,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:o.vars?"rgba(".concat(o.vars.palette.text.primaryChannel," / 0.4)"):(0,C.Fq)(l,.4)}},"small"===t.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==t.color&&{color:o.vars?"rgba(".concat(o.vars.palette[t.color].contrastTextChannel," / 0.7)"):(0,C.Fq)(o.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(o.vars||o).palette[t.color].contrastText}})),a),"small"===t.size&&{height:24},"default"!==t.color&&{backgroundColor:(o.vars||o).palette[t.color].main,color:(o.vars||o).palette[t.color].contrastText},t.onDelete&&(0,f.Z)({},"&.".concat(L.focusVisible),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selectedChannel," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.focusOpacity,"))"):(0,C.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}),t.onDelete&&"default"!==t.color&&(0,f.Z)({},"&.".concat(L.focusVisible),{backgroundColor:(o.vars||o).palette[t.color].dark}))}),(function(e){var a,o=e.theme,t=e.ownerState;return(0,c.Z)({},t.clickable&&(a={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selectedChannel," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.hoverOpacity,"))"):(0,C.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)}},(0,f.Z)(a,"&.".concat(L.focusVisible),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selectedChannel," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.focusOpacity,"))"):(0,C.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}),(0,f.Z)(a,"&:active",{boxShadow:(o.vars||o).shadows[1]}),a),t.clickable&&"default"!==t.color&&(0,f.Z)({},"&:hover, &.".concat(L.focusVisible),{backgroundColor:(o.vars||o).palette[t.color].dark}))}),(function(e){var a,o,t=e.theme,l=e.ownerState;return(0,c.Z)({},"outlined"===l.variant&&(a={backgroundColor:"transparent",border:t.vars?"1px solid ".concat(t.vars.palette.Chip.defaultBorder):"1px solid ".concat("light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[700])},(0,f.Z)(a,"&.".concat(L.clickable,":hover"),{backgroundColor:(t.vars||t).palette.action.hover}),(0,f.Z)(a,"&.".concat(L.focusVisible),{backgroundColor:(t.vars||t).palette.action.focus}),(0,f.Z)(a,"& .".concat(L.avatar),{marginLeft:4}),(0,f.Z)(a,"& .".concat(L.avatarSmall),{marginLeft:2}),(0,f.Z)(a,"& .".concat(L.icon),{marginLeft:4}),(0,f.Z)(a,"& .".concat(L.iconSmall),{marginLeft:2}),(0,f.Z)(a,"& .".concat(L.deleteIcon),{marginRight:5}),(0,f.Z)(a,"& .".concat(L.deleteIconSmall),{marginRight:3}),a),"outlined"===l.variant&&"default"!==l.color&&(o={color:(t.vars||t).palette[l.color].main,border:"1px solid ".concat(t.vars?"rgba(".concat(t.vars.palette[l.color].mainChannel," / 0.7)"):(0,C.Fq)(t.palette[l.color].main,.7))},(0,f.Z)(o,"&.".concat(L.clickable,":hover"),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[l.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,C.Fq)(t.palette[l.color].main,t.palette.action.hoverOpacity)}),(0,f.Z)(o,"&.".concat(L.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[l.color].mainChannel," / ").concat(t.vars.palette.action.focusOpacity,")"):(0,C.Fq)(t.palette[l.color].main,t.palette.action.focusOpacity)}),(0,f.Z)(o,"& .".concat(L.deleteIcon),{color:t.vars?"rgba(".concat(t.vars.palette[l.color].mainChannel," / 0.7)"):(0,C.Fq)(t.palette[l.color].main,.7),"&:hover, &:active":{color:(t.vars||t).palette[l.color].main}}),o))})),V=(0,w.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,a){var o=e.ownerState.size;return[a.label,a["label".concat((0,S.Z)(o))]]}})((function(e){var a=e.ownerState;return(0,c.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===a.size&&{paddingLeft:8,paddingRight:8})}));function j(e){return"Backspace"===e.key||"Delete"===e.key}var D=t.forwardRef((function(e,a){var o=(0,I.Z)({props:e,name:"MuiChip"}),l=o.avatar,n=o.className,r=o.clickable,s=o.color,d=void 0===s?"default":s,p=o.component,v=o.deleteIcon,u=o.disabled,m=void 0!==u&&u,h=o.icon,b=o.label,f=o.onClick,C=o.onDelete,w=o.onKeyDown,O=o.onKeyUp,M=o.size,L=void 0===M?"medium":M,D=o.variant,F=void 0===D?"filled":D,E=o.tabIndex,N=o.skipFocusWhenDisabled,q=void 0!==N&&N,_=(0,Z.Z)(o,P),H=t.useRef(null),K=(0,x.Z)(H,a),W=function(e){e.stopPropagation(),C&&C(e)},U=!(!1===r||!f)||r,A=U||C?z.Z:p||"div",B=(0,c.Z)({},o,{component:A,disabled:m,size:L,color:d,iconColor:t.isValidElement(h)&&h.props.color||d,onDelete:!!C,clickable:U,variant:F}),G=function(e){var a=e.classes,o=e.disabled,t=e.size,c=e.color,l=e.iconColor,n=e.onDelete,r=e.clickable,i=e.variant,s={root:["root",i,o&&"disabled","size".concat((0,S.Z)(t)),"color".concat((0,S.Z)(c)),r&&"clickable",r&&"clickableColor".concat((0,S.Z)(c)),n&&"deletable",n&&"deletableColor".concat((0,S.Z)(c)),"".concat(i).concat((0,S.Z)(c))],label:["label","label".concat((0,S.Z)(t))],avatar:["avatar","avatar".concat((0,S.Z)(t)),"avatarColor".concat((0,S.Z)(c))],icon:["icon","icon".concat((0,S.Z)(t)),"iconColor".concat((0,S.Z)(l))],deleteIcon:["deleteIcon","deleteIcon".concat((0,S.Z)(t)),"deleteIconColor".concat((0,S.Z)(c)),"deleteIcon".concat((0,S.Z)(i),"Color").concat((0,S.Z)(c))]};return(0,y.Z)(s,R,a)}(B),J=A===z.Z?(0,c.Z)({component:p||"div",focusVisibleClassName:G.focusVisible},C&&{disableRipple:!0}):{},Q=null;C&&(Q=v&&t.isValidElement(v)?t.cloneElement(v,{className:(0,g.Z)(v.props.className,G.deleteIcon),onClick:W}):(0,i.jsx)(k,{className:(0,g.Z)(G.deleteIcon),onClick:W}));var X=null;l&&t.isValidElement(l)&&(X=t.cloneElement(l,{className:(0,g.Z)(G.avatar,l.props.className)}));var Y=null;return h&&t.isValidElement(h)&&(Y=t.cloneElement(h,{className:(0,g.Z)(G.icon,h.props.className)})),(0,i.jsxs)(T,(0,c.Z)({as:A,className:(0,g.Z)(G.root,n),disabled:!(!U||!m)||void 0,onClick:f,onKeyDown:function(e){e.currentTarget===e.target&&j(e)&&e.preventDefault(),w&&w(e)},onKeyUp:function(e){e.currentTarget===e.target&&(C&&j(e)?C(e):"Escape"===e.key&&H.current&&H.current.blur()),O&&O(e)},ref:K,tabIndex:q&&m?-1:E,ownerState:B},J,_,{children:[X||Y,(0,i.jsx)(V,{className:(0,g.Z)(G.label),ownerState:B,children:b}),Q]}))})),F=o(4554),E=(0,h.Z)({components:{MuiIcon:{styleOverrides:{root:{padding:"10px",fontSize:"50rem"}}}}});function N(){return(0,i.jsx)(F.Z,{sx:{"& > :not(style)":{display:"flex",width:"580px",height:"180px",m:"200px auto "}},children:(0,i.jsx)(m,{theme:E,children:(0,i.jsx)(D,{icon:(0,i.jsx)(b.Z,{sx:{fontSize:180}}),label:"Phonebook",fontSize:"large",sx:{fontSize:60}})})})}},8447:function(e,a,o){var t=o(4836);a.Z=void 0;var c=t(o(5649)),l=o(184),n=(0,c.default)([(0,l.jsx)("path",{d:"M22 5H2v14h20V5zM9 6c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm6 12H3v-1.41C3 14.08 6.97 13 9 13s6 1.08 6 3.58V18zm2.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z",opacity:".3"},"0"),(0,l.jsx)("path",{d:"M2 21h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2zM2 5h20v14H2V5zm17.49 5L21 8l-1.99-1.99c-1.31.98-2.28 2.37-2.73 3.99-.18.64-.28 1.31-.28 2s.1 1.36.28 2c.45 1.61 1.42 3.01 2.73 3.99L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2h1.64zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 5c-2.03 0-6 1.08-6 3.58V18h12v-1.41C15 14.08 11.03 13 9 13zm-3.52 3c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z"},"1")],"ContactPhoneTwoTone");a.Z=n}}]);
//# sourceMappingURL=712.592782a2.chunk.js.map