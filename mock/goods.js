let data = [
  {
    title: 'Python'
  },
  {
    title: 'C++'
  }
];
export default {
  'get /api/goods': function (req, res) {
    setTimeout(() => {
      res.json({ result: data });
    }, 2000);
  }
}