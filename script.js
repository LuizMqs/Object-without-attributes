const object = {
  "Um atributo com espaços": "1",
};

console.log(object["Um atributo com espaços"]);

for (const [key, value] of Object.entries(object)) {
  if (key == "Um atributo com espaços") {
    console.log(value);
  }
}
