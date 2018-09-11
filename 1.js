var nguoi = {
    firstname: "Nguyen",
    lastname: "Dang An",
    sayhello: function () {
        console.log("Hello, " + this.firstname +" "+ this.lastname);
    }
}
nguoi.sayhello();