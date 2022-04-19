import React from "react";
import { Link } from 'react-router-dom';

export default function Home(){

    return(
        <main>
            <h1>Leaderboard</h1>
            <h5>PLANILLA DE SCORES NETO: ABRIL 2022</h5>
                <table>
                    <thead>
                        <tr>
                            <td>Jugador</td>
                            <td>HDC</td>
                            <td>2/4</td>
                            <td>3/4</td>
                            <td>9/4</td>
                            <td>10/4</td>
                            <td>14/4</td>
                            <td>15/4</td>
                            <td>16/4</td>
                            <td>17/4</td>
                            <td>23/4</td>
                            <td>24/4</td>
                            <td>30/4</td>
                            <td>M1</td>
                            <td>M2</td>
                            <td>P</td>
                            <td>SUM</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>GALLEGO</td>
                        </tr>
                        <tr><td>LECHUZA</td></tr>
                        <tr><td>NINJA</td></tr>
                        <tr><td>SUECO</td></tr>
                        <tr><td>NONO</td></tr>
                        <tr><td>DENGUE</td></tr>
                        <tr><td>RUSO</td></tr>
                        <tr><td>B</td></tr>
                        <tr><td>LG</td></tr>
                        <tr><td>PAPA</td></tr>
                        <tr><td>PAQUETE</td></tr>
                        <tr><td>MUGRE</td></tr>
                        <tr><td>BARCO</td></tr>
                        <tr><td>LECHE</td></tr>
                        <tr><td>PERRO</td></tr>
                        <tr><td>CEPO</td></tr>
                        <tr><td>EL 22</td></tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
        </main>
        //         <div>
        //     <div>
        //         <Link to='/loadscorecard'>
        //             <button>Cargar Tarjeta</button>
        //         </Link>
        //     </div>
        // </div>
    );
};