var ViewModel = function() {
    self = this;
    this.clickCount = ko.observable(0);
    this.catLevel = ko.observable(1);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('something');
    this.nicknameArray = ko.observableArray([{nickname: 'Cutie'},{nickname: 'Fluffy'},{nickname: 'Stupid'},{nickname: 'Next'}]);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
        this.levelUp();
    };

    this.levelUp = function() {
        if (this.clickCount() % 20 === 0) {
            this.catLevel(this.catLevel() + 1);
        };
    };
}

ko.applyBindings(new ViewModel());