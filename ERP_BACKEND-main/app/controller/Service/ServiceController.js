const db = require('../../config/db');

exports.NewService = async (req, res) => {
    const {
        attachment,
        description,
        title, // Added title field
    } = req.body;
    try {
        const query = `
            INSERT INTO service (attachment, description, title)
            VALUES (?, ?, ?)
        `;

        await db.query(query, [attachment, description, title]);
        return res.status(200).json({ message: 'Service Created' });
    } catch (error) {
        console.error(error); // Use console.error for errors
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};

exports.AllService = async (req, res) => {
    try {
        const query = 'SELECT * FROM service ORDER BY createdAt DESC';

        db.query(query, (error, results) => { // Removed unused 'fields' argument
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

exports.UpdateService = async (req, res) => {
    const { id, attachment, description, title } = req.body; // Include title in update
    try {
        const query = `
            UPDATE service 
            SET attachment = ?, description = ?, title = ?
            WHERE id = ?
        `;

        const result = await db.query(query, [attachment, description, title, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Service not found' });
        }

        return res.status(200).json({ message: 'Service Updated' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};

exports.DeleteService = async (req, res) => {
    const { id } = req.query;

    try {
        const checkQuery = `SELECT * FROM service WHERE id = ?`;
        const checkResult = await db.query(checkQuery, [id]);

        if (checkResult.length === 0) {
            return res.status(404).json({ message: 'Service not found' });
        }

        const query = `
            DELETE FROM service
            WHERE id = ?
        `;

        const result = await db.query(query, [id]);

        if (result.affectedRows === 0) { // Redundant check after existence check
            return res.status(404).json({ message: 'Service not found' });
        }

        return res.status(200).json({ message: 'Service Deleted Successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
    }
};