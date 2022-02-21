/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) {
        let data;
        data = { name: req.body.name}
        Employee.create(req.body).fetch().exec(function (err, employee) {
          if (err) return (err);
          return res.json(employee);
        })
    },

    find: function (req, res) {
        Employee.find().exec(function (err, employee) {
          return res.json(employee);
        });
      },
    findone(req,res){
        let query;
        query = { "id": req.param('id') }
        Employee.find(query).exec(function (err, employee) {
            if (err) return(err);
            return res.json(employee)
        })
    },
    update : function (req, res) {
        let query;
        let data;
        query = { "id": req.param('id') }
        
        
        Employee.update(query,req.body).fetch().exec(function (err, employee) {
          return res.json(employee)
        })
    },
    delete: function (req, res) {
            let query;
            query = { "id": req.param('id') }
            Employee.destroy(query).fetch().exec(function (err, employee) {
              if (err) return(err);
              return res.json(employee)
            })
        },
    };

