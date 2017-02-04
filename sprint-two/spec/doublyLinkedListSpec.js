describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = doublyLinkedList();
  });

  it('should have head and tail', function() {
    expect(doublyLinkedList).to.have.property(head);
    expect(doublyLinkedList).to.have.property(tail);
  });
});
