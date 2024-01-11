import bcrypt  from 'bcrypt';
const saltRounds = 10;

const hashPassword = async (password) => {
    try {
        const generatedHashPassword = await bcrypt.hash(password, saltRounds);
        return generatedHashPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};

const comparePassword = async (frontEndPassword ,storedPassword) => {
    try {
        const isPasswordValid = await bcrypt.compare(frontEndPassword, storedPassword)
        return isPasswordValid;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};

export {
    hashPassword,
    comparePassword
};