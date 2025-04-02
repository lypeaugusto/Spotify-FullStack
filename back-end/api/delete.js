db.songs.aggregate([
  {
    $group: {
      _id: { title: "$title" }, // Campo usado para identificar duplicados
      count: { $sum: 1 },
      docs: { $push: "$_id" }
    }
  },
  {
    $match: { count: { $gt: 1 } } // Apenas documentos duplicados
  }
]);
