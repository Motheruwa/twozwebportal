const db = require('../../config/db');

exports.NewAward = async (req, res) => {
    const {
        attachment,
        type,
        companyName,
    } = req.body;

    try {
        const query = `
            INSERT INTO award (attachment, type, companyName)
            VALUES (?, ?, ?)
        `;

        await db.query(query, [attachment, type, companyName]);
        return res.status(200).json({ message: 'Award Created' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};

exports.AllAward = async (req, res) => {
    try {
        const query = 'SELECT * FROM award ORDER BY createdAt DESC';

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

exports.UpdateAward = async (req, res) => {
    const { id, attachment, type, companyName } = req.body;

    try {
        const query = `
            UPDATE award
            SET attachment = ?, type = ?, companyName = ?
            WHERE id = ?
        `;

        const result = await db.query(query, [attachment, type, companyName, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Award not found' });
        }

        return res.status(200).json({ message: 'Award Updated' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};

exports.DeleteAward = async (req, res) => {
    const { id } = req.query;

    try {
        const checkQuery = `SELECT * FROM award WHERE id = ?`;
        const checkResult = await db.query(checkQuery, [id]);

        if (checkResult.length === 0) {
            return res.status(404).json({ message: 'Award not found' });
        }

        const query = `
            DELETE FROM award
            WHERE id = ?
        `;

        const result = await db.query(query, [id]);

        // Redundant check (can be removed)
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Award not found' });
        }

        return res.status(200).json({ message: 'Award Deleted Successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};