const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://caioalvesrex:5prdj8Ay0GBAefR6@cluster0.lqlrwwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )

        console.log("Conectado ao banco");
    }catch (error) {
        console.log(`ERRO: ${error}`)
    }
}

module.exports = main;