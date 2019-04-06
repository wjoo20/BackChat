"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuarios {
    constructor() {
        this.lista = [];
    }
    /**
     * Funcion para agregar un usuario a la lista de usuarios
     * @param usuario
     */
    agregar(usuario) {
        this.lista.push(usuario);
    }
    /**
     * Función para devolver los usuarios activos
     * OJO EN EL CHAT
     */
    getLista() {
        let listaTemporal = this.lista.filter((usuario) => {
            //if(usuario.nombre != 'sin-nombre'){
            return usuario;
            //}
        });
        return listaTemporal;
    }
    /**
     * Actualiza el nombre de un usuario presente en la lista de usuarios dado su id de maquina
     * @param id
     * @param nombre
     */
    actualizarNombre(id, nombre) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
    }
    /**
     * Función que devuelve un usuario dado su id
     * @param id
     */
    getUsuario(id) {
        for (let usuario of this.lista) {
            //if(usuario.id === id){
            return usuario;
            //}
        }
    }
    borrarUsuario(id) {
        this.lista = this.lista.filter((usuario) => {
            if (usuario.id != id) {
                return usuario;
            }
        });
    }
}
exports.Usuarios = Usuarios;
