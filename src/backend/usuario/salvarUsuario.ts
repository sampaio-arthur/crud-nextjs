'use server'

import Id from "@/core/utils/Id";
import { Usuario } from "@prisma/client";
import RepositorioUsuario from "./RepositorioUsuario";

export default async function salvarUsuario(usuario: Partial<Usuario>) {

    const novoUsuario = {
        ...usuario,
        id: usuario.id ?? Id.novo,
    }
    
    return RepositorioUsuario.salvar(novoUsuario as Usuario)
}