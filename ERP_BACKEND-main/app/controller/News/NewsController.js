const db = require('../../config/db');

exports.NewNews = async (req, res) => {
    const {
        attachment,
        title,
        description,
    } = req.body;

    try {
        const query = `
            INSERT INTO news (attachment, title, description)
            VALUES (?, ?, ?)
        `;

        await db.query(query, [attachment, title, description]);
        return res.status(200).json({ message: 'News Created' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};

exports.AllNews = async (req, res) => {
    try {
        const query = 'SELECT * FROM news ORDER BY createdAt DESC';

        db.query(query, (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'Something Went Wrong' });
            }

            return res.status(200).json({ all: results });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};

exports.UpdateNews = async (req, res) => {
    const { id, attachment, title, description } = req.body;

    try {
        const query = `
            UPDATE news
            SET attachment = ?, title = ?, description = ?
            WHERE id = ?
        `;

        const result = await db.query(query, [attachment, title, description, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'News not found' });
        }

        return res.status(200).json({ message: 'News Updated' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};

exports.DeleteNews = async (req, res) => {
    const { id } = req.query;

    try {
        const checkQuery = `SELECT * FROM news WHERE id = ?`;
        const checkResult = await db.query(checkQuery, [id]);

        if (checkResult.length === 0) {
            return res.status(404).json({ message: 'News not found' });
        }

        const query = `
            DELETE FROM news
            WHERE id = ?
        `;

        const result = await db.query(query, [id]);

        // Redundant check (can be removed)
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'News not found' });
        }

        return res.status(200).json({ message: 'News Deleted Successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};