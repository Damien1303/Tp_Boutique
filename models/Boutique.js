import mongoose from "mongoose";
// import mongooseUniqueValidator from "mongoose-unique-validator";

const boutiqueSchema = mongoose.Schema(
    {
        pseudo: { type: String, require: true},
        email:  {type: String, require: true, unique: true},
        password: { type: String, require: true},

    },
    {
        timestamps: {createdAt: true}
    }
)

// boutiqueSchema.plugin(mongooseUniqueValidator);

export default mongoose.model("Boutique",boutiqueSchema)