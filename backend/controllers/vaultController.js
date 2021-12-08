const { v4: uuidv4 } = require("uuid");
const Vault = require("../models/vaultModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// fetch all
exports.getAllCodeFiles = catchAsyncErrors(async (req, res, next) => {
  const codes = await Vault.find();
  res.status(200).json({ success: true, codes });
});

// create code
exports.createCode = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const code = await Vault.create({ ...req.body, code_id: uuidv4() });
  res.status(200).json({ success: true, code });
});

// update code
exports.updateFile = catchAsyncErrors(async (req, res, next) => {
  const code = await Vault.findById(req.params.id);

  if (!code) {
    return next(new ErrorHandler(404, "No such code!"));
  }

  const updated_file = await Vault.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    UseFindAndModify: false,
  });

  res.status(200).json({ success: true, updated_file });
});

// delete code
exports.deleteCode = catchAsyncErrors(async (req, res, next) => {
  const code = await Vault.findById(req.params.id);

  if (!code) {
    return next(new ErrorHandler(404, "No such code found"));
  }

  await Vault.remove();
  res.status(200).json({ success: true, message: "code deleted" });
});
