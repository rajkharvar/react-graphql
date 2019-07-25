(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(49)},39:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(28),i=n.n(r),l=(n(39),n(11)),c=n(8),u=n(29),s=n(12),d=n(13),m=n(15),h=n(14),b=n(16),p=n(18);function E(){var e=Object(p.a)(["\n    query GetBook($id: ID) {\n        book(id: $id) {\n            name\n            price\n            edition\n            id\n            author {\n                name\n                age\n                id\n                books {\n                    name\n                    id\n                }\n            }\n        }\n    }\n"]);return E=function(){return e},e}function v(){var e=Object(p.a)(["\n    mutation($name: String!, $edition: String!, $price: Float!, $authorId: ID!){\n        addBook( name: $name,  edition: $edition,  price: $price,  authorId: $authorId){\n            name\n            id\n        }\n    }\n"]);return v=function(){return e},e}function k(){var e=Object(p.a)(["\n    {\n        authors {\n            name\n            id\n        }\n    }\n"]);return k=function(){return e},e}function f(){var e=Object(p.a)(["\n    {\n        books {\n            name\n            id\n        }\n    }\n"]);return f=function(){return e},e}var g=Object(l.b)(f()),j=Object(l.b)(k()),O=Object(l.b)(v()),y=Object(l.b)(E()),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).generateAuthors=function(){var e=n.props.getAuthorsQuery;return e.loading?o.a.createElement("option",{disabled:!0},"Loading Authors"):e.authors.map(function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)})},n.handleChange=function(e){n.setState(Object(u.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.addBookMutation({variables:{name:n.state.name,price:parseFloat(n.state.price),edition:n.state.edition,authorId:n.state.authorId},refetchQueries:[{query:g}]}),n.setState({name:"",edition:"",price:0,authorId:""})},n.state={name:"",price:0,edition:"",authorId:""},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"add-book"},o.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},o.a.createElement("div",null,o.a.createElement("label",null,"Book Name"),o.a.createElement("input",{type:"text",value:this.state.name,name:"name",placeholder:"Enter book name",onChange:this.handleChange.bind(this)})),o.a.createElement("div",null,o.a.createElement("label",null,"Price"),o.a.createElement("input",{type:"number",value:this.state.price,name:"price",placeholder:"Price",onChange:this.handleChange.bind(this)})),o.a.createElement("div",null,o.a.createElement("label",null,"Book Edition"),o.a.createElement("input",{type:"text",value:this.state.edition,name:"edition",placeholder:"Enter book Edition",onChange:this.handleChange.bind(this)})),o.a.createElement("div",null,o.a.createElement("label",null,"Authors"),o.a.createElement("select",{name:"authorId",onChange:this.handleChange.bind(this),value:this.state.authorId},o.a.createElement("option",null,"Select Author"),this.generateAuthors())),o.a.createElement("div",null,o.a.createElement("button",null,"Submit"))))}}]),t}(a.Component),B=Object(c.b)(Object(c.c)(j,{name:"getAuthorsQuery"}),Object(c.c)(O,{name:"addBookMutation"}))(w),I=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).generateBookDetails=function(){var e=n.props.data;return e.book?o.a.createElement("div",null,o.a.createElement("h1",null,"Book Name: ",e.book.name),o.a.createElement("h3",null,"Price: ",e.book.price),o.a.createElement("h4",null,"Edition: ",e.book.edition),o.a.createElement("h2",null,"Author:",e.book.author.name),o.a.createElement("h4",null,"All Books by this author:"),e.book.author.books.map(function(e){return o.a.createElement("h4",{key:e.id},e.name)})):o.a.createElement("div",null,"No book selected")},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"book-details"},o.a.createElement("h1",null,"Books Details Here:"),this.generateBookDetails())}}]),t}(a.Component),C=Object(c.c)(y,{options:function(e){return{variables:{id:e.bookId}}}})(I),A=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={selected:null},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"book-list"},o.a.createElement("h1",null,"All Books"),this.props.data.loading&&o.a.createElement("div",null,o.a.createElement("h1",null,"Please wait...")),o.a.createElement("ul",{style:{listStyle:"none"}},!this.props.data.loading&&this.props.data.books.map(function(t){return o.a.createElement("li",{key:t.id,onClick:function(){return e.setState({selected:t.id})}},t.name)}))),o.a.createElement(C,{bookId:this.state.selected}))}}]),t}(a.Component),S=Object(c.c)(g)(A),$=new l.a({uri:"/graphql"});var N=function(){return o.a.createElement(c.a,{client:$},o.a.createElement("div",{className:"app"},o.a.createElement("div",{id:"book-list"},o.a.createElement(S,null)),o.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.df9cf90b.chunk.js.map