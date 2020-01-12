const summarize = require('text-summarization')

module.exports.summarizeTextCtrl = async (req, res, next) => {
  console.log("pass text and summarize it");
  let error;

  if (!req.body.text) {
    error = new Error(
      "The text to summarize is required!"
    );
    error.code = 400;
    return next(error);
  }

  const text = req.body.text;
  const textRank = await summarize({ text });
  res.status(200).json(textRank);
};
