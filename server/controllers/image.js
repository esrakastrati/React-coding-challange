const Image = require("../models/image");
const minifaker = require("minifaker");
require("minifaker/locales/en");

exports.read = async (req, res) => {
    const count = req.query.count ? Number(req.query.count) : 0;
    const LIMIT = 20;

    try {
        const posts = await Image.find({});

        res.status(200).json({
            success: true,
            data: posts,
            message: "You did it"
        });
    } catch (error) {
        res.status(400).json({
            error: `Error getting posts: ${error.message}`,
        });
    }
};

// Used this via PostMan to create arbitrary images with the help of the minifaker package
exports.create = async (req, res) => {
    const images = [];

    try {
        const createImages = async (_) => {
            for (let index = 0; index < 70; index++) {
                const randomImageNum = Math.floor(Math.random() * 70) + 1;
                const image = new Image({
                    user: minifaker.username(),
                    imageUrl: `https://i.pravatar.cc/600?img=${randomImageNum}`,
                    description: `${minifaker.word()} ${minifaker.word()} ${minifaker.cityName()}`,
                });

                images.push(image);
            }
        };

        await createImages();
        await Image.insertMany(images);

        res.status(200).json({
            success: true,
            object: images
        });
    } catch (error) {
        res.status(400).json({
            error: `Error create posts: ${error.message}`,
        });
    }
};