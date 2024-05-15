describe('newComment', () => {
  it('should have a url property', () => {
    const newComment = { url: 'https://www.example.com };
    assert.ok(newComment.url, 'url property exists');
  });
});
