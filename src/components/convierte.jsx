import React from 'react'

export default function convierte(fecha) {
  return fecha.substr(6,2)+"/"+fecha.substr(4,2)+"/"+fecha.substr(0,4)
}
