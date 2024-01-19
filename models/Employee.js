  // import database
  const db = require("../config/database");
  // membuat class Employee
  class Employee {
    // buat fungsi
      static all() {
          return new Promise((resolve, reject) => {
              // lakukan query ke db untuk ambil data
              const query = "SELECT * FROM employees";
              db.query(query, (err, results) => {
                  resolve(results);
              });
          });
      }

      /**
    * TODO 1: Buat fungsi untuk insert data.
    * Method menerima parameter data yang akan diinsert.
    * Method mengembalikan data student yang baru diinsert.
    */
       static create(Employee) {
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO employees SET ?";
            db.query(sql, Employee, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    const insertedId = results.insertId;
                    resolve(this.show(insertedId));
                }
            });
        });
    }
    
    static async update(id, data) {
      // update data
      await new Promise((resolve, reject) => {
          // query untuk update data
          const sql = "UPDATE employees SET ? WHERE id = ?";
          db.query(sql, [data, id], (err, results) => {
              resolve(results);
          });
      });
    
      // select data by id
      const employees = await this.find(id);
      return employees;
    }


      static find(id) {
          return new Promise((resolve, reject) => {
              const sql = `SELECT * FROM employees WHERE id = ${id} `;
              db.query(sql, (err, results) => {
                  resolve(results);
              });
          });
      }
      static async delete(id) {
        // query delete
        return new Promise((resolve, reject) => {
            // query sql
            const sql = "DELETE FROM employees WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }


  }




  // export class Employee
  module.exports = Employee;
