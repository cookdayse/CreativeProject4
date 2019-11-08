var app = new Vue({
  el: '#app',
  data: {
    owl: [],
  },
  methods: {
    async fetchOWL() {
      console.log("In Fetch ");
      var url = "http://cookdayse.com:3000/owl";
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((owlList) => {
          console.log("owlList");
          console.log(owlList);
          this.owl = [];
          this.owl.push({ content: owlList.content, author: owlList.author });
          console.log("Got owlList");
        });
    },
    async fetchOWLList() {
      console.log("In Fetch ");
      var url = "http://cookdayse.com:3000/owlList";
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((owlList) => {
          console.log("owlList");
          console.log(owlList);
          console.log(owlList.results[0].author);
          this.owl = [];
          for (let i = 0; i < owlList.results.length; i++) {
            console.log(owlList.results[i].author);
            console.log(owlList.results[i].content);
            this.owl.push({ content: owlList.results[i].content, author: owlList.results[i].author });
          };
          console.log("Got owlList");
        });
    },
  },
});
