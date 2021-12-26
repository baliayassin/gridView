import React, { useState } from 'react';
import Trailer from './App'

const Grid = ({ config, data }) => {


  return (

    <div>

      <table>
        <thead>
          <tr>
            <th>Col 1</th>
            <th>Col 2</th>
          </tr>
        </thead>
        <tbody>

          {data.map((item,i) =>
            config.map((it, j) =>
              item.Title ?
                <tr key={i}>
                  <td >
                   {item.Title}


                  </td>


                  <td>{item.imdbID}</td>
                </tr>

                :

                <tr key={j}>
                  <td>
                    {item.name}
                  </td>

                  <td>{item.number}</td>
                </tr>
            )


          )}



        </tbody>
      </table>

    </div>)


}


export default Grid;