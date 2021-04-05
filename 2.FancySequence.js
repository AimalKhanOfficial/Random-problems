//Fancy Class

var Fancy = function() {
    this.numbersList = [];
}

Fancy.prototype.append = function(val) {
    this.numbersList.push(val);
}

Fancy.prototype.addAll = function(val) {
    this.numbersList.map((number, index) => {
        this.numbersList[index] = number + val;
    });
}

Fancy.prototype.multAll = function(val) {
    this.numbersList.map((number, index) => {
        this.numbersList[index] = number * val;
    });
}

Fancy.prototype.getIndex = function(val) {
    console.log('>> Gets the current value at index idx (0-indexed) of the sequence modulo 109 + 7. If the index is greater or equal than the length of the sequence, return -1.');
}

Fancy.prototype.showAll = function() {
    console.log('>> Current', this.numbersList);
}

let fancy = new Fancy();
fancy.append(2);   // fancy sequence: [2]
fancy.addAll(3);   // fancy sequence: [2+3] -> [5]
fancy.append(7);   // fancy sequence: [5, 7]
fancy.multAll(2);  // fancy sequence: [5*2, 7*2] -> [10, 14]
fancy.getIndex(0); // return 10
fancy.addAll(3);   // fancy sequence: [10+3, 14+3] -> [13, 17]
fancy.append(10);  // fancy sequence: [13, 17, 10]
fancy.multAll(2);  // fancy sequence: [13*2, 17*2, 10*2] -> [26, 34, 20]
fancy.getIndex(0); // return 26
fancy.getIndex(1); // return 34
fancy.getIndex(2); // return 20
fancy.showAll();