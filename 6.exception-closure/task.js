// Форматтер

function parseCount(str) {
   const num = Number.parseFloat(str);
   if ( isNaN(num) === true) {
      throw new Error("Невалидное значение");
   }
   return num;
}

function validateCount(str) {
   try {
      return parseCount(str);
   } catch (error)  {
      return error;
   }
}

// Треугольник

class Triangle {
   constructor(a, b, c) {
      if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
         throw new Error("Треугольник с такими сторонами не существует");
      }

      this.a = a;
      this.b = b;
      this.c = c;
   }

   get perimeter() {
      return this.a + this.b + this.c;
   }

   get area() {
      const p = this.perimeter / 2;
      const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return +square.toFixed(3);
   }

}

function getTriangle(a, b, c) {
   try {
      return new Triangle(a, b, c);
   } catch(error) {
      const obj = {
         get perimeter() {
            return "Ошибка! Треугольник не существует";
         },
         get area() {
            return "Ошибка! Треугольник не существует";
         }
      }
      return obj;
   }
}
