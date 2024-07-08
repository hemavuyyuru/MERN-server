const User = require("./model/userSchema");

const resolvers = {
  Query: {
    getUsers: async (_, { id }) => {
      return await User.findById(id);
    },
    
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const { name, email, password } = input;
        if (!name || !email || !password) {
          throw new Error("Enter all the fields");
        }
        const newUser = new User({ name, email, password });
        return await newUser.save();
      } catch (err) {
        throw new Error(err);
      }
    },
    changePass: async (_, { id, password }) => {
      try {
        const usernew = await User.findByIdAndUpdate(id, { password: password }, { new: true });
        if (!usernew) {
          throw new Error("User not found");
        }
        console.log(usernew);
        return usernew;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  User: {
    name: (parent) => parent.name || '',
    email: (parent) => parent.email || '',
    password: (parent) => parent.password || ''
  }
};

module.exports = resolvers;
