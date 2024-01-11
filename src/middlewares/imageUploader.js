// const multer = require('multer');
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.cloudinaryName,
  api_key: process.env.cloudinaryKey,
  api_secret: process.env.cloudinarySecret,
});

// Set up Multer storage
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// Cloudinary middleware
const cloudinaryMiddleware = (req, res, next) => {
  if (!req.file) {
    return next();
  }

  cloudinary.uploader
    .upload_stream({ resource_type: "auto" }, (error, result) => {
      if (error) {
        console.error("Cloudinary error:", error);
        return res.status(500).json({ error: "Error uploading to Cloudinary" });
      }

      req.cloudinary = {
        public_id: result.public_id,
        url: result.secure_url,
      };

      next();
    })
    .end(req.file.buffer);
};

export default cloudinaryMiddleware;
