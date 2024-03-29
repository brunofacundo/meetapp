import File from '../models/File';

class FileController {
    async store(req, res) {
        const { originalname: name, filename: path } = req.file;

        const file = await File.create({
            name,
            path
        });

        return res.json({
            id: file.id,
            url: file.url,
            name: file.name
        });
    }
}

export default new FileController();
