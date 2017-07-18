var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        nicknameArray: [{nickname: 'Cutie'},{nickname: 'Fluffy'},{nickname: 'Stupid'}],
        catLevel: 1
    },
    {
        clickCount: 0,
        name: 'Fluffy',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        nicknameArray: [{nickname: 'Barnie'},{nickname: 'DumbDumb'},{nickname: 'Next'}],
        catLevel: 1
    },
    {
        clickCount: 0,
        name: 'Ninny',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        nicknameArray: [{nickname: 'Floofer'},{nickname: 'Spooky'},{nickname: 'Ralph'}],
        catLevel: 1
    },
    {
        clickCount: 0,
        name: 'stupidHead',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        nicknameArray: [{nickname: 'Cedric'},{nickname: 'Harry'},{nickname: 'JohnBoy'}],
        catLevel: 1
    }
]

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.catLevel = ko.observable(data.catLevel);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknameArray = ko.observableArray(data.nicknameArray);
}

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.changeCat = function(clicked) {
        self.currentCat(clicked);
    };

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
        self.levelUp();
    };

    this.levelUp = function() {
        if (self.currentCat().clickCount() % 20 === 0) {
            self.currentCat().catLevel(self.currentCat().catLevel() + 1);
        };
    };
}

ko.applyBindings(new ViewModel());