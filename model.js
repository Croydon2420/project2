var mylists = new MainListCollection();

function MainListCollection() {

    this.collection = [];
    this.add = function(mainitem){
        this.collection.push(new SubList(mainitem));
    };
}

function SubList(sublists) {
    this.name = sublists;
    this.collection = []; //list items
    this.add = function(sublists){
        this.collection.push(new Item(sublists))
    };
    // this.delete = function(item){
    //     console.log(`${item} was to delete`);
    //     this.collection.splice(item, 1);
    // };
}

function Item(item) {
    this.name = item;
}