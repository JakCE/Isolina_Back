import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Usuarios' })
export class Usuario{
    @PrimaryGeneratedColumn()
    UsuarioID: number
    @Column({ unique: true })
    DNI: number
    @Column()
    Nombres: string
    @Column()
    Apellidos: string
    @Column({ nullable: false, unique: true })
    Email: string
    @Column()
    Telefono: number
    @Column()
    Direccion: string
    @Column({ nullable: false })
    Passw: string
    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    Fecha_Registro: Date
}