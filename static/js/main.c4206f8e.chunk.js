(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,function(t){t.exports=JSON.parse('[{"id":1,"image":"dog1.jpg","count":0},{"id":2,"image":"dog2.jpg","count":0},{"id":3,"image":"dog3.jpg","count":0},{"id":4,"image":"dog4.jpg","count":0},{"id":5,"image":"dog5.jpg","count":0},{"id":6,"image":"dog6.jpg","count":0},{"id":7,"image":"dog7.jpg","count":0},{"id":8,"image":"dog8.jpg","count":0},{"id":9,"image":"dog9.jpg","count":0},{"id":10,"image":"cat10.jpg","count":0}]')},,,,,,,,function(t,e,c){t.exports=c(30)},,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){var n={"./cat10.jpg":19,"./dog1.jpg":20,"./dog2.jpg":21,"./dog3.jpg":22,"./dog4.jpg":23,"./dog5.jpg":24,"./dog6.jpg":25,"./dog7.jpg":26,"./dog8.jpg":27,"./dog9.jpg":28};function o(t){var e=a(t);return c(e)}function a(t){if(!c.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=a,t.exports=o,o.id=18},function(t,e,c){t.exports=c.p+"static/media/cat10.ca0c356b.jpg"},function(t,e,c){t.exports=c.p+"static/media/dog1.22200a47.jpg"},function(t,e,c){t.exports=c.p+"static/media/dog2.44c9d898.jpg"},function(t,e,c){t.exports=c.p+"static/media/dog3.8434ea48.jpg"},function(t,e,c){t.exports=c.p+"static/media/dog4.31a9bce6.jpg"},function(t,e,c){t.exports=c.p+"static/media/dog5.6218082b.jpg"},function(t,e,c){t.exports=c.p+"static/media/dog6.d15f9dbf.jpg"},function(t,e,c){t.exports=c.p+"static/media/dog7.b8297d4e.jpg"},function(t,e,c){t.exports=c.p+"static/media/dog8.391aecad.jpg"},function(t,e,c){t.exports=c.p+"static/media/dog9.a5e7fab4.jpg"},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(0),o=c.n(n),a=c(3),i=c.n(a),r=c(4),s=c(5),g=c(7),d=c(6),u=c(8),p=(c(14),function(t){return o.a.createElement("div",{className:"card",onClick:function(){return t.clickCount(t.id)}},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{alt:t.name,src:t.image})))}),m=(c(15),function(t){return o.a.createElement("div",{className:"wrapper"},t.children)}),f=(c(16),function(t){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"title"},t.children),o.a.createElement("div",{className:"scores"},"Score: ",t.score," Highscore: ",t.highscore))}),l=c(1),j=(c(17),function(t){function e(){var t,c;Object(r.a)(this,e);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(c=Object(g.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={cards:l,score:0,highscore:0},c.gameOver=function(){return c.state.score>c.state.highscore&&c.setState({highscore:c.state.score},(function(){console.log(this.state.highscore)})),c.state.cards.forEach((function(t){t.count=0})),alert("Game Over :( \nscore: ".concat(c.state.score)),c.setState({score:0}),!0},c.clickCount=function(t){c.state.cards.find((function(e,n){if(e.id===t){if(0===l[n].count)return l[n].count=l[n].count+1,c.setState({score:c.state.score+1},(function(){console.log(this.state.score)})),c.state.cards.sort((function(){return Math.random()-.5})),!0;c.gameOver()}}))},c}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(m,null,o.a.createElement(f,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),this.state.cards.map((function(e){return o.a.createElement(p,{clickCount:t.clickCount,id:e.id,key:e.id,image:c(18)("./"+e.image)})})))}}]),e}(n.Component));c(29);i.a.render(o.a.createElement(j,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.c4206f8e.chunk.js.map