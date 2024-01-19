// import Model Employee
const Employee = require("../models/Employee")
// buat class EmployeeController
class EmployeeController {
  // buat fungsi
  async index(req, res) {
    // TODO 4: Tampilkan data employees
    const employees = await Employee.all();

    const data = {
        message: "Menampilkan data employees",
        data: employees
    };

    res.status(200).json(data);
}

async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */

     //jika data unfined maka kirim response error
     const { name, gander, phone, address, email, status, hired_on } = req.body

     //jika data unfined maka kirim response error
     if (!name || !gander || !phone || !address || !email || !status ||!hired_on){
         const data = {
             message : " 422"
         };
 
         return res.status(422).json(data);
     }
     //else
     const employees = await Employee.create(req.body);
     
     const data = {
         message: "Menambahkan data pegawai",
         data: employees
     };
 
     res.status(201).json(data);
}


async update(req, res) {
  /**
   * check id employee
   * jika ada, lakukan update
   * jika tidak, kirim data tidak ada
   */
  const { id } = req.params;

  const employees = await Employee.find(id);

  if (employees) {
      // update data
      const employeesUpdated = await Employee.update(id, req.body);
      const data = {
          message: "Mengupdate data pegawai",
          data: employeesUpdated,
      };

      res.status(200).json(data);
  }
  else {
      // kirim data tidak ada
      const data = {
          message: "Data tidak ada",
      };

      res.status(404).json(data);
  }
}
async show(req, res) {
  /**
   * cari id
   * jika ada, kirim datanya
   * jika tidak, kirim data tidak ada
   */
  const { id } = req.params;

  const employees = await Employee.find(id);

  if (employees) {
      const data = {
          message: "Menampilkan detail data pegawai",
          data: employees,
      };

      res.status(200).json(data);
  }
  else {
      const data = {
          message: "Data tidak ada",
      };

      res.status(404).json(data);
  }

}


async destroy(req, res) {
  const { id } = req.params;

  /**
   * cari id
   * jika ada, hapus data
   * jika tidak, kirim data tidak ada
   */

  const employees = await Employee.find(id);

  if (employees) {
      // Menghapus data
      await Employee.delete(id);
      const data = {
          message: "Menghapus data pegawai",
      };

      res.status(200).json(data);
  }
  else {
      // data tidak ditemukan
      const data = {
          message: "Data tidak ditemukan",
      };

      res.status(404).json(data);
  }
}

async search(req, res) {
  try {
    const { name } = req.params;
    const employees = await Employee.searchByName(name);

    if (employees) {
      const data = {
        message: "Menampilkan hasil pencarian nama sesuai resource",
        data: employees,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}
async status(req, res) {
  try {
    const { status } = req.params;

    // Panggil metode pencarian berdasarkan status dari model Employee
    const searchResults = await Employee.status(status);

    // Kirim hasil pencarian sebagai respons JSON
    res.json({
      message: `search results for employees with status: ${status}`,
      data: searchResults,
    });
  } catch (error) {
    // Tangani kesalahan jika terjadi
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}

}


// membuat object EmployeeController
const object = new EmployeeController();

// export object EmployeeController
module.exports = object;
