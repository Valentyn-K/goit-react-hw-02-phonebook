(this["webpackJsonphw2-phonebook"]=this["webpackJsonphw2-phonebook"]||[]).push([[0],[,function(t,e,a){t.exports={formWrapper:"FormToAddContact_formWrapper__1BltG",form:"FormToAddContact_form__Lh5JD",inputLabel:"FormToAddContact_inputLabel__3zfGO",input:"FormToAddContact_input__1kfnx",submitButton:"FormToAddContact_submitButton__27PWq","material-icons":"FormToAddContact_material-icons__1wMXc"}},,,,,,,function(t,e,a){t.exports={appWraper:"App_appWraper__PlncD"}},function(t,e,a){t.exports={contactCard:"Contact_contactCard__32NtH",contactImage:"Contact_contactImage__2tDcV","material-icons":"Contact_material-icons__1s1x7"}},function(t,e,a){t.exports={contactList:"ContactList_contactList__32K97"}},,,function(t,e,a){t.exports={filterInput:"FilterContacts_filterInput__1oPp5"}},,function(t,e,a){t.exports=a(20)},,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=a(14),l=a(2),s=a(4),u=a(5),m=a(7),p=a(6),d=a(8),f=a.n(d),b=a(22),C=a(3),h=a(1),_=a.n(h),v=function(t){Object(m.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:t.props.initialValue,number:t.props.initialValue},t.handleInput=function(e){return t.setState(Object(C.a)({},e.target.name,e.target.value))},t.resetState=function(){return t.setState({name:"",number:""})},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(l.a)({},t.state)),t.resetState()},t.handleCloseForm=function(e){t.props.onCloseForm()},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return r.a.createElement("section",{className:_.a.formWrapper},r.a.createElement("form",{className:_.a.form,onSubmit:this.handleSubmit},r.a.createElement("button",{className:_.a["material-icons"],onClick:this.handleCloseForm},"clear"),r.a.createElement("label",{className:_.a.inputLabel},"Name"),r.a.createElement("input",{className:_.a.input,name:"name",type:"text",value:e,onChange:this.handleInput,required:!0}),r.a.createElement("label",{className:_.a.inputLabel},"Number"),r.a.createElement("input",{className:_.a.input,name:"number",type:"tel",value:a,placeholder:"+38(XX)-XXX-XX-XX",onChange:this.handleInput,required:!0}),r.a.createElement("br",null),r.a.createElement("button",{className:_.a.submitButton,type:"submit"},"Add contact")))}}]),a}(n.Component);v.defaultProps={initialValue:""};var E=a(9),F=a.n(E),S=function(t){var e=t.name,a=t.number,n=t.onDeleteContact;return r.a.createElement("section",{className:F.a.contactCard},r.a.createElement("button",{className:F.a["material-icons"],onClick:n},"clear"),r.a.createElement("img",{className:F.a.contactImage,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6wCWBCj96njmRi23H8e5ueLNSF0ykh6aGI8ETI8x5vCrLziFi&usqp=CAU",alt:"contact-avatar"}),r.a.createElement("p",null,e),r.a.createElement("p",null,a))},N=a(10),g=a.n(N),y=function(t){var e=t.contacts,a=void 0===e?[]:e,n=t.onDeleteContact;return a.length>0&&r.a.createElement("ul",{className:g.a.contactList},a.map((function(t){return r.a.createElement("li",{className:g.a.contactListItem,key:t.id},r.a.createElement(S,Object.assign({},t,{onDeleteContact:function(){return n(t.id)}})))})))},A=a(13),j=a.n(A),w=function(t){var e=t.contacts,a=void 0===e?[]:e,n=t.value,o=void 0===n?"":n,c=t.onSetFilter,i=void 0===c?function(){alert("Sorry, the filter is updating now. Try to use it later")}:c;return r.a.createElement(r.a.Fragment,null,a.length>1&&r.a.createElement("input",{className:j.a.filterInput,type:"text",value:o,onChange:i,placeholder:"Enter the name or the number to find contact"}))},L=function(t){Object(m.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:t.props.initialContactsArray,filter:t.props.initialFilterValue,inputCallState:t.props.inputCallState},t.addContact=function(e){var a=t.state.contacts,n=a.find((function(t){return t.name===e.name})),r=a.find((function(t){return t.number===e.number}));if(n)alert("Contact whith name ".concat(e.name," has been already saved in your phonebook!!!"));else if(r)alert("The number ".concat(e.number," has been already saved !!! "));else{var o=Object(l.a)(Object(l.a)({},e),{},{id:Object(b.a)()});t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[o])}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.setFilter=function(e){t.setState({filter:e.target.value})},t.showHideForm=function(e){return t.setState((function(t){return{inputCallState:!t.inputCallState}}))},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this.state,e=t.contacts,a=t.filter,n=t.inputCallState,o=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())||t.number.toLowerCase().includes(e.toLowerCase())}))}(e,a);return r.a.createElement("div",{className:f.a.appWraper},r.a.createElement("h1",{className:f.a.appTitle},"Phonebook"),r.a.createElement("button",{className:f.a.addFormButton,onClick:this.showHideForm},n?"Hide form":"Add contact"),n?r.a.createElement(v,{onAddContact:this.addContact,onCloseForm:this.showHideForm}):null,e.length>0&&r.a.createElement("h2",null,"Contacts"),r.a.createElement(w,{contacts:e,value:a,onSetFilter:this.setFilter}),r.a.createElement(y,{contacts:o,onDeleteContact:this.deleteContact}))}}]),a}(n.Component);L.defaultProps={initialContactsArray:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"Cavin Clein",number:"111-12-56"},{id:"id-6",name:"Cris Dior",number:"222-89-12"},{id:"id-7",name:"Gus Gussi",number:"333-17-79"},{id:"id-8",name:"Va Voronin",number:"444-91-26"}],initialFilterValue:"",inputCallState:!1},c.a.render(r.a.createElement(L,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.15f7c458.chunk.js.map