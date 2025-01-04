const db = require ('../../config/db');

exports.NewSlider = async (req, res) => {
  const {
    attachment,
    description,
  } = req.body;
  try {
    const query = `
      INSERT INTO slider (attachment, description)
      VALUES (?, ?)
    `;
    
    await db.query(query, [attachment, description]);
    return res.status (200).json ({message: 'Slider Created'});
  } catch (error) {
    console.log (error);
    return res.status (500).json ({message: 'Sth Went Wrong'});
  }
};

exports.AllSlider = async (req, res) => {
  try {
    const query = 'SELECT * FROM slider ORDER BY createdAt DESC';
    
    // Assuming db is your database connection instance
    db.query(query, (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something Went Wrong' });
      }
      
      return res.status(200).json({ all: results });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something Went Wrong' });
  }
};

exports.UpdateSlider = async (req, res) => {
  const { id, attachment, description } = req.body;  // Include id to identify which slider to update
  try {
    // SQL query to update the slider record with the given id
    const query = `
      UPDATE slider 
      SET attachment = ?, description = ?
      WHERE id = ?
    `;

    const result = await db.query(query, [attachment, description, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Slider not found' });  // Handle case where no record was found with the given id
    }

    return res.status(200).json({ message: 'Slider Updated' });  // Success message
  } catch (error) {
    console.log(error);  // Log any errors
    return res.status(500).json({ message: 'Something Went Wrong' });  // Error response
  }
};


exports.DeleteSlider = async (req, res) => {
  const { id } = req.query;  // Expect the ID as a URL parameter
  console.log("Received ID for deletion:", id);  // Log the received ID

  try {
    // Check if the ID exists before attempting to delete
    const checkQuery = `SELECT * FROM slider WHERE id = ?`;
    const checkResult = await db.query(checkQuery, [id]);

    if (checkResult.length === 0) {
      return res.status(404).json({ message: 'Slider not found' });
    }

    // Perform the deletion query
    const query = `
      DELETE FROM slider
      WHERE id = ?
    `;
    
    const result = await db.query(query, [id]);
    
    // Log the result of the delete query
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Slider not found' });
    }

    return res.status(200).json({ message: 'Slider Deleted Successfully' });
  } catch (error) {
    console.log("Error during delete operation:", error);  // Log any errors
    return res.status(500).json({ message: 'Something Went Wrong' });
  }
};

