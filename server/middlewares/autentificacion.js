//
const jwt = require('jsonwebtoken');
//
//VERIFICAR TOKEN
//

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.usuario = decoded.usuario;
        next();

    });


}

//VERIFICAR ADMIN_ROLE
let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        // res.json({
        //     ok: true,
        //     message: 'Rol Valido'
        // })
        next();
    } else {
        return res.json({
            ok: false,
            message: 'Rol No Valido'
        })
    }
}

module.exports = {
    verificaToken,
    verificaAdmin_Role

}