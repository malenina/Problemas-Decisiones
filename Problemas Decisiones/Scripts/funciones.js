function puedeVotar() {
  const edad = parseInt(document.getElementById("edad").value);
  const resultado = edad >= 18 ? "Puede votar." : "No puede votar.";
  document.getElementById("resultado").innerText = resultado;
}

function calcularSueldo() {
  const horas = parseFloat(document.getElementById("horas").value);
  const pago = parseFloat(document.getElementById("pago").value);
  let sueldo;

  if (horas <= 40) {
    sueldo = horas * pago;
  } else {
    const extra = horas - 40;
    sueldo = (40 * pago) + (extra * pago * 2);
  }

  document.getElementById("resultado").innerText = `Sueldo semanal: $${sueldo.toFixed(2)}`;
}

function elegirRegalo() {
  const dinero = parseFloat(document.getElementById("dinero").value);
  let regalo;

  if (dinero <= 10) {
    regalo = "Tarjeta";
  } else if (dinero <= 100) {
    regalo = "Chocolates";
  } else if (dinero <= 250) {
    regalo = "Flores";
  } else {
    regalo = "Anillo";
  }

  document.getElementById("resultado").innerText = `Puedes comprar: ${regalo}`;
}

function calcularEstacionamiento() {
  const horas = parseInt(document.getElementById("horas").value);
  let costo = 0;

  if (horas <= 2) {
    costo = horas * 5;
  } else if (horas <= 5) {
    costo = (2 * 5) + ((horas - 2) * 4);
  } else if (horas <= 10) {
    costo = (2 * 5) + (3 * 4) + ((horas - 5) * 3);
  } else {
    costo = (2 * 5) + (3 * 4) + (5 * 3) + ((horas - 10) * 2);
  }

  document.getElementById("resultado").innerText = `Costo total: $${costo.toFixed(2)}`;
}

function menorEdad() {
  const nombres = [
    document.getElementById("nombre1").value,
    document.getElementById("nombre2").value,
    document.getElementById("nombre3").value
  ];

  const edades = [
    parseInt(document.getElementById("edad1").value),
    parseInt(document.getElementById("edad2").value),
    parseInt(document.getElementById("edad3").value)
  ];

  let menorIndice = 0;
  for (let i = 1; i < edades.length; i++) {
    if (edades[i] < edades[menorIndice]) {
      menorIndice = i;
    }
  }

  document.getElementById("resultado").innerText = `La persona de menor edad es ${nombres[menorIndice]} con ${edades[menorIndice]} años.`;
}

function calcularDescuento() {
  const precio = parseFloat(document.getElementById("precio").value);
  let descuento;

  if (precio >= 200) {
    descuento = 0.15;
  } else if (precio > 100) {
    descuento = 0.12;
  } else {
    descuento = 0.10;
  }

  const montoDescuento = precio * descuento;
  const precioFinal = precio - montoDescuento;

  document.getElementById("resultado").innerText = `Descuento: $${montoDescuento.toFixed(2)}, Precio final: $${precioFinal.toFixed(2)}`;
}

function calcularBeca() {
  const edad = parseInt(document.getElementById("edad").value);
  const promedio = parseFloat(document.getElementById("promedio").value);
  let beca = 0;
  let mensaje = "";

  if (edad > 18) {
    if (promedio >= 9) beca = 2000;
    else if (promedio >= 7.5) beca = 1000;
    else if (promedio >= 6.0) beca = 500;
    else mensaje = "Carta de invitación a estudiar más.";
  } else {
    if (promedio >= 9) beca = 3000;
    else if (promedio >= 8) beca = 2000;
    else if (promedio >= 6) beca = 100;
    else mensaje = "Carta de invitación a estudiar más.";
  }

  if (beca > 0) {
    mensaje = `Beca asignada: $${beca}`;
  }

  document.getElementById("resultado").innerText = mensaje;
}

function calcularBono() {
  const sueldo = parseFloat(document.getElementById("sueldo").value);
  const antiguedad = parseFloat(document.getElementById("antiguedad").value);
  let bonoAntiguedad = 0;
  let bonoSueldo = 0;

  if (antiguedad > 2 && antiguedad < 5) {
    bonoAntiguedad = sueldo * 0.20;
  } else if (antiguedad >= 5) {
    bonoAntiguedad = sueldo * 0.30;
  }

  if (sueldo < 1000) {
    bonoSueldo = sueldo * 0.25;
  } else if (sueldo <= 3500) {
    bonoSueldo = sueldo * 0.15;
  } else {
    bonoSueldo = sueldo * 0.10;
  }

  const bono = Math.max(bonoAntiguedad, bonoSueldo);

  document.getElementById("resultado").innerText = `El bono asignado es de: $${bono.toFixed(2)}`;
}

function calcularPoliza() {
  const tipo = document.getElementById("tipo").value;
  const alcohol = document.getElementById("alcohol").checked;
  const lentes = document.getElementById("lentes").checked;
  const enfermedad = document.getElementById("enfermedad").checked;
  const edad = parseInt(document.getElementById("edad").value);

  let base = tipo === "A" ? 1200 : 950;
  let cargo = 0;

  if (alcohol) cargo += 0.10;
  if (lentes) cargo += 0.05;
  if (enfermedad) cargo += 0.05;
  cargo += (edad > 40) ? 0.20 : 0.10;

  const total = base + (base * cargo);

  document.getElementById("resultado").innerText = `Costo total de la póliza: $${total.toFixed(2)}`;
}

function calcularPoliza() {
  const tipo = document.getElementById("tipo").value;
  const alcohol = document.getElementById("alcohol").checked;
  const lentes = document.getElementById("lentes").checked;
  const enfermedad = document.getElementById("enfermedad").checked;
  const edad = parseInt(document.getElementById("edad").value);

  let base = tipo === "A" ? 1200 : 950;
  let cargo = 0;

  if (alcohol) cargo += 0.10;
  if (lentes) cargo += 0.05;
  if (enfermedad) cargo += 0.05;
  cargo += (edad > 40) ? 0.20 : 0.10;

  const total = base + (base * cargo);

  document.getElementById("resultado").innerText = `Costo total de la póliza: $${total.toFixed(2)}`;
}

function calcularPoliza() {
  const tipo = document.getElementById("tipo").value;
  const alcohol = document.getElementById("alcohol").value === "si";
  const lentes = document.getElementById("lentes").value === "si";
  const enfermedad = document.getElementById("enfermedad").value === "si";
  const edad = parseInt(document.getElementById("edad").value);

  let base = tipo === "A" ? 1200 : 950;
  let cargo = 0;

  if (alcohol) cargo += 0.10;
  if (lentes) cargo += 0.05;
  if (enfermedad) cargo += 0.05;
  cargo += (edad > 40) ? 0.20 : 0.10;

  const total = base + (base * cargo);

  document.getElementById("resultado").innerText = `Costo total de la póliza: $${total.toFixed(2)}`;
}

function calcularBonoAntiguedad() {
  const anios = parseInt(document.getElementById("anios").value);
  let bono;

  if (anios >= 1 && anios <= 5) {
    bono = anios * 100;
  } else if (anios > 5) {
    bono = 1000;
  } else {
    bono = 0;
  }

  document.getElementById("resultado").innerText = `Bono: $${bono}`;
}

function calcularSueldoConLimite() {
  const horas = parseInt(document.getElementById("horas").value);
  const pago = parseFloat(document.getElementById("pago").value);
  let sueldo = 0;

  if (horas > 50) {
    document.getElementById("resultado").innerText = "No se permite trabajar más de 50 horas.";
    return;
  }

  if (horas <= 40) {
    sueldo = horas * pago;
  } else if (horas <= 45) {
    sueldo = 40 * pago + (horas - 40) * pago * 2;
  } else {
    sueldo = 40 * pago + 5 * pago * 2 + (horas - 45) * pago * 3;
  }

  document.getElementById("resultado").innerText = `Sueldo semanal: $${sueldo.toFixed(2)}`;
}

function calcularPasaje() {
  const alumnos = parseInt(document.getElementById("alumnos").value);
  let costoPorAlumno;

  if (alumnos > 100) {
    costoPorAlumno = 20;
  } else if (alumnos >= 50) {
    costoPorAlumno = 35;
  } else if (alumnos >= 20) {
    costoPorAlumno = 40;
  } else {
    costoPorAlumno = 70;
  }

  const total = alumnos * costoPorAlumno;

  document.getElementById("resultado").innerText = `Costo por alumno: $${costoPorAlumno}\nCosto total: $${total}`;
}