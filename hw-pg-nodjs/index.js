let express = require('express')

let app = express()

require('dotenv').config()

let pool = require('./db')

app.use(express.json())

PORT = process.env.PORT || 3001

app.get('/books',async(req,res)=>{
    try {
        const result = await pool.query('select * from books')
    result ? res.status(200).json(result.rows) : res.status(400).json({message: "Bad request"})
    } catch (error) {
        console.log('Aqparattar bazasimen baylanisu mumkin bolmady',error.message);
        
    }
    
})

app.get('/books/:id', async (req, res) => {
  let { id } = req.params;
  try {
    let { rows } = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    let book = rows[0];
    book
      ? res.status(200).json(book)
      : res.status(404).json({ message: "No such book!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error!" });
  }
});
app.listen(PORT,()=>{
    console.log(`Server ${PORT} portta jumis istep tur`);
    
})