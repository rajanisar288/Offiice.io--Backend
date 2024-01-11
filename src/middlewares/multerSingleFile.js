import multer from "multer";
const storage = multer.memoryStorage();
const uploadSingleFile = multer({ storage: storage });
export default uploadSingleFile;
