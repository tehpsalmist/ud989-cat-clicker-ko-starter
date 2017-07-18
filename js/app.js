var Cat = function() {
    this.clickCount = ko.observable(0);
    this.catLevel = ko.observable(1);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('something');
    this.nicknameArray = ko.observableArray([{nickname: 'Cutie'},{nickname: 'Fluffy'},{nickname: 'Stupid'},{nickname: 'Next'}]);
}

var ViewModel = function() {
    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
        this.levelUp();
    };

    this.levelUp = function() {
        if (this.currentCat().clickCount() % 20 === 0) {
            this.currentCat().catLevel(this.currentCat().catLevel() + 1);
        };
    };
}

ko.applyBindings(new ViewModel());