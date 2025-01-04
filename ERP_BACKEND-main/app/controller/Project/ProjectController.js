const db = require('../../config/db');

exports.NewProject = async (req, res) => {
    const {
        attachment,
        type,
        description,
        companyName,
    } = req.body;

    try {
        const query = `
            INSERT INTO project (attachment, type, description, companyName)
            VALUES (?, ?, ?, ?)
        `;

        await db.query(query, [attachment, type, description, companyName]);
        return res.status(200).json({ message: 'Project Created' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};

exports.AllProject = async (req, res) => {
    try {
        const query = 'SELECT * FROM project ORDER BY createdAt DESC';

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

exports.UpdateProject = async (req, res) => {
    const { id, attachment, type, description, companyName } = req.body;

    try {
        const query = `
            UPDATE project 
            SET attachment = ?, type = ?, description = ?, companyName = ?
            WHERE id = ?
        `;

        const result = await db.query(query, [attachment, type, description, companyName, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Project not found' });
        }

        return res.status(200).json({ message: 'Project Updated' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};

exports.DeleteProject = async (req, res) => {
    const { id } = req.query;

    try {
        const checkQuery = `SELECT * FROM project WHERE id = ?`;
        const checkResult = await db.query(checkQuery, [id]);

        if (checkResult.length === 0) {
            return res.status(404).json({ message: 'Project not found' });
        }

        const query = `
            DELETE FROM project
            WHERE id = ?
        `;

        const result = await db.query(query, [id]);

        // This check is technically redundant as the existence check already covers it.
        // It's left here for clarity but can be removed.
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Project not found' });
        }

        return res.status(200).json({ message: 'Project Deleted Successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};