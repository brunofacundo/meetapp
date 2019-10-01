import * as Yup from 'yup';

export default async (req, res, next) => {
    try {
        const schema = Yup.object().shape({
            meetupId: Yup.number().required()
        });

        await schema.validate(req.params, { abortEarly: false });

        return next();
    } catch (err) {
        return res.status(400).json({ error: 'Falha na validação dos dados', messages: err.inner });
    }
};