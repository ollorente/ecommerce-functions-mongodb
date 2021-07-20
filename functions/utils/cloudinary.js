const fs = require("fs-extra");
const cloudinary = require("cloudinary");

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
	cloudinary_url: process.env.CLOUDINARY_URL,
});

module.exports.up = async function (params) {
	const result = await cloudinary.v2.uploader.upload(
		params.path,
		{
			folder: params.folder,
		},
		function (error, result) {
			console.log(error);
		}
	);

	await fs.unlink(params.path);

	return {
		image: result.secure_url,
		publicId: result.public_id,
	};
};

module.exports.down = async function (params) {
	cloudinary.uploader.destroy(params, function (result) {
		console.log(result);
	});

	return true;
};
