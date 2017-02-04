describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable.insert).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
    expect(hashTable.retrieve).to.be.a('function');
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should overwrite values that have the same key', function() {
    hashTable.insert('Bob', 'Loblaw');
    hashTable.insert('Bob', 'Barker');
    expect(hashTable.retrieve('Bob')).to.equal('Barker');
  });

  it('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).to.equal(undefined);
  });

  it('should handle hash function collisions', function() {
    var v1 = 'val1';
    var v2 = 'val2';
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  // (Advanced! Remove the extra "x" when you want the following tests to run)
  it ('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
  });

  it ('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).to.equal(lastName);
    });
    expect(hashTable._limit).to.equal(16);
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    expect(hashTable._limit).to.equal(8);
  });

  it ('should handle creating multiple buckets', function() {
    hashTable.insert('Jin', 'Chung');
    hashTable.insert('Daniel', 'Ricaud');
    hashTable.insert('Bob', 'Savage');
    hashTable.insert('Steven', 'Tyler');
    hashTable.insert('Macho', 'Man');
    hashTable.insert('Michael', 'Jordan');
    hashTable.insert('Roger', 'Federer');
    hashTable.insert('Rafa', 'Nadal');
    hashTable.insert('Mr.', 'Rogers');
    hashTable.insert('Sponge', 'Bob');
    hashTable.insert('Tosh', '.O');
    hashTable.insert('South', 'Park');
    hashTable.insert('Family', 'Guy');
    hashTable.insert('Sherlock', 'Holmes');
    hashTable.insert('Santa', 'Claus');
    hashTable.insert('Easter', 'Jackalope');
    expect(hashTable.retrieve('Jin')).to.equal('Chung');
    expect(hashTable.retrieve('Daniel')).to.equal('Ricaud');
    expect(hashTable.retrieve('Bob')).to.equal('Savage');
    expect(hashTable.retrieve('Steven')).to.equal('Tyler');
    expect(hashTable.retrieve('Macho')).to.equal('Man');
    expect(hashTable.retrieve('Michael')).to.equal('Jordan');
    expect(hashTable.retrieve('Roger')).to.equal('Federer');
    expect(hashTable.retrieve('Rafa')).to.equal('Nadal');
    expect(hashTable.retrieve('Mr.')).to.equal('Rogers');
    expect(hashTable.retrieve('Sponge')).to.equal('Bob');
    expect(hashTable.retrieve('Tosh')).to.equal('.O');
    expect(hashTable.retrieve('South')).to.equal('Park');
    expect(hashTable.retrieve('Family')).to.equal('Guy');
    expect(hashTable.retrieve('Sherlock')).to.equal('Holmes');
    expect(hashTable.retrieve('Santa')).to.equal('Claus');
    expect(hashTable.retrieve('Easter')).to.equal('Jackalope');
  });
});
